import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "client", "public", "resume.pdf");
    
    // Set headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Ranga_Pavan_Shasam_Resume.pdf"');
    
    // Send the file
    res.sendFile(resumePath, (err) => {
      if (err) {
        console.error("Error sending resume file:", err);
        res.status(404).json({ message: "Resume file not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
