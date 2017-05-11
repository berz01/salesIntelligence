var Api = {
  getProfile: function() {
    return fetch('http://localhost:8081')
      .then(response => response.json())
      .catch(e => e)
  },
  getLinkedIn: function() {
    var profile = {};

    return fetch('https://salesintel.herokuapp.com/api/v1/linkedin/maincall')
    .then(response => response.json())
    .then(data => {
      var firstName = data.currentShare.author.firstName;
      var lastName = data.currentShare.author.lastName;
      var title = data.positions.values[0].title;
      var company = data.positions.values[0].company.name;
      var pictureUri = data.pictureUrl;

      profile.profileData = {
        "name": firstName + ' ' + lastName,
        "occupation": title + " at " + company,
        "pictureUri": pictureUri
      }

      profile.profileHeadline = {
        network: 'twitter',
        info: "Outdoors. Rock Climbing. Father. - @rockman",
        img: null
      }

      profile.feed = [{
          network: 'facebook',
          info: "Kids are Samantha (age 9) & Robert (age 11)",
          img: null
        }, {
          network: 'facebook',
          info: "Married to Jane Smith on January 21, 2009",
          img: null
        }, {
          network: 'linkedin',
          info: "Started at Some Firm in June 06, 2016",
          img: null
        }]

        return profile;
    })
    .catch(e => {
    console.log("catch error occured:", e)
    });

  },
  getProfileStub: function() {
    var data = {
      profileHeadline: {
        network: 'twitter',
        info: "Outdoors. Rock Climbing. Father. - @rockman",
        img: null
      },
      profileData: {
        "name": "Barrett Davis",
        "occupation": "Senior Accountant at Some Firm",
        "pictureUri": "https://scontent.forf1-2.fna.fbcdn.net/v/t1.0-9/553940_10151329065961264_63769078_n.jpg?oh=a062cd40064d5766334e0a88f5296fbe&oe=59B2C83D"
      },
      feed: [{
        network: 'facebook',
        info: "Kids are Samantha (age 9) & Robert (age 11)",
        img: null
      }, {
        network: 'facebook',
        info: "Married to Jane Smith on January 21, 2009",
        img: null
      }, {
        network: 'linkedin',
        info: "Started at Some Firm in June 06, 2016",
        img: null
      }, {
        network: 'instagram',
        info: "",
        img: null
      }, {
        network: 'twitter',
        info: "i lost my dad in walmart",
        img: null
      }]
    };

    return new Promise(function(resolve, reject) {
      resolve(data);
    });
  }
};

export {
  Api as
  default
};
