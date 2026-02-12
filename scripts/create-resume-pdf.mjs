// Creates a minimal valid PDF file for the resume download
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Ensure public directory exists
const publicDir = join(process.cwd(), 'public');
try { mkdirSync(publicDir, { recursive: true }); } catch {}

// Build a minimal PDF with resume content
const name = "Manshi Kumari";
const email = "manshi75kumari@gmail.com";
const github = "github.com/Manshi1201";

const content = `Manshi Kumari - Resume

Contact: ${email}
GitHub: ${github}

EDUCATION
B.Tech in CSE (AI) - ABES Institute of Technology (Expected 2027)

SKILLS
- Cloud Computing (AWS)
- Python Development
- AI/ML
- Linux & DevOps
- REST APIs

PROJECTS
1. AYUSH EMR Integration (Smart India Hackathon)
   Developed an API for integrating AYUSH medical records with EMR systems.

2. Carbon Footprint Tracker (AI-Based System)
   AI-powered system for tracking carbon emissions with analytics dashboard.

3. AI-Powered Online Voting (Secure Digital Platform)
   Secure digital voting platform with AI voter assistance and verification.

CERTIFICATIONS
- AWS Cloud Course (97% Score)
- Google Gen AI Study Jam
- Google Arcade Program
- Python Certification (Cisco)
- Linux & Unix (Infosys)`;

// Create a proper PDF
const textLines = content.split('\n');
const fontSize = 12;
const lineHeight = 16;
const marginTop = 750;
const marginLeft = 50;

let textOperations = '';
let yPos = marginTop;
for (const line of textLines) {
  // Escape special PDF characters
  const escaped = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  textOperations += `BT /F1 ${fontSize} Tf ${marginLeft} ${yPos} Td (${escaped}) Tj ET\n`;
  yPos -= lineHeight;
}

const streamContent = textOperations;
const streamLength = Buffer.byteLength(streamContent, 'latin1');

const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj

2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj

3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]
   /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj

4 0 obj
<< /Length ${streamLength} >>
stream
${streamContent}endstream
endobj

5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000${(317 + streamLength).toString().padStart(4, '0')} 00000 n 

trailer
<< /Size 6 /Root 1 0 R >>
startxref
0
%%EOF`;

const outputPath = join(publicDir, 'Manshi_Kumari_Resume.pdf');
writeFileSync(outputPath, pdf, 'latin1');
console.log(`Resume PDF created at: ${outputPath}`);
