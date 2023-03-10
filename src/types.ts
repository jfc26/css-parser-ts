import StrKits from 'strkits';

export interface Declaration {
    property: string;
    value: string;
}

export interface DeclarationBlock {
    [property: string]: string;
}

export interface RuleSet {
    type: 'rule-set';
    selectors: string[];
    declarationBlock: DeclarationBlock;
}

export interface RegularAtRule {
    type: 'regular-at-rule';
    identifier: string;
    rule: string;
}

export interface DescribesAtRule {
    type: 'describes-at-rule';
    identifier: string;
    rule: string;
    declarationBlock: DeclarationBlock;
}

export interface NestedAtRule {
    type: 'nested-at-rule';
    identifier: string;
    rule: string;
    styleSheetList: StyleSheet[];
}

export type AtRule = RegularAtRule | DescribesAtRule | NestedAtRule;

export type StyleSheet = RuleSet | RegularAtRule | DescribesAtRule | NestedAtRule;

// ==========================

export interface ParseOptions {
    classOrIDTransformFn?: (oldClassOrID: string) => string;
    propertyTransformFn?: (oldPropertyName: string) => string;
}

export interface ToStringOptions {
    /**
     * If you want to use this option, you need to install `prettier`.
     * @default false
     */
    pretty?: boolean;
    /**
     * Required: pretty = true
     */
    tabWidth?: number;
    /**
     * Required: pretty = true
     */
    printWidth?: number;
}
