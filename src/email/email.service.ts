import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      // Example using Gmail
      service: 'gmail',
      auth: {
        user: 'danielribeirodev@gmail.com',
        pass: 'gihd jgyg torl fubi',
      },
    });
  }

  async sendMail(to: string, subject: string, text: string, html: string): Promise<void> {
    const mailOptions = {
      from: 'danielribeirodev@gmail.com',
      to,
      subject,
      text,
      html,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
