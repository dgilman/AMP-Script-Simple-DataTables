# AMP-Script-Simple-DataTables

A lightweight, extendable, dependency-free javascript HTML table plugin. Similar to jQuery DataTables, but without the jQuery dependency. Forked version for use in [AMP](http://amp.dev) with [amp-script](https://amp.dev/documentation/components/amp-script/).

Forked from [Simple-DataTables](https://github.com/fiduswriter/Simple-DataTables. Based on [Vanilla-DataTables](https://github.com/Mobius1/Vanilla-DataTables), but written in ES2018.

### License

LGPL

### Features

* Sortable columns
* Pagination
* Searchable
* Customisable layout
* Customisable labels
* Customise column rendering
* Load data via AJAX requests
* Export to common formats like `csv`, `txt` `json`, and `sql`
* Import `csv` and `json` data
* Control column visibility
* Reorder or swap columns
* dayjs integration for sorting columns with datetime strings
* Extendable with custom plugins [See the Simple-DataTables wiki](https://github.com/fiduswriter/Simple-DataTables/wiki/Plugins)


[Simple-DataTables Documentation](https://github.com/fiduswriter/Simple-DataTables/wiki)


---

### Install

## npm
```
npm install westonruter/AMP-Script-Simple-DataTables --save
```

---

### Quick Start

Then just initialise the plugin by import DataTable and either passing a reference to the table or a CSS3 selector string as the first parameter:

```javascript
import {DataTable} from "simple-datatables"

const myTable = document.querySelector("#myTable");
const dataTable = new DataTable(myTable, { prerendered: true });

// or

const dataTable = new DataTable("#myTable", { prerendered: true });

```

You can also pass the options object as the second paramater:

```javascript
import {DataTable} from "simple-datatables"

const dataTable = new DataTable("#myTable", {
	prerendered: true, // <= NEW!
	searchable: false,
	fixedHeight: true,
	/* ... */
})
```

This forked version of Simple-DataTables is intended to be used with the `prerendered` option. What this means is that he UI (filtering, sorting, pagination) which the library normally adds via the `DataTable.render()` function client-side is instead expected to be rendered server-side, so that there is no flash of uninitialized content while the page is loading. When the `prerendered` option is provided, an error is thrown during initialization if the page does not contain all of the expected UI elements for the provided configuration. Since there are no DOM mutations during initialization this library can be used in `amp-script`, which forbids DOM mutations before user interactions (to prevent unwanted content shifting).

Please refer to the [`amp-tablepress`](https://github.com/westonruter/amp-tablepress) WordPress plugin for an example of how to pre-render the a datatable server-side.
