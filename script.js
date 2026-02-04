// API Configuration
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:5000' 
    : 'https://site-scolar-api.onrender.com'; // Va fi schimbat cu URL-ul real

// Date inițiale cu note pentru elevi - ACTUALIZATE
const initialData = {
    'clasa-5': {
        romana: [
            { name: 'Ioan Popescu', theme: 'Substantivul', grade: 9.5 },
            { name: 'Maria Ionescu', theme: 'Adjectivul', grade: 8.8 },
            { name: 'Alex Georgescu', theme: 'Verbul', grade: 7.5 },
            { name: 'Elena Mihai', theme: 'Pronumele', grade: 9.2 }
        ],
        engleza: [
            { name: 'Ioan Popescu', theme: 'Present Simple', grade: 7.8 },
            { name: 'Maria Ionescu', theme: 'Present Continuous', grade: 8.9 },
            { name: 'Alex Georgescu', theme: 'Past Tense', grade: 8.1 },
            { name: 'Elena Mihai', theme: 'Future Tense', grade: 9.0 }
        ],
        franceza: [
            { name: 'Ioan Popescu', theme: 'Présent', grade: 7.5 },
            { name: 'Maria Ionescu', theme: 'Passé Composé', grade: 8.6 },
            { name: 'Alex Georgescu', theme: 'Imparfait', grade: 7.2 },
            { name: 'Elena Mihai', theme: 'Futur', grade: 8.4 }
        ],
        matematica: [
            { name: 'Ioan Popescu', theme: 'Adunarea fracții', grade: 9.0 },
            { name: 'Maria Ionescu', theme: 'Scăderea fracții', grade: 8.5 },
            { name: 'Alex Georgescu', theme: 'Înmulțirea', grade: 7.2 },
            { name: 'Elena Mihai', theme: 'Împărțirea', grade: 8.8 }
        ],
        chimie: [
            { name: 'Ioan Popescu', theme: 'Tabel periodic', grade: 8.4 },
            { name: 'Maria Ionescu', theme: 'Valență', grade: 9.1 },
            { name: 'Alex Georgescu', theme: 'Formule chimice', grade: 7.9 },
            { name: 'Elena Mihai', theme: 'Reacții chimice', grade: 8.6 }
        ],
        biologie: [
            { name: 'Ioan Popescu', theme: 'Celula', grade: 8.9 },
            { name: 'Maria Ionescu', theme: 'Țesut', grade: 9.4 },
            { name: 'Alex Georgescu', theme: 'Organism', grade: 8.1 },
            { name: 'Elena Mihai', theme: 'Ecologie', grade: 9.0 }
        ],
        geografie: [
            { name: 'Ioan Popescu', theme: 'Continente', grade: 9.3 },
            { name: 'Maria Ionescu', theme: 'Oceane', grade: 8.7 },
            { name: 'Alex Georgescu', theme: 'Ţări și capitale', grade: 8.0 },
            { name: 'Elena Mihai', theme: 'Climat', grade: 9.2 }
        ],
        istorie: [
            { name: 'Ioan Popescu', theme: 'Preistorie', grade: 8.9 },
            { name: 'Maria Ionescu', theme: 'Antichitate', grade: 9.4 },
            { name: 'Alex Georgescu', theme: 'Evul Mediu', grade: 7.8 },
            { name: 'Elena Mihai', theme: 'Renaștere', grade: 9.0 }
        ]
    },
    'clasa-6': {
        romana: [
            { name: 'Bogdan Vasile', theme: 'Narațiune', grade: 8.6 },
            { name: 'Cristina Radu', theme: 'Descriere', grade: 9.1 },
            { name: 'Daniel Matei', theme: 'Expunere', grade: 7.9 },
            { name: 'Flavia Eftimie', theme: 'Dialog', grade: 8.7 }
        ],
        engleza: [
            { name: 'Bogdan Vasile', theme: 'Conditional', grade: 8.0 },
            { name: 'Cristina Radu', theme: 'Passive Voice', grade: 8.8 },
            { name: 'Daniel Matei', theme: 'Reported Speech', grade: 7.6 },
            { name: 'Flavia Eftimie', theme: 'Modal Verbs', grade: 9.0 }
        ],
        franceza: [
            { name: 'Bogdan Vasile', theme: 'Impératif', grade: 7.9 },
            { name: 'Cristina Radu', theme: 'Passé Simple', grade: 8.7 },
            { name: 'Daniel Matei', theme: 'Subjonctif', grade: 7.4 },
            { name: 'Flavia Eftimie', theme: 'Discours indirect', grade: 8.9 }
        ],
        matematica: [
            { name: 'Bogdan Vasile', theme: 'Procente', grade: 8.3 },
            { name: 'Cristina Radu', theme: 'Proporționalitate', grade: 8.9 },
            { name: 'Daniel Matei', theme: 'Ecuații', grade: 7.5 },
            { name: 'Flavia Eftimie', theme: 'Inecuații', grade: 8.5 }
        ],
        chimie: [
            { name: 'Bogdan Vasile', theme: 'Molecule', grade: 8.1 },
            { name: 'Cristina Radu', theme: 'Numărul de oxidare', grade: 8.8 },
            { name: 'Daniel Matei', theme: 'Reacții de substitutie', grade: 7.6 },
            { name: 'Flavia Eftimie', theme: 'Reacții de adițiune', grade: 8.7 }
        ],
        biologie: [
            { name: 'Bogdan Vasile', theme: 'Reproducere', grade: 8.0 },
            { name: 'Cristina Radu', theme: 'Dezvoltare', grade: 8.9 },
            { name: 'Daniel Matei', theme: 'Evoluție', grade: 7.8 },
            { name: 'Flavia Eftimie', theme: 'Ereditare', grade: 8.6 }
        ],
        geografie: [
            { name: 'Bogdan Vasile', theme: 'Forme de relief', grade: 8.4 },
            { name: 'Cristina Radu', theme: 'Climat și vegetație', grade: 8.8 },
            { name: 'Daniel Matei', theme: 'Resurse minerale', grade: 7.6 },
            { name: 'Flavia Eftimie', theme: 'Dezvoltare economică', grade: 9.1 }
        ],
        istorie: [
            { name: 'Bogdan Vasile', theme: 'Dacia romană', grade: 8.5 },
            { name: 'Cristina Radu', theme: 'Formația poporului', grade: 9.2 },
            { name: 'Daniel Matei', theme: 'Evul Mediu în România', grade: 7.9 },
            { name: 'Flavia Eftimie', theme: 'Domniile Valace', grade: 8.8 }
        ]
    },
    'clasa-7': {
        romana: [
            { name: 'Gabi Stanescu', theme: 'Stil literar', grade: 8.7 },
            { name: 'Horia Dumitrescu', theme: 'Figuri de stil', grade: 9.0 },
            { name: 'Ioana Balan', theme: 'Analiză textului', grade: 8.9 },
            { name: 'Justina Vlasu', theme: 'Interpretare', grade: 8.6 }
        ],
        engleza: [
            { name: 'Gabi Stanescu', theme: 'Advanced Tenses', grade: 8.3 },
            { name: 'Horia Dumitrescu', theme: 'Phrasal Verbs', grade: 8.6 },
            { name: 'Ioana Balan', theme: 'Idioms', grade: 9.2 },
            { name: 'Justina Vlasu', theme: 'Essay Writing', grade: 8.8 }
        ],
        franceza: [
            { name: 'Gabi Stanescu', theme: 'Conditionnel', grade: 8.0 },
            { name: 'Horia Dumitrescu', theme: 'Plus-que-parfait', grade: 8.6 },
            { name: 'Ioana Balan', theme: 'Subjonctif présent', grade: 9.1 },
            { name: 'Justina Vlasu', theme: 'Style soutenu', grade: 8.5 }
        ],
        matematica: [
            { name: 'Gabi Stanescu', theme: 'Sisteme liniare', grade: 8.1 },
            { name: 'Horia Dumitrescu', theme: 'Radicali', grade: 8.7 },
            { name: 'Ioana Balan', theme: 'Puteri', grade: 9.3 },
            { name: 'Justina Vlasu', theme: 'Polinoame', grade: 8.5 }
        ],
        chimie: [
            { name: 'Gabi Stanescu', theme: 'Oxizi și baze', grade: 8.2 },
            { name: 'Horia Dumitrescu', theme: 'Reacții acid-bază', grade: 8.8 },
            { name: 'Ioana Balan', theme: 'Echilibru chimic', grade: 9.0 },
            { name: 'Justina Vlasu', theme: 'Electrochimie', grade: 8.5 }
        ],
        biologie: [
            { name: 'Gabi Stanescu', theme: 'Fiziologie vegetală', grade: 8.1 },
            { name: 'Horia Dumitrescu', theme: 'Fiziologie animală', grade: 8.9 },
            { name: 'Ioana Balan', theme: 'Metabolismi', grade: 9.2 },
            { name: 'Justina Vlasu', theme: 'Homeostază', grade: 8.7 }
        ],
        geografie: [
            { name: 'Gabi Stanescu', theme: 'Asia', grade: 8.5 },
            { name: 'Horia Dumitrescu', theme: 'Africa', grade: 8.9 },
            { name: 'Ioana Balan', theme: 'America', grade: 9.0 },
            { name: 'Justina Vlasu', theme: 'Australia și Oceania', grade: 8.7 }
        ],
        istorie: [
            { name: 'Gabi Stanescu', theme: 'Renaștere și Reformă', grade: 8.6 },
            { name: 'Horia Dumitrescu', theme: 'Epoca modernă', grade: 9.1 },
            { name: 'Ioana Balan', theme: 'Revoluții', grade: 9.3 },
            { name: 'Justina Vlasu', theme: 'Imperialism', grade: 8.8 }
        ]
    },
    'clasa-8': {
        romana: [
            { name: 'Karina Marin', theme: 'Analiză critică', grade: 8.9 },
            { name: 'Laurențiu Leonte', theme: 'Studiu comparativ', grade: 9.2 },
            { name: 'Mihaela Dimitrescu', theme: 'Interpretare avansată', grade: 8.7 },
            { name: 'Nicolae Popovici', theme: 'Eseu literar', grade: 8.8 }
        ],
        engleza: [
            { name: 'Karina Marin', theme: 'Cambridge Exam Prep', grade: 8.5 },
            { name: 'Laurențiu Leonte', theme: 'Advanced Vocabulary', grade: 9.0 },
            { name: 'Mihaela Dimitrescu', theme: 'Conversation', grade: 8.9 },
            { name: 'Nicolae Popovici', theme: 'Literature', grade: 8.6 }
        ],
        franceza: [
            { name: 'Karina Marin', theme: 'Delf B1', grade: 8.4 },
            { name: 'Laurențiu Leonte', theme: 'Littérature française', grade: 9.1 },
            { name: 'Mihaela Dimitrescu', theme: 'Civilisation', grade: 8.8 },
            { name: 'Nicolae Popovici', theme: 'Expression écrite', grade: 8.5 }
        ],
        matematica: [
            { name: 'Karina Marin', theme: 'Trigonometrie', grade: 8.2 },
            { name: 'Laurențiu Leonte', theme: 'Logaritmi', grade: 9.1 },
            { name: 'Mihaela Dimitrescu', theme: 'Funcții', grade: 8.8 },
            { name: 'Nicolae Popovici', theme: 'Derivate', grade: 8.4 }
        ],
        chimie: [
            { name: 'Karina Marin', theme: 'Chimie organică', grade: 8.3 },
            { name: 'Laurențiu Leonte', theme: 'Chimie inorganică', grade: 8.8 },
            { name: 'Mihaela Dimitrescu', theme: 'Legături chimice', grade: 9.0 },
            { name: 'Nicolae Popovici', theme: 'pH și pOH', grade: 8.7 }
        ],
        biologie: [
            { name: 'Karina Marin', theme: 'Citologie', grade: 8.5 },
            { name: 'Laurențiu Leonte', theme: 'Histologie', grade: 8.9 },
            { name: 'Mihaela Dimitrescu', theme: 'Biologie moleculară', grade: 9.0 },
            { name: 'Nicolae Popovici', theme: 'Genetică', grade: 8.7 }
        ],
        geografie: [
            { name: 'Karina Marin', theme: 'Geopolitică', grade: 8.6 },
            { name: 'Laurențiu Leonte', theme: 'Dzemografie', grade: 8.9 },
            { name: 'Mihaela Dimitrescu', theme: 'Globalizare', grade: 9.2 },
            { name: 'Nicolae Popovici', theme: 'Dezvoltare durabilă', grade: 8.5 }
        ],
        istorie: [
            { name: 'Karina Marin', theme: 'Lumea modernă', grade: 8.7 },
            { name: 'Laurențiu Leonte', theme: 'Revoluția franceză', grade: 9.3 },
            { name: 'Mihaela Dimitrescu', theme: 'Era napoleoniană', grade: 8.9 },
            { name: 'Nicolae Popovici', theme: 'Secolul XIX', grade: 8.8 }
        ]
    },
    'clasa-9': {
        romana: [
            { name: 'Octavian Neagu', theme: 'Eseu la BAC', grade: 9.0 },
            { name: 'Patricia Crăciun', theme: 'Analiză literară BAC', grade: 9.3 },
            { name: 'Rares Munteanu', theme: 'Înțelegere text', grade: 8.8 },
            { name: 'Sabina Dinu', theme: 'Producere text', grade: 9.1 }
        ],
        engleza: [
            { name: 'Octavian Neagu', theme: 'Reading Comprehension', grade: 8.6 },
            { name: 'Patricia Crăciun', theme: 'Writing Skills', grade: 9.2 },
            { name: 'Rares Munteanu', theme: 'Listening', grade: 8.7 },
            { name: 'Sabina Dinu', theme: 'Speaking', grade: 9.0 }
        ],
        franceza: [
            { name: 'Octavian Neagu', theme: 'Compréhension', grade: 8.5 },
            { name: 'Patricia Crăciun', theme: 'Expression', grade: 9.1 },
            { name: 'Rares Munteanu', theme: 'Grammaire', grade: 8.6 },
            { name: 'Sabina Dinu', theme: 'Vocabulaire', grade: 8.9 }
        ],
        matematica: [
            { name: 'Octavian Neagu', theme: 'Analiză matematică', grade: 8.4 },
            { name: 'Patricia Crăciun', theme: 'Algebră liniară', grade: 9.2 },
            { name: 'Rares Munteanu', theme: 'Geometrie', grade: 8.9 },
            { name: 'Sabina Dinu', theme: 'Probabilități', grade: 8.7 }
        ],
        chimie: [
            { name: 'Octavian Neagu', theme: 'Stoechiometrie', grade: 8.4 },
            { name: 'Patricia Crăciun', theme: 'Termodinamică chimică', grade: 9.0 },
            { name: 'Rares Munteanu', theme: 'Cinetică chimică', grade: 8.7 },
            { name: 'Sabina Dinu', theme: 'Echilibru ionic', grade: 8.9 }
        ],
        biologie: [
            { name: 'Octavian Neagu', theme: 'Genetică', grade: 8.5 },
            { name: 'Patricia Crăciun', theme: 'Evoluție', grade: 9.2 },
            { name: 'Rares Munteanu', theme: 'Ecologie', grade: 8.8 },
            { name: 'Sabina Dinu', theme: 'Sisteme de organe', grade: 9.1 }
        ],
        geografie: [
            { name: 'Octavian Neagu', theme: 'Sisteme geografice', grade: 8.7 },
            { name: 'Patricia Crăciun', theme: 'Dezvoltare regional', grade: 9.0 },
            { name: 'Rares Munteanu', theme: 'Provocări contemporane', grade: 8.9 },
            { name: 'Sabina Dinu', theme: 'Lume policentrică', grade: 9.3 }
        ],
        istorie: [
            { name: 'Octavian Neagu', theme: 'Secolul XX', grade: 8.8 },
            { name: 'Patricia Crăciun', theme: 'Primul Război Mondial', grade: 9.1 },
            { name: 'Rares Munteanu', theme: 'Epoca între-war', grade: 8.9 },
            { name: 'Sabina Dinu', theme: 'Al Doilea Război Mondial', grade: 9.4 }
        ]
    },
    'clasa-10': {
        romana: [
            { name: 'Vlad Popescu', theme: 'Lirică', grade: 9.0 },
            { name: 'Simona Toma', theme: 'Dramă', grade: 9.2 },
            { name: 'Andrei Novac', theme: 'Epică', grade: 8.7 },
            { name: 'Diana Luca', theme: 'Moduluri', grade: 9.1 }
        ],
        engleza: [
            { name: 'Vlad Popescu', theme: 'Shakespeare', grade: 8.6 },
            { name: 'Simona Toma', theme: 'Victorian Literature', grade: 9.1 },
            { name: 'Andrei Novac', theme: 'Modern Prose', grade: 8.9 },
            { name: 'Diana Luca', theme: 'Poetry Analysis', grade: 9.2 }
        ],
        franceza: [
            { name: 'Vlad Popescu', theme: 'Molière', grade: 8.4 },
            { name: 'Simona Toma', theme: 'Balzac', grade: 8.9 },
            { name: 'Andrei Novac', theme: 'Flaubert', grade: 8.7 },
            { name: 'Diana Luca', theme: 'Proust', grade: 9.0 }
        ],
        matematica: [
            { name: 'Vlad Popescu', theme: 'Limite', grade: 8.3 },
            { name: 'Simona Toma', theme: 'Continuitate', grade: 9.0 },
            { name: 'Andrei Novac', theme: 'Derivare', grade: 8.8 },
            { name: 'Diana Luca', theme: 'Integrare', grade: 9.1 }
        ],
        literatura: [
            { name: 'Vlad Popescu', theme: 'Antichitate', grade: 8.9 },
            { name: 'Simona Toma', theme: 'Evul Mediu', grade: 9.3 },
            { name: 'Andrei Novac', theme: 'Renaștere', grade: 8.8 },
            { name: 'Diana Luca', theme: 'Iluminism', grade: 9.2 }
        ],
        fizica: [
            { name: 'Vlad Popescu', theme: 'Mecanică', grade: 8.4 },
            { name: 'Simona Toma', theme: 'Termodinamică', grade: 8.8 },
            { name: 'Andrei Novac', theme: 'Optică', grade: 8.9 },
            { name: 'Diana Luca', theme: 'Undă', grade: 9.0 }
        ],
        chimie: [
            { name: 'Vlad Popescu', theme: 'Structură atomică', grade: 8.5 },
            { name: 'Simona Toma', theme: 'Legări chimice', grade: 8.9 },
            { name: 'Andrei Novac', theme: 'Reacții chimice', grade: 8.7 },
            { name: 'Diana Luca', theme: 'Termodinamică chimică', grade: 9.0 }
        ],
        biologie: [
            { name: 'Vlad Popescu', theme: 'Biologie celulară', grade: 8.6 },
            { name: 'Simona Toma', theme: 'Metabolismi', grade: 8.9 },
            { name: 'Andrei Novac', theme: 'Fotosintează și respirație', grade: 8.8 },
            { name: 'Diana Luca', theme: 'Reproducere și dezvoltare', grade: 9.1 }
        ],
        informatica: [
            { name: 'Vlad Popescu', theme: 'Algoritmi', grade: 8.7 },
            { name: 'Simona Toma', theme: 'Structuri de date', grade: 9.0 },
            { name: 'Andrei Novac', theme: 'Programare OOP', grade: 8.9 },
            { name: 'Diana Luca', theme: 'Baze de date', grade: 9.2 }
        ],
        geografie: [
            { name: 'Vlad Popescu', theme: 'Mediu și climat', grade: 8.7 },
            { name: 'Simona Toma', theme: 'Resurse naturale', grade: 8.9 },
            { name: 'Andrei Novac', theme: 'Demografie', grade: 8.6 },
            { name: 'Diana Luca', theme: 'Geopolitică', grade: 9.0 }
        ],
        istorie: [
            { name: 'Vlad Popescu', theme: 'Premodernitate', grade: 8.8 },
            { name: 'Simona Toma', theme: 'Modernitate devreme', grade: 9.2 },
            { name: 'Andrei Novac', theme: 'Modernitatea matură', grade: 8.9 },
            { name: 'Diana Luca', theme: 'Epoca contemporană', grade: 9.1 }
        ]
    },
    'clasa-11': {
        romana: [
            { name: 'Mihai Stefan', theme: 'Romantism', grade: 9.1 },
            { name: 'Alina Gheorghe', theme: 'Realism', grade: 9.3 },
            { name: 'Tudor Marinescu', theme: 'Modernism', grade: 8.8 },
            { name: 'Roxana Iordache', theme: 'Contemporan', grade: 9.2 }
        ],
        engleza: [
            { name: 'Mihai Stefan', theme: 'Romantic Poetry', grade: 8.7 },
            { name: 'Alina Gheorghe', theme: 'Victorian Novel', grade: 9.2 },
            { name: 'Tudor Marinescu', theme: '20th Century', grade: 8.9 },
            { name: 'Roxana Iordache', theme: 'Contemporary', grade: 9.1 }
        ],
        franceza: [
            { name: 'Mihai Stefan', theme: 'Romantisme français', grade: 8.5 },
            { name: 'Alina Gheorghe', theme: 'Réalisme et Naturalisme', grade: 9.0 },
            { name: 'Tudor Marinescu', theme: 'Symbolisme', grade: 8.8 },
            { name: 'Roxana Iordache', theme: 'Littérature XXe siècle', grade: 9.1 }
        ],
        matematica: [
            { name: 'Mihai Stefan', theme: 'Funcții trigonometrice', grade: 8.4 },
            { name: 'Alina Gheorghe', theme: 'Ecuații diferențiale', grade: 9.1 },
            { name: 'Tudor Marinescu', theme: 'Serii', grade: 8.9 },
            { name: 'Roxana Iordache', theme: 'Integrală definită', grade: 9.2 }
        ],
        literatura: [
            { name: 'Mihai Stefan', theme: 'Romantism universal', grade: 9.0 },
            { name: 'Alina Gheorghe', theme: 'Realism universal', grade: 9.2 },
            { name: 'Tudor Marinescu', theme: 'Modernism european', grade: 8.9 },
            { name: 'Roxana Iordache', theme: 'Postmodernism', grade: 9.1 }
        ],
        fizica: [
            { name: 'Mihai Stefan', theme: 'Câmp electric', grade: 8.5 },
            { name: 'Alina Gheorghe', theme: 'Câmp magnetic', grade: 8.9 },
            { name: 'Tudor Marinescu', theme: 'Inducție electromagnetică', grade: 8.8 },
            { name: 'Roxana Iordache', theme: 'Cvasistatic', grade: 9.0 }
        ],
        chimie: [
            { name: 'Mihai Stefan', theme: 'Electrochimie', grade: 8.6 },
            { name: 'Alina Gheorghe', theme: 'Chimia coloidală', grade: 8.9 },
            { name: 'Tudor Marinescu', theme: 'Cinetica și echilibru', grade: 8.8 },
            { name: 'Roxana Iordache', theme: 'Analiza chimică', grade: 9.1 }
        ],
        biologie: [
            { name: 'Mihai Stefan', theme: 'Genetică moleculară', grade: 8.7 },
            { name: 'Alina Gheorghe', theme: 'Inginerie genetică', grade: 9.0 },
            { name: 'Tudor Marinescu', theme: 'Ecologie și biocenoza', grade: 8.9 },
            { name: 'Roxana Iordache', theme: 'Imunologie', grade: 9.2 }
        ],
        informatica: [
            { name: 'Mihai Stefan', theme: 'Web Development', grade: 8.8 },
            { name: 'Alina Gheorghe', theme: 'Rețele de calculatoare', grade: 9.1 },
            { name: 'Tudor Marinescu', theme: 'Securitate informatică', grade: 9.0 },
            { name: 'Roxana Iordache', theme: 'Baze de date avansate', grade: 9.2 }
        ],
        geografie: [
            { name: 'Mihai Stefan', theme: 'Europa', grade: 8.8 },
            { name: 'Alina Gheorghe', theme: 'Asia și Oceania', grade: 9.0 },
            { name: 'Tudor Marinescu', theme: 'Africa și America', grade: 8.7 },
            { name: 'Roxana Iordache', theme: 'Regiuni polare', grade: 8.9 }
        ],
        istorie: [
            { name: 'Mihai Stefan', theme: 'Europa în secolul XIX', grade: 8.9 },
            { name: 'Alina Gheorghe', theme: 'Imperialism și colonialism', grade: 9.2 },
            { name: 'Tudor Marinescu', theme: 'Perioada interbelică', grade: 8.8 },
            { name: 'Roxana Iordache', theme: 'Lume bipolară', grade: 9.0 }
        ]
    },
    'clasa-12': {
        romana: [
            { name: 'Costel Dragu', theme: 'Bacalaureat', grade: 9.3 },
            { name: 'Mihaela Stoian', theme: 'Eseu argumentativ', grade: 9.4 },
            { name: 'Gabriel Barbu', theme: 'Înțelegere text', grade: 8.9 },
            { name: 'Oana Dobre', theme: 'Gramatică avansată', grade: 9.2 }
        ],
        engleza: [
            { name: 'Costel Dragu', theme: 'Cambridge CAE', grade: 8.8 },
            { name: 'Mihaela Stoian', theme: 'Literature Essay', grade: 9.3 },
            { name: 'Gabriel Barbu', theme: 'Advanced Grammar', grade: 9.0 },
            { name: 'Oana Dobre', theme: 'Debate Skills', grade: 9.1 }
        ],
        franceza: [
            { name: 'Costel Dragu', theme: 'Delf B2', grade: 8.6 },
            { name: 'Mihaela Stoian', theme: 'Littérature francophone', grade: 9.2 },
            { name: 'Gabriel Barbu', theme: 'Civilisation française', grade: 8.9 },
            { name: 'Oana Dobre', theme: 'Traduction', grade: 9.0 }
        ],
        matematica: [
            { name: 'Costel Dragu', theme: 'Bacalaureat M1', grade: 8.5 },
            { name: 'Mihaela Stoian', theme: 'Recapitulare completă', grade: 9.2 },
            { name: 'Gabriel Barbu', theme: 'Probleme complexe', grade: 8.9 },
            { name: 'Oana Dobre', theme: 'Demonstrații', grade: 9.0 }
        ],
        literatura: [
            { name: 'Costel Dragu', theme: 'Modernism și post-modernism', grade: 9.1 },
            { name: 'Mihaela Stoian', theme: 'Literatură semnificativă', grade: 9.4 },
            { name: 'Gabriel Barbu', theme: 'Interpretare critic', grade: 8.8 },
            { name: 'Oana Dobre', theme: 'Contextul istoric-cultural', grade: 9.2 }
        ],
        fizica: [
            { name: 'Costel Dragu', theme: 'Bacalaureat fizică', grade: 8.6 },
            { name: 'Mihaela Stoian', theme: 'Fenomene electromagnetice', grade: 9.0 },
            { name: 'Gabriel Barbu', theme: 'Mecanică avansată', grade: 8.8 },
            { name: 'Oana Dobre', theme: 'Fizica modernă', grade: 9.1 }
        ],
        chimie: [
            { name: 'Costel Dragu', theme: 'Bacalaureat chimie', grade: 8.7 },
            { name: 'Mihaela Stoian', theme: 'Probleme sintetice', grade: 9.1 },
            { name: 'Gabriel Barbu', theme: 'Reacții complexe', grade: 8.9 },
            { name: 'Oana Dobre', theme: 'Analiza chimică', grade: 9.0 }
        ],
        biologie: [
            { name: 'Costel Dragu', theme: 'Bacalaureat biologie', grade: 8.8 },
            { name: 'Mihaela Stoian', theme: 'Biologie umană', grade: 9.2 },
            { name: 'Gabriel Barbu', theme: 'Ecologie aplicată', grade: 8.9 },
            { name: 'Oana Dobre', theme: 'Genetică umană', grade: 9.1 }
        ],
        informatica: [
            { name: 'Costel Dragu', theme: 'Bacalaureat informatică', grade: 8.9 },
            { name: 'Mihaela Stoian', theme: 'Programare avansată', grade: 9.2 },
            { name: 'Gabriel Barbu', theme: 'Algoritmi complexi', grade: 9.0 },
            { name: 'Oana Dobre', theme: 'Cibersecuritate', grade: 9.1 }
        ],
        geografie: [
            { name: 'Costel Dragu', theme: 'Bacalaureat geografie', grade: 8.9 },
            { name: 'Mihaela Stoian', theme: 'Analiza tematică', grade: 9.1 },
            { name: 'Gabriel Barbu', theme: 'România în lume', grade: 8.8 },
            { name: 'Oana Dobre', theme: 'Probleme globale', grade: 9.0 }
        ],
        istorie: [
            { name: 'Costel Dragu', theme: 'Bacalaureat istorie', grade: 9.0 },
            { name: 'Mihaela Stoian', theme: 'Sinteză istorică', grade: 9.3 },
            { name: 'Gabriel Barbu', theme: 'România în context european', grade: 8.9 },
            { name: 'Oana Dobre', theme: 'Lume contemporană', grade: 9.2 }
        ]
    }
};

