import nodemailer from 'nodemailer';

class SendMailService {
  constructor() {
    nodemailer.createTestAccount().then();
  }

  async execute() {}
}

export default SendMailService;
