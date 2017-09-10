/// <reference types="passport"/>

import passport = require("passport");
import express = require("express");

interface IStrategyOptions {
    usernameField?: string;
    passwordField?: string;
    passReqToCallback?: boolean;
}

interface IStrategyOptionsWithRequest {
    usernameField?: string;
    passwordField?: string;
    passReqToCallback: boolean;
}

interface IVerifyOptions {
    message: string;
}

interface VerifyFunctionWithRequest {
    (req: express.Request, username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void;
}

interface VerifyFunction {
    (username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void;
}

export declare class Strategy implements passport.Strategy {
    constructor(options: IStrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: IStrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);

    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}

interface LocalStrategyInfo {
    message: string;
}