// Subiectele pentru clasele gimnaziale (5-9)
const subjectsGym = ['romana', 'engleza', 'franceza', 'matematica', 'chimie', 'biologie', 'geografie', 'istorie'];

// Subiectele pentru clasele liceale - profil umanist
const subjectsLycUmanist = ['romana', 'engleza', 'franceza', 'matematica', 'literatura', 'geografie', 'istorie'];

// Subiectele pentru clasele liceale - profil real
const subjectsLycReal = ['romana', 'engleza', 'franceza', 'matematica', 'fizica', 'chimie', 'biologie', 'informatica', 'geografie', 'istorie'];

const subjectsNames = {
    romana: '📖 Limba Română',
    engleza: '🔤 Limba Engleză',
    franceza: '🇫🇷 Limba Franceză',
    matematica: '✏️ Matematică',
    chimie: '⚗️ Chimie',
    biologie: '🔬 Biologie',
    fizica: '⚛️ Fizică',
    informatica: '💻 Informatică',
    literatura: '📚 Literatura Universală',
    geografie: '🌍 Geografie',
    istorie: '⏰ Istorie'
};

// Variabile globale
let currentData = {};
let currentEditingStudent = null;
let currentEditingSubject = null;
let currentEditingClass = null;
let currentEditingSection = null;
let currentProfile = { 'clasa-10': 'umanist', 'clasa-11': 'umanist', 'clasa-12': 'umanist' };
let currentSection = {}; // map: classId -> section letter (A/B/C)

