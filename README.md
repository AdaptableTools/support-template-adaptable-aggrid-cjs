# AdapTable CJS (Vanilla TypeScript) Support Template


This is a very basic example of how to get started with AdapTable - the market-leading, low code AG Grid extension using CommonJS.

> For ESM (which is the **recommended way** to use AdapTable) see [Adaptable Vanilla Support Template](https://github.com/AdaptableTools/support-template-adaptable-aggrid) 

This template is particularly useful if you wish to build a very small demo for Support purposes.

It is written purely in **TypeScript** and does not use one of the Framework wrappers.

For full information on how to use AdapTable see the [AdapTable Documentation](https://docs.adaptabletools.com).

## Versions and Dependencies

The demo is built using these key packages:

- [AdapTable](https://docs.adaptabletools.com/) version 20.0
- [AG Grid](https://www.ag-grid.com) version 33.0

## Contents

This template contains just the bare bones required to set up an AdapTable instance. 

A "real world" example would likely include:

- Design-time - providing [Adaptable Options](https://docs.adaptabletools.com/guide/reference-options-overview) and [Initial Adaptable State](https://docs.adaptabletools.com/guide/reference-initial-state) to configure the application
- Run-time - using the [Adaptable API](https://docs.adaptabletools.com/guide/reference-api-overview) and listening to [Adaptable Events](https://docs.adaptabletools.com/guide/reference-event-overview)

## Installation

Run `npm install` (or `yarn`), depending on what tool you're using.

## Running in Development Mode

Execute the following command

```sh
$ npm run dev
```

NOTE: The first time you run this, it takes longer as parcel generates some cache, etc - subsequent runs will be a lot faster

Now navigate to [localhost:1234](http://localhost:1234) in order the see AdapTable in action.

Any change you make in your sources will trigger a browser reload, since parceljs comes with built-in hot-reloading in order to keep you productive.

## Building for Production

```sh
$ npm run build
```

This generates a `dist` folder, which you can deploy on a webserver.

On your local machine, you can run

```sh
$ npx serve dist
```

to launch a webserver that serves the generated `dist` folder - now go to [localhost:5000](http://localhost:5000) to see the production version.

## Licences

An [AdapTable Licence](https://docs.adaptabletools.com/guide/buying-adaptable-licensing) provides access to all product features as well as quarterly updates and enhancements through the lifetime of the licence, comprehensive support, and access to all 3rd party libraries.

Licences can be purchased individually, for a team, for an organisation or for integration into software for onward sale.

We can make a Trial Licence available for a short period of time to allow you to try out AdapTable for yourself.

Please contact [`sales@adaptabletools.com`](mailto:sales@adaptabletools.com) or read the [Licence Documentation](https://docs.adaptabletools.com/guide/buying-adaptable-licensing) for more information.

## Help

Developers can learn how to access AdapTable programmatically at [AdapTable Documentation](https://docs.adaptabletools.com).  

Here you can see a large number of AdapTable demos each showing a different feature, function or option in AdapTable.

## Demo

To see AdapTable in action visit our [Demo Site](https://www.adaptabletools.com/demos) which contains a few larger demos.

## More Information

General information about Adaptable Tools is available at our [Website](http://www.adaptabletools.com) 
 
## Support

For all support enquiries please [raise a Support Ticket](https://adaptabletools.zendesk.com/hc/en-us/requests/new).
