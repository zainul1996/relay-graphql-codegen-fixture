# relay-graphql-codegen-fixture

Minimal TypeScript project with GraphQL Code Generator for the Relay live
corpus.

Checks:

```bash
npm install
npm run codegen
npm run typecheck
npm test
```

`ViewerQuery` in `src/generated/graphql.ts` is generated from `schema.graphql`
and `src/operations.graphql`. Never edit the generated file by hand.