// Admin / autentificare (client-side)
let isAdmin = false;

async function hashString(str) {
    const enc = new TextEncoder();
    const data = enc.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function setAdminPassword() {
    const p1 = prompt('Setează parola admin:');
    if (!p1) return alert('Parola nu poate fi goală.');
    const p2 = prompt('Confirmă parola admin:');
    if (p1 !== p2) return alert('Parolele nu coincid.');
    
    try {
        const h = await hashString(p1);
        const response = await fetch(`${API_URL}/api/admin/set-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ passwordHash: h })
        });
        
        if (response.ok) {
            localStorage.setItem('siteAdminHash', h); // Backup local
            hasAdminPassword = true; // Update flag
            alert('Parola a fost setată.');
            toggleAdminUI(); // Update UI
        }
    } catch (error) {
        console.error('Error setting password:', error);
        alert('Eroare la setarea parolei');
    }
}

async function loginAdmin() {
    const p = prompt('Parola admin:');
    if (!p) return;
    const h = await hashString(p);
    
    try {
        const response = await fetch(`${API_URL}/api/admin/settings`);
        const settings = await response.json();
        const stored = settings.passwordHash || localStorage.getItem('siteAdminHash');
        
        if (!stored) return alert('Parola nu este setată. Folosește "Setează parolă admin".');
        if (h === stored) {
            isAdmin = true;
            sessionStorage.setItem('isAdmin', '1');
            toggleAdminUI();
            
            // Reafishează clasa curentă pentru a reface event listener-ii de editare
            const activeClass = document.querySelector('.class-section.active');
            if (activeClass) {
                const classId = activeClass.id;
                renderCurrentClass(classId);
            }
            
            alert('Autentificare reușită.');
        } else {
            alert('Parola incorectă.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Eroare la autentificare');
    }
}

function logoutAdmin() {
    isAdmin = false;
    sessionStorage.removeItem('isAdmin');
    toggleAdminUI();
}

// Export Admin Password Settings
function exportAdminSettings() {
    const stored = localStorage.getItem('siteAdminHash');
    if (!stored) {
        alert('Nu ai setat o parolă admin pentru a exporta.');
        return;
    }
    
    const settings = {
        siteAdminHash: stored,
        exportDate: new Date().toISOString()
    };
    
    const json = JSON.stringify(settings, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `admin-settings-${new Date().getTime()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Import Admin Password Settings
function importAdminSettings() {
    const input = document.getElementById('adminFileInput');
    input.click();
}

// Handler pentru import admin settings
// Export CSV
function exportToCSV() {
    window.location.href = `${API_URL}/api/export/csv`;
    alert('Datele au fost exportate cu succes.');
}

// Import CSV
function importFromCSV() {
    const input = document.getElementById('csvFileInput');
    input.click();
}

// Clear all data
async function clearAllData() {
    if (confirm('Ești sigur că vrei să ștergi TOATE datele? Aceasta nu se poate anula!')) {
        if (confirm('Ultimă confirmare: Vrei să continui?')) {
            try {
                const response = await fetch(`${API_URL}/api/admin/clear-data`, {
                    method: 'POST'
                });
                
                if (response.ok) {
                    alert('Datele au fost șterse din baza de date.');
                    setTimeout(() => location.reload(), 1500);
                }
            } catch (error) {
                console.error('Clear error:', error);
                alert('Eroare la ștergere');
            }
        }
    }
}

async function changeAdminPassword() {
    const stored = localStorage.getItem('siteAdminHash');
    if (!stored) return alert('Parola nu este setată.');
    const oldp = prompt('Parola curentă:');
    if (!oldp) return;
    const oldh = await hashString(oldp);
    if (oldh !== stored) return alert('Parola curentă incorectă.');
    const np1 = prompt('Parola nouă:');
    if (!np1) return alert('Parola nu poate fi goală.');
    const np2 = prompt('Confirmă parola nouă:');
    if (np1 !== np2) return alert('Parolele nu coincid.');
    const nh = await hashString(np1);
    localStorage.setItem('siteAdminHash', nh);
    alert('Parola a fost schimbată.');
}

function toggleAdminUI() {
    const body = document.body;
    const setBtn = document.getElementById('setPasswordBtn');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const changeBtn = document.getElementById('changePasswordBtn');
    const adminAuth = document.querySelector('.admin-auth');
    const adminBackup = document.querySelector('.admin-backup');
    
    if (isAdmin) {
        // User is logged in as admin
        body.classList.add('admin');
        adminAuth.style.display = 'flex';
        setBtn.style.display = 'none';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        changeBtn.style.display = 'inline-block';
        adminBackup.style.display = 'flex';
    } else {
        // User is NOT logged in
        body.classList.remove('admin');
        adminAuth.style.display = 'flex';
        
        // Dacă există parolă în DB/localStorage, arată doar Login
        if (hasAdminPassword) {
            setBtn.style.display = 'none';
            loginBtn.style.display = 'inline-block';
        } else {
            // Dacă NU există parolă, arată doar Set Password
            setBtn.style.display = 'inline-block';
            loginBtn.style.display = 'none';
        }
        
        logoutBtn.style.display = 'none';
        changeBtn.style.display = 'none';
        adminBackup.style.display = 'none';
    }
}


// Helper: secțiuni disponibile per clasă
function getSectionsForClass(classId) {
    if (classId.includes('10') || classId.includes('11') || classId.includes('12')) {
        return ['A', 'B'];
    }
    return ['A', 'B', 'C'];
}

// Construiește structura de date pe secțiuni (clona din initialData)
function buildSectionedData() {
    const sectioned = {};
    Object.keys(initialData).forEach(classId => {
        const secs = getSectionsForClass(classId);
        secs.forEach(sec => {
            const key = `${classId}-${sec}`;
            sectioned[key] = JSON.parse(JSON.stringify(initialData[classId]));
        });
        if (!currentSection[classId]) currentSection[classId] = 'A';
    });
    return sectioned;
}

// Inițializare
console.log('🚀 Script loaded!');
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOMContentLoaded fired!');
    loadDataFromStorage();
    populateAddFormOptions();
    renderCurrentClass('clasa-5');
    setupEventListeners();
    console.log('✅ Event listeners setup complete!');
});

// Încarcă datele din API
async function loadDataFromStorage() {
    try {
        const response = await fetch(`${API_URL}/api/students`);
        const data = await response.json();
        currentData = data || buildSectionedData();
    } catch (error) {
        console.warn('API not available, using localStorage:', error);
        const stored = localStorage.getItem('schoolData');
        currentData = stored ? JSON.parse(stored) : buildSectionedData();
    }
    
    const storedProfile = localStorage.getItem('schoolProfile');
    if (storedProfile) {
        currentProfile = JSON.parse(storedProfile);
    }
    
    // Încarcă admin settings
    await loadAdminSettings();
}

// Încarcă setările admin din API sau localStorage
async function loadAdminSettings() {
    try {
        const response = await fetch(`${API_URL}/api/admin/settings`);
        if (response.ok) {
            const settings = await response.json();
            if (settings.passwordHash) {
                // Salvează în localStorage pentru fallback
                localStorage.setItem('siteAdminHash', settings.passwordHash);
            }
        }
    } catch (error) {
        console.log('API not available for admin settings, using localStorage');
    }
}

// Salvează datele (nu mai e necesar cu API, dar menține pentru fallback)
async function saveDataToStorage() {
    try {
        // Datele sunt salvate individual prin API
        console.log('Data auto-saved via API');
    } catch (error) {
        console.error('Save error:', error);
    }
}

// Populează opțiunile din formularul de adăugare elev
function populateAddFormOptions() {
    const classSelect = document.getElementById('addClassSelect');
    classSelect.innerHTML = '';
    for (let i = 5; i <= 12; i++) {
        const opt = document.createElement('option');
        opt.value = `clasa-${i}`;
        opt.textContent = `Clasa ${i}`;
        classSelect.appendChild(opt);
    }
    // Initialize section and subject selects
    updateSectionOptions();
    updateSubjectOptions();
}

function getSubjectsForClass(classId) {
    if (classId.includes('10') || classId.includes('11') || classId.includes('12')) {
        const profile = currentProfile[classId] || 'umanist';
        return profile === 'umanist' ? subjectsLycUmanist : subjectsLycReal;
    }
    return subjectsGym;
}

function updateSectionOptions() {
    const classId = document.getElementById('addClassSelect').value || 'clasa-5';
    const sections = getSectionsForClass(classId);
    const sectionSelect = document.getElementById('addSectionSelect');
    sectionSelect.innerHTML = '';
    sections.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = `Secțiunea ${s}`;
        sectionSelect.appendChild(opt);
    });
}

function updateSubjectOptions() {
    const classId = document.getElementById('addClassSelect').value || 'clasa-5';
    const subjects = getSubjectsForClass(classId);
    const subjectSelect = document.getElementById('addSubjectSelect');
    subjectSelect.innerHTML = '';
    subjects.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = subjectsNames[s] || s;
        subjectSelect.appendChild(opt);
    });
}

