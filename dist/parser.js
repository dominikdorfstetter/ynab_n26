"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
/**
 * prints help message
 */
const print_help = () => {
    const help_message = `This parser converts n26 banking history data (CSV) into a format that YNAB (You need a budget) understands.
Options:
    -help               shows help, terminates programm
    -file FILENAME      input file
    -output FILENAME    output file
    -version            shows version
`;
    console.info(help_message);
    process.exit();
};
/**
 * makes checks on command line arguments
 * @param args commandline arguments to check
 */
const check_cl_arguments = (args) => {
    if (!!args['help']) {
        print_help();
    }
    if (!!!args['file']) {
        console.info(`❌  You need to specify n26 input file (CSV)`);
        print_help();
    }
};
/**
 * command line arguements
 */
const args = minimist(process.argv.slice(2), {
    alias: {
        h: 'help',
        v: 'version',
        f: 'file',
        o: 'output'
    }
});
// check commandline arguments
check_cl_arguments(args);
// initialize variables
const file_name = args['file'];
const output_name = !!args['output'] ? args['output'] : 'ynab_' + file_name;
console.log(file_name);
console.log(output_name);
//# sourceMappingURL=parser.js.map