import {
  css,
  customElement,
  html,
  query,
} from "@umbraco-cms/backoffice/external/lit";
import { agent } from "../external/clippy/agents/Clippy/index.js";
import { Agent } from "../external/clippy/agent.js";
import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";
import { UMB_NOTIFICATION_CONTEXT } from "@umbraco-cms/backoffice/notification";

@customElement("umb-clippy")
export class UmbClippyElement extends UmbLitElement {
  #agent?: Agent;

  @query("#clippy")
  private _clippy?: HTMLElement;

  constructor() {
    super();

    this.consumeContext(UMB_NOTIFICATION_CONTEXT, (context) => {
      this.observe(context.notifications, (notifications) => {
        console.log("notifications", notifications);
        this.#agent?.speak("I see you are working on a document.");
      });
    });
  }

  protected override firstUpdated() {
    // this.style.width = agent.config.framesize[0] + "px";
    // this.style.height = agent.config.framesize[1] + "px";

    this.#agent = new Agent({ agent: agent, element: this._clippy });
    this.#agent.show();

    this.#agent.speak("I'm Clippy", true);

    setInterval(() => {
      this.#agent?.animate();
    }, 3000 + Math.random() * 4000);
  }

  override render() {
    return html`<div id="clippy"></div>`;
  }

  static override styles = [
    css`
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        position: absolute;
        bottom: var(--uui-size-layout-4, 64px);
        right: var(--uui-size-layout-1, 24px);

        height: 100px;
        width: 125px;
      }

      .clippy-balloon {
        position: fixed;
        z-index: 1000;
      }

      .clippy-balloon {
        background: #ffc;
        color: black;
        padding: 8px;
        border: 1px solid black;
        border-radius: 5px;
      }

      .clippy-content {
        max-width: 200px;
        min-width: 120px;
        font-family: "Microsoft Sans", sans-serif;
        font-size: 10pt;
      }

      .clippy-tip {
        width: 10px;
        height: 16px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAMAAAAlvKiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRF///MAAAA////52QwgAAAAAN0Uk5T//8A18oNQQAAAGxJREFUeNqs0kEOwCAIRFHn3//QTUU6xMyyxii+jQosrTPkyPEM6IN3FtzIRk1U4dFeKWQiH6pRRowMVKEmvronEynkwj0uZJgR22+YLopPSo9P34wJSamLSU7lSIWLJU7NkNomNlhqxUeAAQC+TQLZyEuJBwAAAABJRU5ErkJggg==)
          no-repeat;
        position: absolute;
      }

      .clippy-top-left .clippy-tip {
        top: 100%;
        margin-top: 0px;
        left: 100%;
        margin-left: -50px;
      }

      .clippy-top-right .clippy-tip {
        top: 100%;
        margin-top: 0px;
        left: 0;
        margin-left: 50px;
        background-position: -10px 0;
      }

      .clippy-bottom-right .clippy-tip {
        top: 0;
        margin-top: -16px;
        left: 0;
        margin-left: 50px;
        background-position: -10px -16px;
      }

      .clippy-bottom-left .clippy-tip {
        top: 0;
        margin-top: -16px;
        left: 100%;
        margin-left: -50px;
        background-position: 0px -16px;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "umb-clippy": UmbClippyElement;
  }
}
