export interface AttributeSet {
    attrs?: string[];
}
export type BootstrapCallback = (node: Element, applicationParams: Record<string, string>, env?: Map<string, string>) => void;
export declare function bootstrap(selector: string, attributes: AttributeSet, cb: BootstrapCallback): void;
export declare function bootstrapSync(selector: string, attributes: AttributeSet, cb: BootstrapCallback): void;
