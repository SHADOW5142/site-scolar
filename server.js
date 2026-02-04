const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const crypto = require('crypto');

dotenv.config();

const app = express();

// Middleware CORS - permite toate originile pentru development și production
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
}));
app.use(express.json());
app.use(express.static(__dirname));

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://vladw239_db_user:HklumfcDupio1Uxi@daniel.f39b4vd.mongodb.net/site_scolar';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

// Schema-uri
const studentSchema = new mongoose.Schema({
    classId: String,
    section: String,
    subject: String,
    name: String,
    theme: String,
    grade: Number,
    createdAt: { type: Date, default: Date.now }
});

const adminSchema = new mongoose.Schema({
    passwordHash: String,
    updatedAt: { type: Date, default: Date.now }
});

// Modele
const Student = mongoose.model('Student', studentSchema);
const AdminSettings = mongoose.model('AdminSettings', adminSchema);

// API Endpoints

// GET all students
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        
        // Organizează datele în structura inițială (clasa-section-subject)
        const organized = {};
        students.forEach(s => {
            const key = `${s.classId}-${s.section}`;
            if (!organized[key]) organized[key] = {};
            if (!organized[key][s.subject]) organized[key][s.subject] = [];
            organized[key][s.subject].push({
                name: s.name,
                theme: s.theme,
                grade: s.grade,
                _id: s._id
            });
        });
        
        res.json(organized);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST add student
app.post('/api/students', async (req, res) => {
    try {
        const { classId, section, subject, name, theme, grade } = req.body;
        const student = new Student({ classId, section, subject, name, theme, grade });
        await student.save();
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT edit student
app.put('/api/students/:id', async (req, res) => {
    try {
        const { name, theme, grade } = req.body;
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { name, theme, grade },
            { new: true }
        );
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE student
app.delete('/api/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET admin password hash
app.get('/api/admin/settings', async (req, res) => {
    try {
        const settings = await AdminSettings.findOne();
        res.json(settings ? { passwordHash: settings.passwordHash } : { passwordHash: null });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// SET admin password
app.post('/api/admin/set-password', async (req, res) => {
    try {
        const { passwordHash } = req.body;
        let settings = await AdminSettings.findOne();
        if (!settings) {
            settings = new AdminSettings({ passwordHash });
        } else {
            settings.passwordHash = passwordHash;
            settings.updatedAt = new Date();
        }
        await settings.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// EXPORT CSV
app.get('/api/export/csv', async (req, res) => {
    try {
        const students = await Student.find();
        let csv = 'Clasa,Secțiune,Materie,Nume Elev,Tema,Nota\n';
        
        students.forEach(s => {
            const classNum = s.classId.replace('clasa-', '');
            csv += `${classNum},"${s.section}","${s.subject}","${s.name}","${s.theme}",${s.grade}\n`;
        });
        
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=students.csv');
        res.send(csv);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// IMPORT CSV
app.post('/api/import/csv', async (req, res) => {
    try {
        const { csvData } = req.body;
        const lines = csvData.trim().split('\n').slice(1); // skip header
        
        const students = [];
        lines.forEach(line => {
            const cols = line.match(/(?:"[^"]*"|[^,])+/g) || [];
            if (cols.length < 6) return;
            
            const classNum = cols[0].trim();
            const section = cols[1].trim().replace(/"/g, '');
            const subject = cols[2].trim().replace(/"/g, '');
            const name = cols[3].trim().replace(/"/g, '');
            const theme = cols[4].trim().replace(/"/g, '');
            const grade = parseFloat(cols[5].trim());
            
            if (!name || isNaN(grade)) return;
            
            students.push({
                classId: `clasa-${classNum}`,
                section,
                subject,
                name,
                theme,
                grade
            });
        });
        
        // Șterge date vechi și adauga date noi
        await Student.deleteMany({});
        await Student.insertMany(students);
        
        res.json({ success: true, count: students.length });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CLEAR all data
app.post('/api/admin/clear-data', async (req, res) => {
    try {
        await Student.deleteMany({});
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
