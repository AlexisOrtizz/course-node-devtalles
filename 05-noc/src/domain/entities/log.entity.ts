
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string; 
    origin: string;
    createAt?: Date;
}

export class LogEntity {
    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor( options: LogEntityOptions ) {
        const { message, level, origin, createAt = new Date() } = options;
        this.message = message;
        this.level = level;
        this.origin = origin;
        this.createdAt = createAt;
    }

    static fromJSON = ( json: string ): LogEntity => {
        const { message, level, createAt, origin } = JSON.parse(json);
        
        const log = new LogEntity({
            message,
            level,
            createAt,
            origin
        });
        
        return log;
    }
}