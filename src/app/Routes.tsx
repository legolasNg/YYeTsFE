import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { NotFoundPage } from "./pages";
import { Layout } from "./Layout";
import { BasePage } from "./BasePage";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/404" component={NotFoundPage} />

        <Route>
          <Layout>
            <BasePage />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}