import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../intraestructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../intraestructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

export class Server {

    public static start() {
        console.log('Server started');

        const job = CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'http://localhost:3000';
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log( 'success' ),
                    ( error ) => console.error(error),
                ).execute( url );
            }
        );
    }

}