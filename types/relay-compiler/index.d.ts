// Type definitions for relay-compiler 14.0
// Project: https://relay.dev
// Definitions by: n1ru4l <https://github.com/n1ru4l>
//                 Eloy Durán <https://github.com/alloy>
//                 Marais Rossouw <https://github.com/maraisr>
//                 Levi Buzolic <https://github.com/levibuzolic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

declare const binary: string;

export default binary;

export interface Config {
    /** Root directory of application code. */
    src: string;
    /** Relative path to the file with GraphQL SDL file. */
    schema: string;
    /** The name of the language used for input files and generated artifacts. */
    language: 'javascript' | 'flow' | 'typescript';
    /** A specific directory to output all artifacts to. When enabling this the babel plugin needs `artifactDirectory` to be set as well. */
    artifactDirectory?: string;
    /** Directories to ignore under `src`. */
    excludes?: string[];
    /** List of directories with schema extensions. */
    schemaExtensions?: string[];
    schemaConfig?: {
        /** Configure the name of the globally unique ID field on the Node interface. Useful if you can't use the default `id` field name. */
        nodeInterfaceIdField?: string;
        /** Restricts the type of all fields named `id` to `ID`. */
        nonNodeIdFields?: {
            /** Mappings from types in your schema to allowed types for their fields named `id` (e.g. "ObjectType": "CustomIdType"). */
            allowedIdTypes: { [key: string]: string };
        };
    };
    /** For `flow` only. This option controls whether or not a catch-all entry is added to enum type definitions values that may be added in the future. Enabling this means you will have to update your application whenever the GraphQL server schema adds new enum values to prevent it from breaking. */
    noFutureProofEnums?: boolean;
    /** Mappings from custom scalars in your schema to built-in GraphQL types, for type emission purposes. */
    customScalars?: { [key: string]: string };
    /** This option enables emitting ES modules artifacts. */
    eagerEsModules?: boolean;
    /** Relay supports two versions of the config: Remote persisting and Local persisting  */
    persistConfig?:
        | /** Remote persisting */ {
              /** String, URL to send a POST request to to persist. This field is required in `persistConfig` */
              url?: string;
              /** The document will be in a `POST` parameter `text`. This map can contain additional parameters to send. */
              params?: { [key: string]: string };
              /** The maximum number concurrent requests that will be made to `url`. Use a value greater than 0. */
              concurrency?: number;
          }
        | /** Local persisting */ {
              /** Path for the JSON file that will contain operations map. Compiler will write queries in the format: { "md5(queryText) => "queryText", ...}. */
              file?: 'string';
          };

    /** Command name that for relay compiler. [string] */
    codegenCommand?: string;
    /** Name of the global variable for dev mode (`__DEV__`). [string] */
    isDevVariableName?: string;
    /** Formatting style for generated files. `commonjs` or `haste`. Default is `commonjs`. [string] */
    jsModuleFormat?: 'commonjs' | 'haste';
    /** Options for configuring the output of compiler diagnostics. [object] */
    diagnosticReportConfig?: {
        /** The severity level of diagnostics that will cause the compiler to error out on. */
        criticalLevel: 'error' | 'warning' | 'info';
    };
}
