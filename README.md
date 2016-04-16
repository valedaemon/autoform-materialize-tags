# Materialize Tags for Autoform

## Get some chip loving for autoform

This package uses the [Materialize Tags Input](http://henrychavez.github.io/materialize-tags/examples/) library to 
easily provide a method to incorporate chips (tags) into a text field.

To install, simply run

```
meteor add valedaemon:autoform-materialize-tags
```

Then, when defining an autoform field, simply mark it as "material-tags" like so:

```
{{> afQuickField name="items" type="material-tags"}}
```

If you would like to add a material icon to appear before the chip's text, then add a data-icon element to the field such as

```
{{> afQuickField name="members" type="material-tags" data-icon="email"}}
```

Done!