// Configurează ascultatori de Evenimente
function setupEventListeners() {
    console.log('📋 Setting up event listeners...');
    
    // Butoanele de navigație
    const navBtns = document.querySelectorAll('.nav-btn');
    console.log('🔘 Found', navBtns.length, 'nav buttons');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('🖱️ Nav button clicked:', e.target.dataset.class);
            const classId = e.target.dataset.class;
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderCurrentClass(classId);
        });
    });

    // Butoanele de profil
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const profile = e.target.dataset.profile;
            const classId = e.target.dataset.class;
            
            // Actualizează selectii
            document.querySelectorAll(`.profile-selector [data-class="${classId}"]`).forEach(b => {
                b.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Salvează profilul selectat
            currentProfile[classId] = profile;
            saveDataToStorage();
            
            // Re-populate subject options (dacă formularul este pe clasa activă)
            populateAddFormOptions();

            // Re-renderizează clasa
            renderCurrentClass(classId);
        });
    });

    // Formular adăugare elev
    const addClassSelect = document.getElementById('addClassSelect');
    const addSectionSelect = document.getElementById('addSectionSelect');
    const addSubjectSelect = document.getElementById('addSubjectSelect');
    addClassSelect.addEventListener('change', () => {
        updateSectionOptions();
        updateSubjectOptions();
    });

    addSectionSelect.addEventListener('change', () => {});
    addSubjectSelect.addEventListener('change', () => {});

    const addForm = document.getElementById('addStudentForm');
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const classId = document.getElementById('addClassSelect').value;
        const section = document.getElementById('addSectionSelect').value;
        const subject = document.getElementById('addSubjectSelect').value;
        const name = document.getElementById('addStudentName').value.trim();
        const theme = document.getElementById('addTheme').value.trim();
        const grade = parseFloat(document.getElementById('addGrade').value);

        if (!name || !theme || isNaN(grade)) {
            alert('Completează toate câmpurile corect.');
            return;
        }

        addStudent(classId, section, subject, name, theme, grade);
    });

    // Funcție pentru a adăuga student via API
    async function addStudent(classId, section, subject, name, theme, grade) {
        try {
            const response = await fetch(`${API_URL}/api/students`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ classId, section, subject, name, theme, grade })
            });
            
            if (response.ok) {
                alert('Elev adăugat cu succes!');
                setTimeout(() => location.reload(), 1500);
            } else {
                alert('Eroare la adăugarea elevului');
            }
        } catch (error) {
            console.error('Add student error:', error);
            alert('Eroare de conexiune');
        }
    }

    // Admin buttons
    console.log('🔐 Setting up admin buttons...');
    const setPasswordBtn = document.getElementById('setPasswordBtn');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    const exportCsvBtn = document.getElementById('exportCsvBtn');
    const importCsvBtn = document.getElementById('importCsvBtn');
    const clearDataBtn = document.getElementById('clearDataBtn');
    const csvFileInput = document.getElementById('csvFileInput');
    
    console.log('🔑 Admin buttons found:', { setPasswordBtn: !!setPasswordBtn, loginBtn: !!loginBtn });
    
    if (setPasswordBtn) setPasswordBtn.addEventListener('click', () => { console.log('🔑 Set password clicked'); setAdminPassword(); });
    if (loginBtn) loginBtn.addEventListener('click', () => { console.log('🔑 Login clicked'); loginAdmin(); });
    if (logoutBtn) logoutBtn.addEventListener('click', () => { console.log('🔑 Logout clicked'); logoutAdmin(); });
    if (changePasswordBtn) changePasswordBtn.addEventListener('click', () => { console.log('🔑 Change password clicked'); changeAdminPassword(); });
    if (exportCsvBtn) exportCsvBtn.addEventListener('click', () => exportToCSV());
    if (importCsvBtn) importCsvBtn.addEventListener('click', () => importFromCSV());
    const exportAdminBtn = document.getElementById('exportAdminBtn');
    const importAdminBtn = document.getElementById('importAdminBtn');
    if (exportAdminBtn) exportAdminBtn.addEventListener('click', () => exportAdminSettings());
    if (importAdminBtn) importAdminBtn.addEventListener('click', () => importAdminSettings());
    if (clearDataBtn) clearDataBtn.addEventListener('click', () => clearAllData());
    
    if (csvFileInput) {
        csvFileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = async (event) => {
                const csv = event.target.result;
                const lines = csv.trim().split('\n').slice(1); // skip header
                const imported = {};
                lines.forEach(line => {
                    const cols = line.match(/(?:"[^"]*"|[^,])+/g) || [];
                    if (cols.length < 6) return;
                    const classNum = cols[0].trim();
                    const section = cols[1].trim();
                    const subject = cols[2].trim();
                    const name = cols[3].replace(/"/g, '').trim();
                    const theme = cols[4].replace(/"/g, '').trim();
                    const grade = parseFloat(cols[5].trim());
                    if (!name || isNaN(grade)) return;
                    const key = `clasa-${classNum}-${section}`;
                    if (!imported[key]) imported[key] = {};
                    if (!imported[key][subject]) imported[key][subject] = [];
                    imported[key][subject].push({ name, theme, grade });
                });
                if (Object.keys(imported).length === 0) {
                    alert('CSV-ul nu conține date valide.');
                    return;
                }
                if (confirm('Aceasta va suprascrie datele actuale. Ești sigur?')) {
                    try {
                        const response = await fetch(`${API_URL}/api/import/csv`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ csvData: csv })
                        });
                        
                        if (response.ok) {
                            alert('Datele au fost importate cu succes.');
                            setTimeout(() => location.reload(), 1500);
                        }
                    } catch (error) {
                        console.error('Import error:', error);
                        alert('Eroare la import');
                    }
                }
            };
            reader.readAsText(file);
        });
    }

    const adminFileInput = document.getElementById('adminFileInput');
    if (adminFileInput) {
        adminFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const settings = JSON.parse(event.target.result);
                    if (!settings.siteAdminHash) {
                        alert('Format nevalid: lipsește siteAdminHash');
                        return;
                    }
                    
                    localStorage.setItem('siteAdminHash', settings.siteAdminHash);
                    alert('Parola admin importată cu succes! Reîncarcă pagina.');
                    location.reload();
                } catch (err) {
                    alert('Eroare la parsarea fișierului: ' + err.message);
                }
            };
            reader.readAsText(file);
        });
    }

    // restore admin session if present
    if (sessionStorage.getItem('isAdmin')) {
        isAdmin = true;
    }
    
    toggleAdminUI();

    // Modal
    const modal = document.getElementById('editModal');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.querySelector('.btn-cancel');
    const editForm = document.getElementById('editForm');

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    cancelBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveEditedGrade();
    });
}

