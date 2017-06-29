var Api = {
  getProfile: function(token) {

    return fetch('https://salesintel.herokuapp.com/api/v1/facebook/profile/'+token)
    .then(response => response.json())
    .then(response => {
      var profile = {};

      profile.profileHeadline = {
        network: 'twitter',
        info: "Leading the edge on Product Development - @Berz01",
        img: null
      }

      profile.profileData = {
        name: response.name,
        pictureUri: response.picture.data.uri
      }

      if(response.work != undefined){
        profile.occupation = response.work.position.title + " at " + response.work.employer.name ,
      }
 
      if(response.work != undefined){
        var startdate = start_date != "0000-00" ? " since " + response.work.start_date : "";
        profile.feed.push({
          network: 'facebook',
          info: "Job: " + response.work.employer.name + " as " + response.work.position.title + startdate,
          img: null
        });
      }
      if(response.relationship_status != undefined){
        profile.feed.push({
          network: 'facebook',
          info: "Relationship Status: " + response.relationship_status,
          img: null
        });
      }
      if(response.location != undefined){
        profile.feed.push({
          network: 'facebook',
          info: "Location: " + response.location.name,
          img: null
        });
      }

      if(profile.feed.length < 2 && response.cover != undefined){
        profile.feed.push({
          network: 'facebook',
          info: "Cover photo",
          img: response.cover.source
        });
      }

        return profile;
    })
    .catch(e => {
      console.log("GET PROFILE ERROR:", e)
    });

  },
  getFacebookProfile(token){
    return fetch('https://salesintel.herokuapp.com/api/v1/facebook/profile/'+token)
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(e => {
      console.log("FACEBOOK PROFILE GET ERROR", e);
    })
  },
  getFacebookFeed(token){
      return fetch('https://salesintel.herokuapp.com/api/v1/facebook/profile/'+token)
      .then(response => response.json())
      .then(response => {
          var fbFeed = {};
          fbFeed.feed = [];
          fbFeed.info = {};

          fbFeed.info = {
            name: response.name,
            pictureUri: response.picture.data.uri
          }

          if(response.gender != undefined){
            fbFeed.feed.push({
              info: "Gender: " + response.gender,
              img: null
            });
          }
          if(response.birthday != undefined){
            fbFeed.feed.push({
              info: "Birthday: " + response.birthday,
              img: null
            });
          }
          if(response.hometown != undefined){
            fbFeed.feed.push({
              info: response.name + "'s hometown is " + response.hometown.name,
              img: null
            });
          }
          if(response.favorite_teams != undefined){
            fbFeed.feed.push({
              info: "One of their favorite teams:" + response.favorite_teams[0].name,
              img: null
            });
          }
          if(response.political != undefined){
            fbFeed.feed.push({
              info: "Political beliefs: " + response.political,
              img: null
            });
          }
          if(response.education != undefined){
            fbFeed.feed.push({
              info: "Last education experience:" + response.education[response.education.length-1].school.name,
              img: null
            });
          }

          return fbFeed;
      })
      .catch(e => {
        console.log("FACEBOOK API CALL ERROR", e);
      })
  },
  getLinkedInFeed(){
    return fetch('https://salesintel.herokuapp.com/api/v1/linkedin/maincall')
    .then(response => response.json())
    .then(data => {
        var linkedinFeed = {};
        linkedinFeed.feed = [];

        if(data.headline != undefined){
          linkedinFeed.feed.push({
            //headline
            info: "Headline: " + data.headline,
            img: null
          });
        }
        if(data.positions != undefined && data.positions.values != undefined){
          var currentPosition = data.positions.values[0];

          if(currentPosition.company != undefined){
            linkedinFeed.feed.push({
              //curent job
              info: "Current Job: " + currentPosition.company.name +
              " - " + currentPosition.title,
              img: null
            });
          }
          if(currentPosition.location != undefined){
            //location
             linkedinFeed.feed.push({
               info: "Location: " + currentPosition.location.name,
               img: null
             });
          }
          if(currentPosition.startDate != undefined){
            //date
            linkedinFeed.feed.push({
                info: "Date: " + currentPosition.startDate.year,
              img: null
            });
          }
        }
        if(data.industry != undefined){
          linkedinFeed.feed.push({
            info: "Industry: " + data.industry,
            img: null
          });
        }
        return linkedinFeed;
    })
    .catch(e => {
      console.log("LINKEDIN ERROR:", e);
    });
  },
  getInstagramFeed(){
    return fetch('https://salesintel.herokuapp.com/api/v1/instagram/maincall')
    .then(response => response.json())
    .then(response => {
        var instagramFeed = {};
        instagramFeed.feed = [];

        for(var i=0; i < 3; i++){
          instagramFeed.feed.push({
            info: response.data[i].caption != null ? response.data[i].caption.text : null,
            img: response.data[i].images.standard_resolution.url
          });
        }

        return instagramFeed;
    })
    .catch(e => {
      console.log("INSTA ERROR",e);
    })
  },
  getTwitterFeed(){
    return fetch('https://salesintel.herokuapp.com/api/v1/twitter/searchTwitterTweetsById')
    .then(response => response.json())
    .then(data => {
        var twitterFeed = {};
        twitterFeed.feed = [];

        for(var i=0; i < 3; i++){
          twitterFeed.feed.push({
            info: data.statuses[i].text,
            img: null
          });
        }

        return twitterFeed;
    })
    .catch(e => {
      console.log("TWITTER ERROR:", e);
    })
  }
};

export {
  Api as
  default
};
