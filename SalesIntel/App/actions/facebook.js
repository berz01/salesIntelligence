var Api = {
  getProfile: function() {
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
        "name": firstName + ' ' + "davis",
        "occupation": "Dev" + " at " + "State Farm",
        "pictureUri": pictureUri
      }

      profile.profileHeadline = {
        network: 'twitter',
        info: "Leading the edge on Product Development",
        img: null
      }

      profile.feed = [{
          network: 'facebook',
          info: "Job: Software Developer at State Farm since 2012",
          img: null
        }, {
          network: 'facebook',
          info: "Relationship Status: In A relationship with Catherine Unkles",
          img: null
        }, {
          network: 'facebook',
          info: "Location: Atlanta, Georgia",
          img: null
        }]

        return profile;
    })
    .catch(e => {
    console.log("catch error occured:", e)
    });

  },
  getFacebookFeed(){
      return fetch('https://salesintel.herokuapp.com/api/v1/facebook/profile')
      .then(response => response.json())
      .then(data => {
          var fbFeed = {};
          fbFeed.feed = [];
          var name = data.name.split(' ')[0];
          var favoriteTeam = data.favorite_teams[0].name;

          fbFeed.feed.push({
            info: "Favorite Teams: " + "Atlanta Falcons, UGA",
            img: null
          });
          fbFeed.feed.push({
            info: "Political beliefs: " + "Not republicans",
            img: null
          });
          fbFeed.feed.push({
            info: "Gender: " + "Male",
            img: null
          });
          fbFeed.feed.push({
            info: "Birthday: " + "6/18/1989 " + "age: "+ "27",
            img: null
          });
          fbFeed.feed.push({
            info: "Interested In: " + "Movies, Cars, Baby, Books, Startups, Tech",
            img: null
          });
          fbFeed.feed.push({
            info: null,
            img: 'http://the-toast.net/wp-content/uploads/2016/03/toast-1077984_1920-800x0-c-default.jpg'
          });

          return fbFeed;
      })
      .then(e => {
        console.log(e);
      })
  },
  getLinkedInFeed(){
    return fetch('https://salesintel.herokuapp.com/api/v1/linkedin/maincall')
    .then(response => response.json())
    .then(data => {
        var linkedinFeed = {};
        linkedinFeed.feed = [];

        linkedinFeed.feed.push({
          info: "Example Test for linkedin",
          img: null
        });

        return linkedinFeed;
    })
    .then(e => e);
  },
  getInstagramFeed(){
    return fetch('https://salesintel.herokuapp.com/api/v1/linkedin/maincall')
    .then(response => response.json())
    .then(data => {
        var instagramFeed = {};
        instagramFeed.feed = [];

        instagramFeed.feed.push({
          info: "Example Test for instagram",
          img: null
        });


        instagramFeed.feed.push({
          info: "Second Example Test for instagram",
          img: null
        });


        return instagramFeed;
    })
    .then(e => e);
  },
  getTwitterFeed(){
    return fetch('https://salesintel.herokuapp.com/api/v1/linkedin/maincall')
    .then(response => response.json())
    .then(data => {
        var twitterFeed = {};
        twitterFeed.feed = [];

        twitterFeed.feed.push({
          info: "Example Test for Twitter",
          img: null
        });

        twitterFeed.feed.push({
          info: "Second Example Test for Twitter",
          img: null
        });

        return twitterFeed;
    })
    .then(e => e);
  }
};

export {
  Api as
  default
};
