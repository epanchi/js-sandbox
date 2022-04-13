try {
    // Validate whole inputs realted with firstname and lastname
    // prevent type not allowed characters
    var valid_all_firstname_lastname = $(".bf-firstname, .bf-lastname");
    valid_all_firstname_lastname.on("keyup", function() {
      var regex = /[^a-zA-Z_ ]/gi;
      $(this).val(
        $(this)
          .val()
          .replace(regex, "")
      );
    });
  } catch (err) {
    console.log("Error :: " + err.message);
  }