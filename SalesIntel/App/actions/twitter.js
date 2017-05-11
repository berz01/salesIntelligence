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
  getFacebookFeed(){
      return fetch('https://salesintel.herokuapp.com/api/v1/facebook/profile')
      .then(response => response.json())
      .then(data => {
          var fbFeed = {};
          fbFeed.feed = [];
          var name = data.name.split(' ')[0];
          var favoriteTeam = data.favorite_teams[0].name;

          fbFeed.feed.push({
            info: name + "'s favorite team is the " + favoriteTeam,
            img: null
          });
          fbFeed.feed.push({
            info: "Political beliefs: " + data.political,
            img: null
          });
          fbFeed.feed.push({
            info: name + "'s favorite team is the " + favoriteTeam,
            img: null
          });
          fbFeed.feed.push({
            info: name + "'s favorite team is the " + favoriteTeam,
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
          info: "SF Flash Build presentation later today. Wish me luck!",
          img: null
        });

        twitterFeed.feed.push({
          info: "Been working too hard this week; getting exhausted. #noSleep",
          img: null
        });

        twitterFeed.feed.push({
          info: "Shout out to my boy @adamBall for graduating from Georgia Tech today!",
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
