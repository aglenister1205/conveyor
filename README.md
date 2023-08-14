# Conveyor

Conveyor is a comprehensive UI library for introspecting and interacting with GraphQL APIs generated by the [Magql](https://github.com/autoinvent/magql) library. It provides an intuitive and user-friendly interface for performing CRUD (Create, Read, Update, Delete) operations on your GraphQL data.

## Features

- **Automatic UI Generation:** Conveyor automatically introspects your GraphQL schema and generates a UI that corresponds to your data structure. This includes forms for data entry, tables for data viewing, and even more complex UI structures for nested or related data.

## Prerequisites

Before using Conveyor, you need to have a GraphQL API generated by the Magql library. Magql provides a robust, flexible, and easy-to-use way to create a GraphQL API from your existing data.

## Usage

First, install the library:

```bash
pnpm install @autoinvent/conveyor
```

Then you can use it in your project:

- Check out [outline](outline.md) for component description and usages.

## Usage from CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/src/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Conveyor</title>
    <style>
      body {
        height: 100%;
        margin: 0;
        width: 100%;
        overflow: hidden;
      }
    </style>

    <!--
      This example depends on Promise and fetch, which are available in modern browsers, but can be "polyfilled" for older browsers.
      Conveyor itself depends on React DOM.
      If you do not want to rely on a CDN, you can host these files locally or nclude them directly in your favored resource bundler.
    -->
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
  </head>

  <body>
    <div id="conveyorAdmin">Loading...</div>
    <script src="https://unpkg.com/@autoinvent/conveyor@1.0.0-beta.0/dist/conveyor.umd.js"></script>
    <script defer>
      const ConveyorAdmin = window.conveyor.ConveyorAdmin;

      const gqlUrl = "/graphql";
      // Fetcher to retrieve GraphQL query/mutation from endpoint
      const useGQLQueryResponse: UseGQLQueryResponse = (graphQLParams) => {
        return fetch(gqlUrl, {
          body: JSON.stringify({
            document: graphQLParams.document,
            variables: graphQLParams.variables,
          }),
        });
      };
      const useGQLMutationRequest: UseGQLMutationRequest = (graphQLParams) => {
        return (options) =>
          fetch(gqlUrl, {
            body: JSON.stringify({
              document: graphQLParams.document,
              variables: options?.variables ?? graphQLParams.variables,
            }),
          });
      };

      ReactDOM.render(
        React.createElement(ConveyorAdmin, {
          useGQLQueryResponse: useGQLQueryResponse,
          useGQLMutationRequest: useGQLMutationRequest,
        }),
        document.getElementById("conveyor")
      );
    </script>
  </body>
</html>
```

## Scripts

- `pnpm dev` - start a development server for testing the conveyor library with hot reload.
- `pnpm build` - build library for production. The generated files will be on the `dist` folder. `pnpm pack` will package these files into a tarball for install.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run tests in watch mode.
- `pnpm test:ci` - run tests once without watch mode.
- `pnpm test:ui` - run tests with ui.
- `pnpm format` - format all files with Rome.
- `pnpm lint` - runs TypeScript, Rome and Stylelint.
- `pnpm validate` - runs `lint`, `test:ci`.

## Resources
