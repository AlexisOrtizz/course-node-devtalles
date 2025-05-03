import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { PrismaClient, SeverityLevel } from "../../generated/prisma";

const prismaClient = new PrismaClient();

const severityEnum = {
  [LogSeverityLevel.low]: SeverityLevel.LOW,
  [LogSeverityLevel.medium]: SeverityLevel.MEDIUM,
  [LogSeverityLevel.high]: SeverityLevel.HIGH,
};

export class PostgresLogDatasource implements LogDatasource {

    async saveLog(log: LogEntity): Promise<void> {

      const level = severityEnum[log.level];

      const newLog = await prismaClient.logModal.create({
          data: {
            ...log,
            level: level,
          },
      });
      console.log('saveLog', newLog.id);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const logs = await prismaClient.logModal.findMany({
            where: {
                level: severityEnum[severityLevel],
            },
        });
        return logs.map( LogEntity.fromObject );
    }
};