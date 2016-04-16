AutoForm.addInputType("material-tags", {
  template: "mattags",
  valueConverters: {
    "stringArray": function(val) {
      if (_.isArray(val)) {
        return _.map(val, function (item) {
          return $.trim(item);
        });
      }
      return val;
    }
  }
});

Template.mattags.onRendered(function() {
  $('[data-role=materialtags]').materialtags({
    itemIcon: function(item) {
      return $('input[data-role=materialtags]').attr('data-icon');
    }
  });
});
