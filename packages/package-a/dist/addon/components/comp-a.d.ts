import Component from '@glimmer/component';
import '@glint/environment-ember-loose/registry';
interface MyComponentSignature {
    Args: {};
}
export default class MyComponent extends Component<MyComponentSignature> {
    constructor(owner: Object, args: MyComponentSignature['Args']);
}
export {};
