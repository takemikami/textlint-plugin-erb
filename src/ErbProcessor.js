"use strict";

import { parse } from "textlint-plugin-html/lib/html-to-ast";

export default class ErbProcessor {
    constructor(config) {
        this.config = config;
    }

    static availableExtensions() {
        return [
            ".erb"
        ];
    }

    processor(ext) {
        return {
            preProcess(text, filePath) {
                if (filePath.endsWith(".html.erb")) return parse(text);
                return parse('');
            },
            postProcess(messages, filePath) {
                return {
                    messages,
                    filePath: filePath ? filePath : "<erb>"
                };
            }
        };
    }
}