// Afișează clasa curentă
function renderCurrentClass(classId) {
    // Ascunde toate secțiunile
    document.querySelectorAll('.class-section').forEach(section => {
        section.classList.remove('active');
    });

    // Afișează clasa selectată
    const sectionElem = document.getElementById(classId);
    sectionElem.classList.add('active');

    // Construiește selector secțiuni
    const sections = getSectionsForClass(classId);
    const selector = sectionElem.querySelector('.section-selector');
    selector.innerHTML = '';
    sections.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'section-btn';
        btn.textContent = s;
        if (!currentSection[classId]) currentSection[classId] = 'A';
        if (currentSection[classId] === s) btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentSection[classId] = s;
            renderCurrentClass(classId);
        });
        selector.appendChild(btn);
    });

    // Determină disciplinele actuale
    let subjects = getSubjectsForClass(classId);
    if (classId.includes('10') || classId.includes('11') || classId.includes('12')) {
        const profile = currentProfile[classId] || 'umanist';
        // Ascunde/Afișează cardurile în funcție de profil
        sectionElem.querySelectorAll('.subject-card').forEach(card => {
            card.style.display = 'block';
            if (card.classList.contains('umanist-only') && profile !== 'umanist') {
                card.style.display = 'none';
            } else if (card.classList.contains('real-only') && profile !== 'real') {
                card.style.display = 'none';
            }
        });

        // Reset selectorii de profil
        const profileBtns = document.querySelectorAll(`.profile-btn[data-class="${classId}"]`);
        profileBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.profile === (currentProfile[classId] || 'umanist')) {
                btn.classList.add('active');
            }
        });
    }

    // Renderizează notele pentru fiecare materie (folosind secțiunea curentă)
    const sec = currentSection[classId] || 'A';
    const dataKey = `${classId}-${sec}`;
    subjects.forEach(subject => {
        const containerId = `${classId}-${subject}`;
        const container = document.getElementById(containerId);
        if (container) {
            renderStudents(dataKey, subject, containerId);
        }
    });
}

