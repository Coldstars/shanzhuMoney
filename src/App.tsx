import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <div>
          <ul>
            <li>
              <routerLink to="/">Home</routerLink>
            </li>
            <li>
              <routerLink to="/Chat">Chat</routerLink>
            </li>
          </ul>
        </div>
        <div>
          <RouterView />
        </div>
      </>
    );
  },
});
