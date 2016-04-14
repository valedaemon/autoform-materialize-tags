// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by autoform-materialize-tags.js.
import { name as packageName } from "meteor/autoform-materialize-tags";

// Write your tests here!
// Here is an example.
Tinytest.add('autoform-materialize-tags - example', function (test) {
  test.equal(packageName, "autoform-materialize-tags");
});
