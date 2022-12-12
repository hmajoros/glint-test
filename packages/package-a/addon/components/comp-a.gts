import Component from '@glimmer/component';
import { utilB } from 'package-b/utils/util-b';

export default class CompA extends Component {
  foo: string = 2;
  <template>
    {{! @glint-nocheck }}
    <div>bar</div>

    {{florp-flop baz="foo"}}
  </template>
}