// Renderizează studenții pentru o anumită materie (folosind dataKey cu secțiune)
function renderStudents(dataKey, subject, containerId) {
    const container = document.getElementById(containerId);
    const students = (currentData[dataKey] && currentData[dataKey][subject]) ? currentData[dataKey][subject] : [];

    container.innerHTML = '';

    students.forEach((student) => {
        const studentElement = document.createElement('div');
        studentElement.className = 'student-item';
        studentElement.dataset.studentId = student._id;

        studentElement.innerHTML = `
            <div class="student-info">
                <div class="student-name">
                    ${student.name}
                    <button class="delete-btn">🗑️</button>
                </div>
                <div class="theme-name">Tema: ${student.theme}</div>
            </div>
            <div class="grade-badge">${student.grade}</div>
            <button class="edit-btn">✏️ Editează</button>
        `;

        const editBtn = studentElement.querySelector('.edit-btn');
        const deleteBtn = studentElement.querySelector('.delete-btn');
        if (isAdmin) {
            editBtn.addEventListener('click', () => {
                const classId = containerId.split('-').slice(0,2).join('-');
                const sec = currentSection[classId] || 'A';
                openEditModal(classId, sec, subject, student);
            });
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteStudent(student._id, student.name);
            });
        }

        container.appendChild(studentElement);
    });
}

