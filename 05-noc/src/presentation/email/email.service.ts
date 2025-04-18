import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

interface SendMailOptions {
    to: string | string[],
    subject: string;
    htmlBody: string;
    attachments?: Attachement[];
}

interface Attachement {
    filename: string;
    path: string;
};

export class EmailService {
    private transporte = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    constructor() {};

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = options;
        
        try {
            const sentInformation = await this.transporte.sendMail({
                to, 
                subject, 
                html: htmlBody,
                attachments
            });

            // console.log({ sentInformation  });
            // const log = new LogEntity({
            //     level: LogSeverityLevel.low,
            //     message: 'Email sent',
            //     origin: 'email.service.ts',
            // });
            // this.logRepository.saveLog(log);

            return true;
        } catch(error) {
            // const log = new LogEntity({
            //     level: LogSeverityLevel.high,
            //     message: 'Email not sent',
            //     origin: 'email.service.ts',
            // });
            // this.logRepository.saveLog(log);
            
            return false;
        }
    }

    sendEmailWithFileSystemLogs( to: string | string[]): Promise<boolean> {
        const subject = 'Logs del servidor';
        const htmlBody = `
            <h3>Logs de sistema - NOC</h3>
            <p>Esto es una prueba del envio de correo por medio de la aplicacion NOC</p>
            <p>Ver logs adjuntos</p>
        `;
        const attachments: Attachement[] = [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
        ];

        return this.sendEmail({ to, subject, htmlBody, attachments });
    }
}