import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infraestructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);
const emailService = new EmailService();

export class Server {

    public static start() {
        console.log('Server started');

        // Mandar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     ['olmedo.aortiz@gmail.com'],
        // );

        // const job = CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://localhost:3000';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log( 'success' ),
        //             ( error ) => console.error(error),
        //         ).execute( url );
        //     }
        // );
    }

}