// Deschide modalul de editare
function openEditModal(classId, section, subject, student) {
    currentEditingClass = classId;
    currentEditingSection = section;
    currentEditingSubject = subject;

    document.getElementById('studentName').value = student.name;
    document.getElementById('subjectName').value = subjectsNames[subject];
    document.getElementById('gradeValue').value = student.grade;
    document.getElementById('themeValue').value = student.theme;
    document.getElementById('editModal').dataset.studentId = student._id;

    document.getElementById('editModal').classList.add('show');
}

// Salvează nota editată
async function saveEditedGrade() {
    if (!isAdmin) { alert('Doar admin poate modifica datele.'); return; }
    const newName = document.getElementById('studentName').value.trim();
    const newGrade = parseFloat(document.getElementById('gradeValue').value);
    const newTheme = document.getElementById('themeValue').value.trim();

    if (!newName) {
        alert('Numele nu poate fi gol!');
        return;
    }

    if (newGrade < 1 || newGrade > 10) {
        alert('Nota trebuie să fie între 1 și 10!');
        return;
    }

    if (!newTheme) {
        alert('Tema nu poate fi goală!');
        return;
    }

    try {
        const studentId = document.getElementById('editModal').dataset.studentId;
        const response = await fetch(`${API_URL}/api/students/${studentId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName, grade: newGrade, theme: newTheme })
        });
        
        if (response.ok) {
            document.getElementById('editModal').classList.remove('show');
            alert('Elev actualizat cu succes!');
            setTimeout(() => location.reload(), 1500);
        }
    } catch (error) {
        console.error('Edit error:', error);
        alert('Eroare la editare');
    }
}

// Șterge student
async function deleteStudent(studentId, studentName) {
    if (!isAdmin) { alert('Doar admin poate șterge elevi.'); return; }
    if (confirm(`Ești sigur că vrei să ștergi ${studentName}?`)) {
        try {
            const response = await fetch(`${API_URL}/api/students/${studentId}`, {
                method: 'DELETE'
            });
            
            if (response.ok) {
                alert('Elevul a fost șters.');
                setTimeout(() => location.reload(), 1500);
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert('Eroare la ștergere');
        }
    }
}

// Obține culoarea gradului (pentru design viitor)
function getGradeColor(grade) {
    if (grade >= 9) return '#4CAF50';
    if (grade >= 8) return '#8BC34A';
    if (grade >= 7) return '#FFC107';
    if (grade >= 6) return '#FF9800';
    return '#F44336';
}
