<template>
  <div class="main">
    <div class="video_bg_hldr">
      <video width="3840" height="1080" autoplay loop class="video_bg">
        <source src="videos/Samsung_Wall_BG.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="first_container square">
      <div id="first_container" style="opacity: 1;">
        <img src="IdlepagetransparentTop.png" alt />
      </div>

      <div v-for="listofphone in listofphones" :key="listofphone.id" :data-src-id="listofphone.id" class="image_list">
        <img
          :src="CMS_URL_IMAGE+''+listofphone.phone_image"
          alt
        />
      </div>

    </div>

    <div class="second_container square">
      <div id="second_container" style="opacity: 1;">
        <img src="IdlepagetransparentTop.png" alt />
      </div>

      <div v-for="listofphone in listofphones" :key="listofphone.id" :data-src-id="listofphone.id + 4" class="image_list">
        <img
          :src="CMS_URL_IMAGE+''+listofphone.phone_image"
          alt
        />
      </div>

    </div>

    <div class="third_container square">
      <div class="div" v-for="listofphone in listofphones" :key="listofphone.id">
        <div
          class="new"
          :style="{ backgroundImage: `url(${CMS_URL_IMAGE+''+listofphone.phone_image})`}"
        >
          <div :class="'overlay'+listofphone.order_sort"></div>
        </div>
        <p class="title">{{ listofphone.phone_name }}</p>
        <div class="ex" :data-id="listofphone.id" @click="closeContainer">
          <img src="Closebutton.png" alt />
        </div>
        <p class="swipe">tap to learn more</p>
        <div class="img_div" style>
          <div class="btn_overlay"></div>
          <img
            @click="openContainer"
            class="btn_start"
            src="CircularPlus.png"
            alt
            data-container="first_container"
            :data-real-id="listofphone.id"
            :data-id="listofphone.id"
          />
        </div>
        <img class="btn_line" src="Line.png" alt />
        <div class="video">
          <video width="100%" height="100%" autoplay="0" muted :id="listofphone.id">
            <source
              :src="CMS_URL_VIDEO+''+listofphone.phone_video"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div class="clearboth"></div>
    </div>

    <div class="fourth_container square">
      <div class="div" v-for="listofphone in listofphones" :key="listofphone.id">
        <div
          class="new"
          :style="{ backgroundImage: `url(${CMS_URL_IMAGE+''+listofphone.phone_image})`}"
        >
          <div :class="'overlay'+listofphone.order_sort"></div>
        </div>
        <p class="title">{{ listofphone.phone_name }}</p>
        <div class="ex" :data-id="listofphone.id + 4"  @click="closeContainer">
          <img src="Closebutton.png" alt />
        </div>
        <p class="swipe">tap to learn more</p>
        <div class="img_div" style>
          <div class="btn_overlay"></div>
          <img
            @click="openContainer"
            class="btn_start"
            src="CircularPlus.png"
            alt
            data-container="second_container"
            :data-real-id="listofphone.id"
            :data-id="listofphone.id + 4"
          />
        </div>
        <img class="btn_line" src="Line.png" alt />
        <div class="video">
          <video width="100%" height="100%" autoplay="0" muted :id="listofphone.id + 4">
            <source
              :src="CMS_URL_VIDEO+''+listofphone.phone_video"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div class="clearboth"></div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data(){
    return {
      listofphones: [],
      CMS_URL_IMAGE: process.env.CMSUrl_Samsungwall_image,
      CMS_URL_VIDEO: process.env.CMSUrl_Samsungwall_video
    }
  },
  async created () {
    const config = {
      headers: {
        Accept : "application/json"
      }
    };
    try {
      // loader.hide()
      const response = await axios.get(process.env.apiUrl+'getallphones')
      if(response){
        this.listofphones = response.data;
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    openContainer: function (event) {
      const btn_this = $(event.target);
      const active = $(event.target).closest(".div");

      const main_div = $(event.target).closest(".square").find(".div");
      const main_div_btn_start = $(event.target).closest(".square").find(".div .img_div");
      const active_div = $(event.target).closest(".div");
      const other_div = $(event.target).closest(".square").find(".other");

      const toggle_container = $(event.target).data("container");

      main_div_btn_start.find(".btn_overlay").show();

      main_div_btn_start.attr("disabled", "disabled");

      main_div.addClass("other");

      active_div.removeClass("other").addClass("active");
      active_div.find(".video").delay(510).fadeIn();

      active_div.find(".ex").delay(1000).css({"font-size":"70px"}).fadeIn(200);

      main_div_btn_start.delay(300).fadeOut();
      $(event.target).closest(".square").find(".div .title").delay(200).fadeOut();
      $(event.target).closest(".square").find(".div .swipe").delay(200).fadeOut();

      active_div.velocity(
      {
      	width: "100%"
      },
      {
      	duration: 450,
      	delay: 500
      });

      $(event.target).closest(".square").find(".other").velocity(
      {
      	width: "0px"
      },
      {
      	duration: 450,
      	delay: 500
      });

      $(event.target).closest(".square").find(".other > p").velocity(
      {
      	rotateZ: "90deg"
      },
      {
      	duration: 100,
      	delay: 500,
      	display: "none"
      });

      $(event.target).closest("div").find("p").delay(500).fadeOut();

      $("."+toggle_container+" .image_list").each(function(event){
      	if($(this).data("src-id") == btn_this.data("id")){
      		$(this).hide().delay(500)
      		.fadeIn()
      		.css('opacity', 0)
      		.animate({opacity: 1}, {queue: false, duration: 450});
      		$("#"+toggle_container).hide();
      	}
      });

      $("#"+toggle_container).animate({opacity: 0}, {queue: false, duration: 450});

      const video_id = btn_this.data("id");
      setTimeout(function(){ const videos = document.getElementById(video_id); videos.play() }, 500);

    },
    closeContainer: function (event){
        const this_ex = $(event.target).closest('.ex');
        const main_div = $(event.target).closest(".square").find(".div");
        const main_div_btn_start = $(event.target).closest(".square").find(".div .img_div");
        const other_div = $(event.target).closest(".square").find(".other");
        const other_div_p = $(event.target).closest(".square").find(".other > p");
        const toggle_container = $(event.target).closest(".div").find(".btn_start").data("container");

        main_div_btn_start.find(".btn_overlay").hide();

        main_div_btn_start.removeAttr("disabled");
        main_div_btn_start.delay(500).fadeIn();
        other_div.animate({ width: "25%", opacity: "1" }, { duration: 450, queue: false });
        other_div.animate({ fontSize: "15px" }, { duration: 200, queue: false });

        other_div_p.velocity(
        {
          rotateZ: "0deg"
        },
        {
          duration: 500,
          display: "block"
        });

        $(event.target).closest(".square").find(".div .video").fadeOut();
        this_ex.css({"font-size":"15px"}).fadeOut();


        main_div.removeClass("other active");

        main_div.velocity(
        {
          width: "25%"
        },
        {
          duration: 500
        });

        $("."+toggle_container+" .image_list").animate({opacity: 0}, {queue: false, duration: 700});

        $("#"+toggle_container).hide().delay(500)
        .fadeIn()
        .css('opacity', 0)
        .animate({opacity: 1}, {queue: false, duration: 500});

        $(event.target).closest(".div").find("p").delay(200).fadeIn();
        // $(event.target).closest(".square").find(".btn_line").delay(200).fadeIn();

        setTimeout(function(){
          const allvideos = document.getElementById(this_ex.data("id"));
          allvideos.pause();
          allvideos.currentTime = 0;
      }, 500);
    }
  }
}


</script>
