import { ThemeMode } from '../../types';
export declare enum CodeInputType {
    NUMBER = "number",
    TEXT = "text"
}
export type CodeInputProps = {
    /** Expected length of code */
    codeLength: number;
    /** Controlled code value */
    value: string;
    /** onChange event; fires when code changes */
    onChange: (inputToken: string) => void;
    /** Submit code */
    onSubmit: () => Promise<void> | void;
    /** Indicator for e2e tests */
    dataTest?: string;
    /**
     * Submit error message
     * Undefined indicates that there is no error
     */
    errorMsg?: string;
    /** Forced theme mode */
    forceTheme?: ThemeMode;
    /** Controlled loading value */
    isSubmitting?: boolean;
    /**
     * Accepted input type
     * Can either be text or number
     */
    type?: CodeInputType;
};
//# sourceMappingURL=CodeInput.constants.d.ts.map