# Setup Backend cu MongoDB

## ⚠️ SECURITATE CRITICĂ

**Ai expus credențialele MongoDB! Trebuie să:**
1. Mergi pe https://cloud.mongodb.com
2. Schimbă parola utilizatorului `vladw239_db_user` URGENT
3. După schimbare, updatează `MONGO_URI` în Render.com

## Deploy pe Render.com

### Pași:

1. **Creează cont gratuit pe** https://render.com

2. **Conectează GitHub account:**
   - Settings → Linked Services → GitHub
   - Autorizează SHADOW5142/site-scolar

3. **Deploy backend:**
   - New → Web Service
   - Connect to: SHADOW5142/site-scolar
   - Name: `site-scolar-api`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free

4. **Adauga Environment Variables:**
   - Apasă "Advanced"
   - Add Environment Variable:
     - Key: `MONGO_URI`
     - Value: `mongodb+srv://vladw239_db_user:NEW_PASSWORD@daniel.f39b4vd.mongodb.net/site_scolar`
   - Replace `NEW_PASSWORD` cu noua parolă MongoDB

5. **Deploy:**
   - Click "Create Web Service"
   - Asteaptă să se compileze și să pornească (2-5 min)
   - Vei primi un URL: `https://site-scolar-api-xxxxx.onrender.com`

6. **Update Frontend URL:**
   - În `script.js`, linia 2, schimbă:
   ```javascript
   : 'https://site-scolar-api-xxxxx.onrender.com'; // API_URL actual
   ```

## Local Testing

```bash
npm install
npm start
# Server va rula pe http://localhost:5000
```

Frontend va lua date din API automat când accesezi site-ul.

## Features - Acum cu MongoDB

- ✅ Students se salvează în baza de date reală
- ✅ Edit/Delete/Add funcționează via API
- ✅ Admin password salvat în MongoDB
- ✅ CSV export/import via API
- ✅ Sincronizare între multiple devices
