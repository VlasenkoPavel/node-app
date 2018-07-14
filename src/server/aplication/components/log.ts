const winston = require('winston');
const ENV = process.env.NODE_ENV;

// can be much more flexible than that O_o
// function getLogger(module: any) {

//     const path = module.filename.split('/').slice(-2).join('/');

//     return new winston.Logger({
//         transports: [
//             new winston.transports.Console({
//                 colorize: true,
//                 level: (ENV == 'development') ? 'debug' : 'error',
//                 label: path
//             })
//         ]
//     });
// }
const config = winston.config;

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            //     timestamp: function() {
            //     return Date.now();
            // },
            formatter: function(options: any) {
                // - Return string will be passed to logger.
                // - Optionally, use options.colorize(options.level, <string>) to
                //   colorize output based on the log level.
                // return options.timestamp() + ' ' +
                return config.colorize(options.level, options.level.toUpperCase()) + ' ' +
                    (options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
            }
        })
    ]
});

export { logger };
