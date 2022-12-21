import { action } from "@ember/object";
import Component from "@glimmer/component";
import { utilB } from "package-b/utils/util-b";

export default class CompA extends Component {
  @action
  foo() {
    return utilB("f");
  }
}
