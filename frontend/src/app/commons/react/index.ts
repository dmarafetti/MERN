/**
 * React components commons library
 *
 * @author diego
 * @since 1.0.0
 */
import {camelCase} from 'change-case';



/**
 * @property {string[]} attrs - Collection of attributes to be loaded by the app (portable params)
 * @property {} env - Collection of attributes to be loaded by the app but stored in the sessionStorage (portable params)
 */
export interface AttributeSet {

    attrs?: string[]
}


/**
 * callback executed for each node
 */
export type BootstrapCallback = (node: Element, applicationParams: Record<string, string>, env?: Map<string, string>) => void;




/**
 * Start up all portables once the current document is
 * loaded.
 *
 * @param selector {String} css selector
 * @param attributes {AttributeSet} collection of attributes to be loaded by the app (portable params)
 * @param cb {BootstrapCallback} callback
 */
export function bootstrap(selector: string, attributes: AttributeSet, cb: BootstrapCallback): void {

    window.addEventListener('load', () => {

        if (window.document.readyState != 'complete') {

            console.warn('Bootstrapping can be used only when document is already loaded.');

            return false;
        }

        _doBootstrap(selector, attributes, cb);

    });
}



/**
 * Synchronously start up all portables
 *
 * @see {bootstrap}
 *
 */
export function bootstrapSync(selector: string, attributes: AttributeSet, cb: BootstrapCallback): void {

    _doBootstrap(selector, attributes, cb);
}



/**
 * Load react components
 *
 * @private
 */
function _doBootstrap(selector: string, {attrs = []}: AttributeSet, cb: BootstrapCallback): void {

    let nodes = window.document.querySelectorAll(selector);

    nodes.forEach((node) => {

        let applicationParams: Record<string, string> = {};


        // load html attributes

        attrs.forEach(attr => {

            let nodeAttr = node.getAttribute(attr);

            if(nodeAttr) applicationParams[camelCase(attr)] = nodeAttr;

        });


        // merge environment variables

        let env = new Map(Object.entries(process.env as any)) as Map<string, string>;


        // invoke react app

        console.log(
            '%c Application %c Bootstrapping [%o] application with these attributes: %o  ',
            'background: #10639f; color: #fff; border-radius: 3px; padding: 1px; font-size: 0.7rem',
            'background: #fff; color: #303942; border-radius: 0; padding: 1px; font-size: 0.7rem',
            node, applicationParams
        );

        cb(node, applicationParams, env);

    });

}
