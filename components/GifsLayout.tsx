"use client";

import { GifContext } from "@/app/layout";
import { Grid } from "@giphy/react-components";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const newGifs = {
  data: [
    {
      type: "gif",

      id: "qpozeUvfqwmgu8l6Sc",

      url: "https://giphy.com/gifs/nhl-stars-dallas-qpozeUvfqwmgu8l6Sc",

      slug: "nhl-stars-dallas-qpozeUvfqwmgu8l6Sc",

      bitly_gif_url: "https://gph.is/g/4bpADjR",

      bitly_url: "https://gph.is/g/4bpADjR",

      embed_url: "https://giphy.com/embed/qpozeUvfqwmgu8l6Sc",

      username: "nhl",

      source: "",

      title: "Happy Ice Hockey GIF by NHL",

      rating: "g",

      content_url: "",

      source_tld: "",

      source_post_url: "",

      is_sticker: false,

      import_datetime: "2024-05-02 02:36:44",

      trending_datetime: "2024-05-08 03:51:35",

      images: {
        original: {
          height: 277,

          width: 500,

          size: "6299657",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",

          mp4_size: "1103976",

          mp4: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",

          webp_size: "1428476",

          webp: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.webp&ct=g",

          frames: "82",

          hash: "d85413a4292d74025ac93570c9aaac7e",
        },

        downsized: {
          height: 181,

          width: 327,

          size: "1624380",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy-downsized.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
        },

        downsized_large: {
          height: 277,

          width: 500,

          size: "6299657",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        },

        downsized_medium: {
          height: 277,

          width: 500,

          size: "4569246",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy-downsized-medium.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-medium.gif&ct=g",
        },

        downsized_small: {
          height: 110,

          width: 199,

          mp4_size: "166887",

          mp4: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy-downsized-small.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
        },

        downsized_still: {
          height: 181,

          width: 327,

          size: "33125",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy-downsized_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized_s.gif&ct=g",
        },

        fixed_height: {
          height: 200,

          width: 361,

          size: "3005405",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.gif&ct=g",

          mp4_size: "686090",

          mp4: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.mp4&ct=g",

          webp_size: "916308",

          webp: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.webp&ct=g",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 361,

          size: "228181",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.gif&ct=g",

          webp_size: "146306",

          webp: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
        },

        fixed_height_small: {
          height: 100,

          width: 181,

          size: "984724",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/100.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.gif&ct=g",

          mp4_size: "263052",

          mp4: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/100.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.mp4&ct=g",

          webp_size: "346858",

          webp: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/100.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.webp&ct=g",
        },

        fixed_height_small_still: {
          height: 100,

          width: 181,

          size: "14878",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/100_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
        },

        fixed_height_still: {
          height: 200,

          width: 361,

          size: "37865",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
        },

        fixed_width: {
          height: 111,

          width: 200,

          size: "1204636",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.gif&ct=g",

          mp4_size: "295940",

          mp4: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.mp4&ct=g",

          webp_size: "400668",

          webp: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.webp&ct=g",
        },

        fixed_width_downsampled: {
          height: 111,

          width: 200,

          size: "88598",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200w_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",

          webp_size: "55894",

          webp: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200w_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
        },

        fixed_width_small: {
          height: 56,

          width: 100,

          size: "357461",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/100w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.gif&ct=g",

          mp4_size: "48513",

          mp4: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/100w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.mp4&ct=g",

          webp_size: "143210",

          webp: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/100w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.webp&ct=g",
        },

        fixed_width_small_still: {
          height: 56,

          width: 100,

          size: "5138",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/100w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
        },

        fixed_width_still: {
          height: 111,

          width: 200,

          size: "17995",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/200w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
        },

        looping: {
          mp4_size: "4887348",

          mp4: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy-loop.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 277,

          width: 500,

          size: "90413",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
        },

        original_mp4: {
          height: 264,

          width: 480,

          mp4_size: "1103976",

          mp4: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
        },

        preview: {
          height: 108,

          width: 195,

          mp4_size: "45270",

          mp4: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy-preview.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
        },

        preview_gif: {
          height: 49,

          width: 88,

          size: "49239",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy-preview.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
        },

        preview_webp: {
          height: 78,

          width: 140,

          size: "49192",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/giphy-preview.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
        },

        "480w_still": {
          height: 266,

          width: 480,

          size: "6299657",

          url: "https://media1.giphy.com/media/qpozeUvfqwmgu8l6Sc/480w_s.jpg?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
        },
      },

      user: {
        avatar_url:
          "https://media4.giphy.com/channel_assets/nhl/sCDQY3KHSisL.jpg",

        banner_image:
          "https://media4.giphy.com/channel_assets/nhl/6Ol4yITkVIFv.gif",

        banner_url:
          "https://media4.giphy.com/channel_assets/nhl/6Ol4yITkVIFv.gif",

        profile_url: "https://giphy.com/nhl/",

        username: "nhl",

        display_name: "NHL",

        description: "The official GIPHY page for the NHL!",

        instagram_url: "https://instagram.com/nhl",

        website_url: "https://www.nhl.com",

        is_verified: true,

        suppress_chrome: false,

        is_public: false,
      },

      analytics_response_payload:
        "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9cXBvemVVdmZxd21ndThsNlNjJmN0PWc",

      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9cXBvemVVdmZxd21ndThsNlNjJmN0PWc&action_type=SEEN",
        },

        onclick: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9cXBvemVVdmZxd21ndThsNlNjJmN0PWc&action_type=CLICK",
        },

        onsent: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9cXBvemVVdmZxd21ndThsNlNjJmN0PWc&action_type=SENT",
        },
      },

      alt_text: "",

      tags: [],

      bottle_data: {},

      response_id: "1nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },

    {
      type: "gif",

      id: "8hsxi1ERBMZxV3dAuU",

      url: "https://giphy.com/gifs/sendwishonline-good-night-pillow-sleep-tight-8hsxi1ERBMZxV3dAuU",

      slug: "sendwishonline-good-night-pillow-sleep-tight-8hsxi1ERBMZxV3dAuU",

      bitly_gif_url: "https://gph.is/g/E0Bwoly",

      bitly_url: "https://gph.is/g/E0Bwoly",

      embed_url: "https://giphy.com/embed/8hsxi1ERBMZxV3dAuU",

      username: "sendwishonline",

      source: "https://sendwishonline.com/en",

      title: "Happy Good Night GIF by sendwishonline.com",

      rating: "g",

      content_url: "",

      source_tld: "sendwishonline.com",

      source_post_url: "https://sendwishonline.com/en",

      is_sticker: false,

      import_datetime: "2022-06-03 10:56:40",

      trending_datetime: "0000-00-00 00:00:00",

      images: {
        original: {
          height: 500,

          width: 500,

          size: "718346",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",

          mp4_size: "157192",

          mp4: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",

          webp_size: "536372",

          webp: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.webp&ct=g",

          frames: "101",

          hash: "f8f5201fdc4de2f28ae493f7f32345b0",
        },

        downsized: {
          height: 500,

          width: 500,

          size: "718346",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        },

        downsized_large: {
          height: 500,

          width: 500,

          size: "718346",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        },

        downsized_medium: {
          height: 500,

          width: 500,

          size: "718346",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        },

        downsized_small: {
          height: 500,

          width: 500,

          mp4_size: "71192",

          mp4: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy-downsized-small.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
        },

        downsized_still: {
          height: 500,

          width: 500,

          size: "718346",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
        },

        fixed_height: {
          height: 200,

          width: 200,

          size: "220927",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.gif&ct=g",

          mp4_size: "65058",

          mp4: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.mp4&ct=g",

          webp_size: "177308",

          webp: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.webp&ct=g",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 200,

          size: "17265",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.gif&ct=g",

          webp_size: "16348",

          webp: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
        },

        fixed_height_small: {
          height: 100,

          width: 100,

          size: "97947",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/100.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.gif&ct=g",

          mp4_size: "27370",

          mp4: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/100.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.mp4&ct=g",

          webp_size: "76870",

          webp: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/100.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.webp&ct=g",
        },

        fixed_height_small_still: {
          height: 100,

          width: 100,

          size: "3034",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/100_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
        },

        fixed_height_still: {
          height: 200,

          width: 200,

          size: "6033",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
        },

        fixed_width: {
          height: 200,

          width: 200,

          size: "220927",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.gif&ct=g",

          mp4_size: "65058",

          mp4: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.mp4&ct=g",

          webp_size: "177308",

          webp: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.webp&ct=g",
        },

        fixed_width_downsampled: {
          height: 200,

          width: 200,

          size: "17265",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200w_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",

          webp_size: "16348",

          webp: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200w_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
        },

        fixed_width_small: {
          height: 100,

          width: 100,

          size: "97947",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/100w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.gif&ct=g",

          mp4_size: "27370",

          mp4: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/100w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.mp4&ct=g",

          webp_size: "76870",

          webp: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/100w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.webp&ct=g",
        },

        fixed_width_small_still: {
          height: 100,

          width: 100,

          size: "3034",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/100w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
        },

        fixed_width_still: {
          height: 200,

          width: 200,

          size: "6033",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/200w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
        },

        looping: {
          mp4_size: "319546",

          mp4: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy-loop.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 500,

          width: 500,

          size: "20843",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
        },

        original_mp4: {
          height: 480,

          width: 480,

          mp4_size: "157192",

          mp4: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
        },

        preview: {
          height: 500,

          width: 500,

          mp4_size: "29669",

          mp4: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy-preview.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
        },

        preview_gif: {
          height: 156,

          width: 156,

          size: "49050",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy-preview.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
        },

        preview_webp: {
          height: 390,

          width: 390,

          size: "49674",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/giphy-preview.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
        },

        "480w_still": {
          height: 480,

          width: 480,

          size: "718346",

          url: "https://media2.giphy.com/media/8hsxi1ERBMZxV3dAuU/480w_s.jpg?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
        },
      },

      user: {
        avatar_url:
          "https://media4.giphy.com/avatars/sendwishonline/8uhC1FBVomz8.jpg",

        banner_image:
          "https://media4.giphy.com/channel_assets/sendwishonline/N38Jy8NvOEwN.png",

        banner_url:
          "https://media4.giphy.com/channel_assets/sendwishonline/N38Jy8NvOEwN.png",

        profile_url: "https://giphy.com/sendwishonline/",

        username: "sendwishonline",

        display_name: "sendwishonline.com",

        description:
          "Send Wish Online is a digital platform for creating group greeting cards that can be signed by multiple people. Group eCards are an online replacement of greeting cards passed around the office for signatures. We have over 5,000 digital card designs perfect for occasions like birthdays, farewells, holidays, and many more. We help remote businesses stay connected with their employees and customers. Group greeting cards are a great way to make your colleagues feel appreciated. Imagine someone receiving a digital greeting card signed by the whole team! \r\n" +
          "\r\n" +
          "Group cards are free to use, but we offer premium cards for business users. Visit our website for more information.",

        instagram_url: "https://instagram.com/sendwishonline",

        website_url: "http://sendwishonline.com/",

        is_verified: false,

        suppress_chrome: false,

        is_public: false,
      },

      analytics_response_payload:
        "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9OGhzeGkxRVJCTVp4VjNkQXVVJmN0PWc",

      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9OGhzeGkxRVJCTVp4VjNkQXVVJmN0PWc&action_type=SEEN",
        },

        onclick: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9OGhzeGkxRVJCTVp4VjNkQXVVJmN0PWc&action_type=CLICK",
        },

        onsent: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9OGhzeGkxRVJCTVp4VjNkQXVVJmN0PWc&action_type=SENT",
        },
      },

      alt_text:
        'Digital illustration gif. Pink fluffy pillow with a cute smiley face, blushing cheeks, legs, and arms bobs up and down with eyes closed, surrounded by stars. Text, "Good night, sleep tight."',

      tags: [],

      bottle_data: {},

      response_id: "1nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },

    {
      type: "gif",

      id: "xwVoIQsPhkXh8NUp5E",

      url: "https://giphy.com/gifs/nba-minnesota-timberwolves-anthony-edwards-ant-xwVoIQsPhkXh8NUp5E",

      slug: "nba-minnesota-timberwolves-anthony-edwards-ant-xwVoIQsPhkXh8NUp5E",

      bitly_gif_url: "https://gph.is/g/Z7RxJQp",

      bitly_url: "https://gph.is/g/Z7RxJQp",

      embed_url: "https://giphy.com/embed/xwVoIQsPhkXh8NUp5E",

      username: "nba",

      source: "",

      title: "Nba Playoffs Win GIF by NBA",

      rating: "g",

      content_url: "",

      source_tld: "",

      source_post_url: "",

      is_sticker: false,

      import_datetime: "2024-05-07 19:19:36",

      trending_datetime: "2024-05-08 03:06:09",

      images: {
        original: {
          height: 480,

          width: 480,

          size: "5887413",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",

          mp4_size: "847692",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",

          webp_size: "1461912",

          webp: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.webp&ct=g",

          frames: "52",

          hash: "836b0c806541ca011f1ebe1b823ba79b",
        },

        downsized: {
          height: 258,

          width: 258,

          size: "1343562",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy-downsized.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
        },

        downsized_large: {
          height: 480,

          width: 480,

          size: "5887413",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        },

        downsized_medium: {
          height: 480,

          width: 480,

          size: "4152998",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy-downsized-medium.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-medium.gif&ct=g",
        },

        downsized_small: {
          height: 232,

          width: 232,

          mp4_size: "196560",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy-downsized-small.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
        },

        downsized_still: {
          height: 258,

          width: 258,

          size: "26810",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy-downsized_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized_s.gif&ct=g",
        },

        fixed_height: {
          height: 200,

          width: 200,

          size: "1047816",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.gif&ct=g",

          mp4_size: "313090",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.mp4&ct=g",

          webp_size: "579798",

          webp: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.webp&ct=g",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 200,

          size: "124578",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.gif&ct=g",

          webp_size: "77490",

          webp: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
        },

        fixed_height_small: {
          height: 100,

          width: 100,

          size: "327098",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/100.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.gif&ct=g",

          mp4_size: "147827",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/100.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.mp4&ct=g",

          webp_size: "224756",

          webp: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/100.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.webp&ct=g",
        },

        fixed_height_small_still: {
          height: 100,

          width: 100,

          size: "7083",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/100_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
        },

        fixed_height_still: {
          height: 200,

          width: 200,

          size: "20903",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
        },

        fixed_width: {
          height: 200,

          width: 200,

          size: "1047816",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.gif&ct=g",

          mp4_size: "313090",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.mp4&ct=g",

          webp_size: "579798",

          webp: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.webp&ct=g",
        },

        fixed_width_downsampled: {
          height: 200,

          width: 200,

          size: "124578",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200w_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",

          webp_size: "77490",

          webp: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200w_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
        },

        fixed_width_small: {
          height: 100,

          width: 100,

          size: "327098",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/100w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.gif&ct=g",

          mp4_size: "48805",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/100w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.mp4&ct=g",

          webp_size: "224756",

          webp: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/100w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.webp&ct=g",
        },

        fixed_width_small_still: {
          height: 100,

          width: 100,

          size: "7083",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/100w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
        },

        fixed_width_still: {
          height: 200,

          width: 200,

          size: "20903",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/200w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
        },

        looping: {
          mp4_size: "3369093",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy-loop.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 480,

          width: 480,

          size: "109397",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
        },

        original_mp4: {
          height: 480,

          width: 480,

          mp4_size: "847692",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
        },

        preview: {
          height: 228,

          width: 228,

          mp4_size: "42281",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy-preview.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
        },

        preview_gif: {
          height: 64,

          width: 64,

          size: "48077",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy-preview.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
        },

        preview_webp: {
          height: 110,

          width: 110,

          size: "47252",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy-preview.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
        },

        hd: {
          height: 1080,

          width: 1080,

          mp4_size: "2958495",

          mp4: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/giphy-hd.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-hd.mp4&ct=g",
        },

        "480w_still": {
          height: 480,

          width: 480,

          size: "5887413",

          url: "https://media1.giphy.com/media/xwVoIQsPhkXh8NUp5E/480w_s.jpg?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
        },
      },

      user: {
        avatar_url: "https://media4.giphy.com/avatars/nba/Xj1SHRuXj9YA.jpg",

        banner_image:
          "https://media4.giphy.com/channel_assets/nba/NFir0YzR4xTg.GIF",

        banner_url:
          "https://media4.giphy.com/channel_assets/nba/NFir0YzR4xTg.GIF",

        profile_url: "https://giphy.com/nba/",

        username: "nba",

        display_name: "NBA",

        description:
          "This is the official NBA channel on GIPHY. All of the basketball GIFS!!",

        instagram_url: "https://instagram.com/nba",

        website_url: "https://app.link.nba.com/oChqS3Gq0Db",

        is_verified: true,

        suppress_chrome: false,

        is_public: false,
      },

      analytics_response_payload:
        "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9eHdWb0lRc1Boa1hoOE5VcDVFJmN0PWc",

      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9eHdWb0lRc1Boa1hoOE5VcDVFJmN0PWc&action_type=SEEN",
        },

        onclick: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9eHdWb0lRc1Boa1hoOE5VcDVFJmN0PWc&action_type=CLICK",
        },

        onsent: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9eHdWb0lRc1Boa1hoOE5VcDVFJmN0PWc&action_type=SENT",
        },
      },

      alt_text: "",

      tags: [],

      bottle_data: {},

      response_id: "1nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },

    {
      type: "gif",

      id: "ttOdeEMYD0gRde5I14",

      url: "https://giphy.com/gifs/helloall-birthday-happy-month-ttOdeEMYD0gRde5I14",

      slug: "helloall-birthday-happy-month-ttOdeEMYD0gRde5I14",

      bitly_gif_url: "https://gph.is/g/4LL2g70",

      bitly_url: "https://gph.is/g/4LL2g70",

      embed_url: "https://giphy.com/embed/ttOdeEMYD0gRde5I14",

      username: "helloall",

      source: "",

      title: "Happy Birthday GIF by Hello All",

      rating: "g",

      content_url: "",

      source_tld: "",

      source_post_url: "",

      is_sticker: false,

      import_datetime: "2021-07-07 21:23:16",

      trending_datetime: "2021-07-27 05:15:07",

      images: {
        original: {
          height: 480,

          width: 480,

          size: "4700940",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",

          mp4_size: "821814",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",

          webp_size: "1668372",

          webp: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.webp&ct=g",

          frames: "68",

          hash: "c40c45a82d36f9b0f9f54882dcd7b2f8",
        },

        downsized: {
          height: 384,

          width: 384,

          size: "1373468",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy-downsized.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
        },

        downsized_large: {
          height: 480,

          width: 480,

          size: "4700940",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        },

        downsized_medium: {
          height: 480,

          width: 480,

          size: "3020635",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy-downsized-medium.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-medium.gif&ct=g",
        },

        downsized_small: {
          height: 218,

          width: 218,

          mp4_size: "114581",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy-downsized-small.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
        },

        downsized_still: {
          height: 384,

          width: 384,

          size: "26564",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy-downsized_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized_s.gif&ct=g",
        },

        fixed_height: {
          height: 200,

          width: 200,

          size: "755391",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.gif&ct=g",

          mp4_size: "175206",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.mp4&ct=g",

          webp_size: "362212",

          webp: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.webp&ct=g",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 200,

          size: "75498",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.gif&ct=g",

          webp_size: "49292",

          webp: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
        },

        fixed_height_small: {
          height: 100,

          width: 100,

          size: "253889",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/100.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.gif&ct=g",

          mp4_size: "59838",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/100.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.mp4&ct=g",

          webp_size: "143348",

          webp: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/100.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.webp&ct=g",
        },

        fixed_height_small_still: {
          height: 100,

          width: 100,

          size: "4115",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/100_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
        },

        fixed_height_still: {
          height: 200,

          width: 200,

          size: "13800",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
        },

        fixed_width: {
          height: 200,

          width: 200,

          size: "755391",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.gif&ct=g",

          mp4_size: "175206",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.mp4&ct=g",

          webp_size: "362212",

          webp: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.webp&ct=g",
        },

        fixed_width_downsampled: {
          height: 200,

          width: 200,

          size: "75498",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200w_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",

          webp_size: "49292",

          webp: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200w_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
        },

        fixed_width_small: {
          height: 100,

          width: 100,

          size: "253889",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/100w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.gif&ct=g",

          mp4_size: "49638",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/100w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.mp4&ct=g",

          webp_size: "143348",

          webp: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/100w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.webp&ct=g",
        },

        fixed_width_small_still: {
          height: 100,

          width: 100,

          size: "4115",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/100w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
        },

        fixed_width_still: {
          height: 200,

          width: 200,

          size: "13800",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/200w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
        },

        looping: {
          mp4_size: "2834628",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy-loop.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 480,

          width: 480,

          size: "131923",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
        },

        original_mp4: {
          height: 480,

          width: 480,

          mp4_size: "821814",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
        },

        preview: {
          height: 258,

          width: 258,

          mp4_size: "45511",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy-preview.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
        },

        preview_gif: {
          height: 102,

          width: 102,

          size: "48843",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy-preview.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
        },

        preview_webp: {
          height: 222,

          width: 222,

          size: "35542",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy-preview.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
        },

        hd: {
          height: 1080,

          width: 1080,

          mp4_size: "10828355",

          mp4: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/giphy-hd.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-hd.mp4&ct=g",
        },

        "480w_still": {
          height: 480,

          width: 480,

          size: "4700940",

          url: "https://media3.giphy.com/media/ttOdeEMYD0gRde5I14/480w_s.jpg?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
        },
      },

      user: {
        avatar_url:
          "https://media4.giphy.com/avatars/helloall/hGrSqJDMUajv.gif",

        banner_image:
          "https://media4.giphy.com/headers/helloall/YF5eJMrkcjmM.gif",

        banner_url:
          "https://media4.giphy.com/headers/helloall/YF5eJMrkcjmM.gif",

        profile_url: "https://giphy.com/helloall/",

        username: "helloall",

        display_name: "Hello All",

        description:
          "Hello All is an initiative to bring diversity and representation into conversational content.",

        instagram_url: "https://instagram.com/HelloAllArt",

        website_url: "https://helloall.co",

        is_verified: true,

        suppress_chrome: false,

        is_public: false,
      },

      analytics_response_payload:
        "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9dHRPZGVFTVlEMGdSZGU1STE0JmN0PWc",

      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9dHRPZGVFTVlEMGdSZGU1STE0JmN0PWc&action_type=SEEN",
        },

        onclick: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9dHRPZGVFTVlEMGdSZGU1STE0JmN0PWc&action_type=CLICK",
        },

        onsent: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9dHRPZGVFTVlEMGdSZGU1STE0JmN0PWc&action_type=SENT",
        },
      },

      alt_text: "",

      tags: [],

      bottle_data: {},

      response_id: "1nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },

    {
      type: "gif",

      id: "QGOpDvtp6we3e",

      url: "https://giphy.com/gifs/funny-avalanche-seor-QGOpDvtp6we3e",

      slug: "funny-avalanche-seor-QGOpDvtp6we3e",

      bitly_gif_url: "http://gph.is/2rqgCTd",

      bitly_url: "http://gph.is/2rqgCTd",

      embed_url: "https://giphy.com/embed/QGOpDvtp6we3e",

      username: "",

      source: "http://cheezburger.com/7986533888",

      title: "Avalanche GIF",

      rating: "g",

      content_url: "",

      source_tld: "cheezburger.com",

      source_post_url: "http://cheezburger.com/7986533888",

      is_sticker: false,

      import_datetime: "2017-06-13 08:12:22",

      trending_datetime: "0000-00-00 00:00:00",

      images: {
        original: {
          height: 247,

          width: 440,

          size: "6754491",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",

          mp4_size: "709082",

          mp4: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",

          webp_size: "3160022",

          webp: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.webp&ct=g",

          frames: "140",

          hash: "49afb82805a41554cf2f9e3327d6eb8d",
        },

        downsized: {
          height: 140,

          width: 250,

          size: "1090611",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy-downsized.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
        },

        downsized_large: {
          height: 247,

          width: 440,

          size: "6754491",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        },

        downsized_medium: {
          height: 247,

          width: 440,

          size: "3418560",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy-downsized-medium.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-medium.gif&ct=g",
        },

        downsized_small: {
          height: 120,

          width: 214,

          mp4_size: "77272",

          mp4: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy-downsized-small.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
        },

        downsized_still: {
          height: 140,

          width: 250,

          size: "26043",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy-downsized_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized_s.gif&ct=g",
        },

        fixed_height: {
          height: 200,

          width: 356,

          size: "4092562",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/200.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.gif&ct=g",

          mp4_size: "387189",

          mp4: "https://media4.giphy.com/media/QGOpDvtp6we3e/200.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.mp4&ct=g",

          webp_size: "1991544",

          webp: "https://media4.giphy.com/media/QGOpDvtp6we3e/200.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.webp&ct=g",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 356,

          size: "257164",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/200_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.gif&ct=g",

          webp_size: "96398",

          webp: "https://media4.giphy.com/media/QGOpDvtp6we3e/200_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
        },

        fixed_height_small: {
          height: 100,

          width: 178,

          size: "1073427",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/100.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.gif&ct=g",

          mp4_size: "107879",

          mp4: "https://media4.giphy.com/media/QGOpDvtp6we3e/100.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.mp4&ct=g",

          webp_size: "624500",

          webp: "https://media4.giphy.com/media/QGOpDvtp6we3e/100.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.webp&ct=g",
        },

        fixed_height_small_still: {
          height: 100,

          width: 178,

          size: "12974",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/100_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
        },

        fixed_height_still: {
          height: 200,

          width: 356,

          size: "46159",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/200_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
        },

        fixed_width: {
          height: 112,

          width: 200,

          size: "1225794",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/200w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.gif&ct=g",

          mp4_size: "125631",

          mp4: "https://media4.giphy.com/media/QGOpDvtp6we3e/200w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.mp4&ct=g",

          webp_size: "732776",

          webp: "https://media4.giphy.com/media/QGOpDvtp6we3e/200w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.webp&ct=g",
        },

        fixed_width_downsampled: {
          height: 112,

          width: 200,

          size: "82693",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/200w_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",

          webp_size: "35436",

          webp: "https://media4.giphy.com/media/QGOpDvtp6we3e/200w_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
        },

        fixed_width_small: {
          height: 56,

          width: 100,

          size: "387226",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/100w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.gif&ct=g",

          mp4_size: "38888",

          mp4: "https://media4.giphy.com/media/QGOpDvtp6we3e/100w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.mp4&ct=g",

          webp_size: "231280",

          webp: "https://media4.giphy.com/media/QGOpDvtp6we3e/100w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.webp&ct=g",
        },

        fixed_width_small_still: {
          height: 56,

          width: 100,

          size: "5124",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/100w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
        },

        fixed_width_still: {
          height: 112,

          width: 200,

          size: "15279",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/200w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
        },

        looping: {
          mp4_size: "1939532",

          mp4: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy-loop.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 247,

          width: 440,

          size: "69356",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
        },

        original_mp4: {
          height: 268,

          width: 480,

          mp4_size: "709082",

          mp4: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
        },

        preview: {
          height: 172,

          width: 307,

          mp4_size: "24419",

          mp4: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy-preview.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
        },

        preview_gif: {
          height: 87,

          width: 155,

          size: "47055",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy-preview.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
        },

        preview_webp: {
          height: 91,

          width: 162,

          size: "48792",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/giphy-preview.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
        },

        "480w_still": {
          height: 269,

          width: 480,

          size: "6754491",

          url: "https://media4.giphy.com/media/QGOpDvtp6we3e/480w_s.jpg?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
        },
      },

      analytics_response_payload:
        "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9UUdPcER2dHA2d2UzZSZjdD1n",

      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9UUdPcER2dHA2d2UzZSZjdD1n&action_type=SEEN",
        },

        onclick: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9UUdPcER2dHA2d2UzZSZjdD1n&action_type=CLICK",
        },

        onsent: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9UUdPcER2dHA2d2UzZSZjdD1n&action_type=SENT",
        },
      },

      alt_text: "",

      tags: [],

      bottle_data: {},

      response_id: "1nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },

    {
      type: "gif",

      id: "5dYbT8yNjS23ZLWzhd",

      url: "https://giphy.com/gifs/kitten-goodnight-tuck-in-5dYbT8yNjS23ZLWzhd",

      slug: "kitten-goodnight-tuck-in-5dYbT8yNjS23ZLWzhd",

      bitly_gif_url: "https://gph.is/2v9ZMNf",

      bitly_url: "https://gph.is/2v9ZMNf",

      embed_url: "https://giphy.com/embed/5dYbT8yNjS23ZLWzhd",

      username: "",

      source: "https://media.giphy.com/media/uDZyn9bHWzgOY/giphy.gif",

      title: "Kitten Tuck In GIF by MOODMAN",

      rating: "g",

      content_url: "",

      source_tld: "media.giphy.com",

      source_post_url: "https://media.giphy.com/media/uDZyn9bHWzgOY/giphy.gif",

      is_sticker: false,

      import_datetime: "2018-08-02 00:38:34",

      trending_datetime: "2020-07-28 06:25:27",

      images: {
        original: {
          height: 480,

          width: 480,

          size: "19986219",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",

          mp4_size: "4904929",

          mp4: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",

          webp_size: "7774724",

          webp: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.webp&ct=g",

          frames: "143",

          hash: "19d9a257d75260d4511d014008429901",
        },

        downsized: {
          height: 240,

          width: 240,

          size: "1314163",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy-downsized.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
        },

        downsized_large: {
          height: 384,

          width: 384,

          size: "6103814",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy-downsized-large.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-large.gif&ct=g",
        },

        downsized_medium: {
          height: 331,

          width: 331,

          size: "3362273",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy-downsized-medium.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-medium.gif&ct=g",
        },

        downsized_small: {
          height: 152,

          width: 152,

          mp4_size: "161935",

          mp4: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy-downsized-small.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
        },

        downsized_still: {
          height: 240,

          width: 240,

          size: "21641",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy-downsized_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized_s.gif&ct=g",
        },

        fixed_height: {
          height: 200,

          width: 200,

          size: "2768835",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.gif&ct=g",

          mp4_size: "540242",

          mp4: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.mp4&ct=g",

          webp_size: "1480442",

          webp: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.webp&ct=g",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 200,

          size: "134667",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.gif&ct=g",

          webp_size: "79140",

          webp: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
        },

        fixed_height_small: {
          height: 100,

          width: 100,

          size: "854048",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/100.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.gif&ct=g",

          mp4_size: "151075",

          mp4: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/100.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.mp4&ct=g",

          webp_size: "471974",

          webp: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/100.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.webp&ct=g",
        },

        fixed_height_small_still: {
          height: 100,

          width: 100,

          size: "6872",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/100_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
        },

        fixed_height_still: {
          height: 200,

          width: 200,

          size: "20492",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
        },

        fixed_width: {
          height: 200,

          width: 200,

          size: "2768835",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.gif&ct=g",

          mp4_size: "540242",

          mp4: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.mp4&ct=g",

          webp_size: "1480442",

          webp: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.webp&ct=g",
        },

        fixed_width_downsampled: {
          height: 200,

          width: 200,

          size: "134667",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200w_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",

          webp_size: "79140",

          webp: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200w_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
        },

        fixed_width_small: {
          height: 100,

          width: 100,

          size: "854048",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/100w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.gif&ct=g",

          mp4_size: "43771",

          mp4: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/100w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.mp4&ct=g",

          webp_size: "471974",

          webp: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/100w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.webp&ct=g",
        },

        fixed_width_small_still: {
          height: 100,

          width: 100,

          size: "6872",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/100w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
        },

        fixed_width_still: {
          height: 200,

          width: 200,

          size: "20492",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/200w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
        },

        looping: {
          mp4_size: "7163076",

          mp4: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy-loop.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 480,

          width: 480,

          size: "136145",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
        },

        original_mp4: {
          height: 480,

          width: 480,

          mp4_size: "4904929",

          mp4: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
        },

        preview: {
          height: 160,

          width: 160,

          mp4_size: "36224",

          mp4: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy-preview.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
        },

        preview_gif: {
          height: 76,

          width: 76,

          size: "49717",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy-preview.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
        },

        preview_webp: {
          height: 88,

          width: 88,

          size: "24158",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/giphy-preview.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
        },

        "480w_still": {
          height: 480,

          width: 480,

          size: "19986219",

          url: "https://media4.giphy.com/media/5dYbT8yNjS23ZLWzhd/480w_s.jpg?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
        },
      },

      analytics_response_payload:
        "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9NWRZYlQ4eU5qUzIzWkxXemhkJmN0PWc",

      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9NWRZYlQ4eU5qUzIzWkxXemhkJmN0PWc&action_type=SEEN",
        },

        onclick: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9NWRZYlQ4eU5qUzIzWkxXemhkJmN0PWc&action_type=CLICK",
        },

        onsent: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9NWRZYlQ4eU5qUzIzWkxXemhkJmN0PWc&action_type=SENT",
        },
      },

      alt_text:
        "Video gif. Overhead view of a tiny orange and white kitten getting tucked in under a striped towel and pillow, raising its little pink paws in the air as someone scratches its forehead with a long blue fingernail. Text, \"Goodnight!'",

      tags: [],

      bottle_data: {},

      response_id: "1nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },

    {
      type: "gif",

      id: "VIKa3CjZDCoymNcBY5",

      url: "https://giphy.com/gifs/sesamestreet-sesame-street-cookie-monster-VIKa3CjZDCoymNcBY5",

      slug: "sesamestreet-sesame-street-cookie-monster-VIKa3CjZDCoymNcBY5",

      bitly_gif_url: "https://gph.is/g/4bpWNNj",

      bitly_url: "https://gph.is/g/4bpWNNj",

      embed_url: "https://giphy.com/embed/VIKa3CjZDCoymNcBY5",

      username: "sesamestreet",

      source: "",

      title: "I Love You GIF by Sesame Street",

      rating: "g",

      content_url: "",

      source_tld: "",

      source_post_url: "",

      is_sticker: false,

      import_datetime: "2024-03-13 16:11:12",

      trending_datetime: "0000-00-00 00:00:00",

      images: {
        original: {
          height: 360,

          width: 480,

          size: "2615869",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",

          mp4_size: "727770",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",

          webp_size: "915098",

          webp: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.webp&ct=g",

          frames: "67",

          hash: "9947d7192f5aefe83206b447b262a5d1",
        },

        downsized: {
          height: 360,

          width: 480,

          size: "1674513",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy-downsized.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
        },

        downsized_large: {
          height: 360,

          width: 480,

          size: "2615869",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        },

        downsized_medium: {
          height: 360,

          width: 480,

          size: "2615869",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        },

        downsized_small: {
          height: 186,

          width: 248,

          mp4_size: "115401",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy-downsized-small.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
        },

        downsized_still: {
          height: 360,

          width: 480,

          size: "25385",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy-downsized_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-downsized_s.gif&ct=g",
        },

        fixed_height: {
          height: 200,

          width: 267,

          size: "737199",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.gif&ct=g",

          mp4_size: "270598",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.mp4&ct=g",

          webp_size: "400318",

          webp: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200.webp&ct=g",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 267,

          size: "67760",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.gif&ct=g",

          webp_size: "38686",

          webp: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
        },

        fixed_height_small: {
          height: 100,

          width: 134,

          size: "226459",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/100.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.gif&ct=g",

          mp4_size: "92873",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/100.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.mp4&ct=g",

          webp_size: "139562",

          webp: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/100.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100.webp&ct=g",
        },

        fixed_height_small_still: {
          height: 100,

          width: 134,

          size: "3934",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/100_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
        },

        fixed_height_still: {
          height: 200,

          width: 267,

          size: "14082",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
        },

        fixed_width: {
          height: 150,

          width: 200,

          size: "434603",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.gif&ct=g",

          mp4_size: "175554",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.mp4&ct=g",

          webp_size: "257330",

          webp: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w.webp&ct=g",
        },

        fixed_width_downsampled: {
          height: 150,

          width: 200,

          size: "42391",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200w_d.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",

          webp_size: "24094",

          webp: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200w_d.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
        },

        fixed_width_small: {
          height: 75,

          width: 100,

          size: "141019",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/100w.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.gif&ct=g",

          mp4_size: "49914",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/100w.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.mp4&ct=g",

          webp_size: "92308",

          webp: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/100w.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w.webp&ct=g",
        },

        fixed_width_small_still: {
          height: 75,

          width: 100,

          size: "2853",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/100w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
        },

        fixed_width_still: {
          height: 150,

          width: 200,

          size: "7657",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/200w_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
        },

        looping: {
          mp4_size: "2266158",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy-loop.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 360,

          width: 480,

          size: "39076",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy_s.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
        },

        original_mp4: {
          height: 360,

          width: 480,

          mp4_size: "727770",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
        },

        preview: {
          height: 200,

          width: 266,

          mp4_size: "46410",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy-preview.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
        },

        preview_gif: {
          height: 101,

          width: 135,

          size: "47583",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy-preview.gif?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
        },

        preview_webp: {
          height: 200,

          width: 266,

          size: "43556",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy-preview.webp?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
        },

        hd: {
          height: 1312,

          width: 1750,

          mp4_size: "5175728",

          mp4: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy-hd.mp4?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=giphy-hd.mp4&ct=g",
        },

        "480w_still": {
          height: 360,

          width: 480,

          size: "2615869",

          url: "https://media1.giphy.com/media/VIKa3CjZDCoymNcBY5/480w_s.jpg?cid=d3dc06b81nclbmpbm14wpemvqmyattks9lazhrm9th2nvgis&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
        },
      },

      user: {
        avatar_url:
          "https://media4.giphy.com/avatars/sesamestreet/gHHZmwAIT6MH.png",

        banner_image:
          "https://media4.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",

        banner_url:
          "https://media4.giphy.com/headers/sesamestreet/rY1amQ9t9bt0.png",

        profile_url: "https://giphy.com/sesamestreet/",

        username: "sesamestreet",

        display_name: "Sesame Street",

        description:
          "Our nonprofit’s mission is to help kids grow smarter, stronger, kinder – in more than 150 countries around the world!",

        instagram_url: "https://instagram.com/SesameStreet",

        website_url: "http://sesamestreet.org",

        is_verified: true,

        suppress_chrome: false,

        is_public: false,
      },

      analytics_response_payload:
        "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9VklLYTNDalpEQ295bU5jQlk1JmN0PWc",

      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPWQzZGMwNmI4MW5jbGJtcGJtMTR3cGVtdnFteWF0dGtzOWxhemhybTl0aDJudmdpcyZnaWZfaWQ9VklLYTNDalpEQ295bU5jQlk1JmN0PWc&action_type=SEEN",
        },

        onclick: { url: " ... (length: 245)" },

        onsent: { url: " ... (length: 244)" },
      },

      alt_text: "",

      tags: [],

      bottle_data: {},

      response_id: " ... (length: 40)",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },

    {
      type: " ... (length: 3)",

      id: " ... (length: 18)",

      url: " ... (length: 76)",

      slug: " ... (length: 53)",

      bitly_gif_url: " ... (length: 24)",

      bitly_url: " ... (length: 24)",

      embed_url: " ... (length: 42)",

      username: " ... (length: 16)",

      source: "",

      title: " ... (length: 54)",

      rating: " ... (length: 1)",

      content_url: "",

      source_tld: "",

      source_post_url: "",

      is_sticker: false,

      import_datetime: " ... (length: 19)",

      trending_datetime: " ... (length: 19)",

      images: {
        original: {
          height: 512,

          width: 512,

          size: " ... (length: 7)",

          url: " ... (length: 151)",

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 151)",

          webp_size: " ... (length: 6)",

          webp: " ... (length: 153)",

          frames: " ... (length: 3)",

          hash: " ... (length: 32)",
        },

        downsized: {
          height: 512,

          width: 512,

          size: " ... (length: 7)",

          url: " ... (length: 151)",
        },

        downsized_large: {
          height: 512,

          width: 512,

          size: " ... (length: 7)",

          url: " ... (length: 151)",
        },

        downsized_medium: {
          height: 512,

          width: 512,

          size: " ... (length: 7)",

          url: " ... (length: 151)",
        },

        downsized_small: {
          height: 344,

          width: 344,

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 183)",
        },

        downsized_still: {
          height: 512,

          width: 512,

          size: " ... (length: 7)",

          url: " ... (length: 155)",
        },

        fixed_height: {
          height: 200,

          width: 200,

          size: " ... (length: 6)",

          url: " ... (length: 147)",

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 147)",

          webp_size: " ... (length: 6)",

          webp: " ... (length: 149)",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 200,

          size: " ... (length: 5)",

          url: " ... (length: 151)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 153)",
        },

        fixed_height_small: {
          height: 100,

          width: 100,

          size: " ... (length: 6)",

          url: " ... (length: 147)",

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 147)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 149)",
        },

        fixed_height_small_still: {
          height: 100,

          width: 100,

          size: " ... (length: 4)",

          url: " ... (length: 151)",
        },

        fixed_height_still: {
          height: 200,

          width: 200,

          size: " ... (length: 4)",

          url: " ... (length: 151)",
        },

        fixed_width: {
          height: 200,

          width: 200,

          size: " ... (length: 6)",

          url: " ... (length: 149)",

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 149)",

          webp_size: " ... (length: 6)",

          webp: " ... (length: 151)",
        },

        fixed_width_downsampled: {
          height: 200,

          width: 200,

          size: " ... (length: 5)",

          url: " ... (length: 153)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 155)",
        },

        fixed_width_small: {
          height: 100,

          width: 100,

          size: " ... (length: 6)",

          url: " ... (length: 149)",

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 149)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 151)",
        },

        fixed_width_small_still: {
          height: 100,

          width: 100,

          size: " ... (length: 4)",

          url: " ... (length: 153)",
        },

        fixed_width_still: {
          height: 200,

          width: 200,

          size: " ... (length: 4)",

          url: " ... (length: 153)",
        },

        looping: {
          mp4_size: " ... (length: 7)",

          mp4: " ... (length: 161)",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 512,

          width: 512,

          size: " ... (length: 5)",

          url: " ... (length: 155)",
        },

        original_mp4: {
          height: 480,

          width: 480,

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 151)",
        },

        preview: {
          height: 408,

          width: 408,

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 167)",
        },

        preview_gif: {
          height: 152,

          width: 152,

          size: " ... (length: 5)",

          url: " ... (length: 167)",
        },

        preview_webp: {
          height: 232,

          width: 232,

          size: " ... (length: 5)",

          url: " ... (length: 169)",
        },

        "480w_still": {
          height: 480,

          width: 480,

          size: " ... (length: 7)",

          url: " ... (length: 153)",
        },
      },

      user: {
        avatar_url: " ... (length: 66)",

        banner_image: " ... (length: 73)",

        banner_url: " ... (length: 73)",

        profile_url: " ... (length: 35)",

        username: " ... (length: 16)",

        display_name: " ... (length: 7)",

        description: " ... (length: 24)",

        instagram_url: " ... (length: 33)",

        website_url: " ... (length: 29)",

        is_verified: false,

        suppress_chrome: false,

        is_public: false,
      },

      analytics_response_payload: " ... (length: 145)",

      analytics: {
        onload: { url: " ... (length: 244)" },

        onclick: { url: " ... (length: 245)" },

        onsent: { url: " ... (length: 244)" },
      },

      alt_text: " ... (length: 254)",

      tags: [],

      bottle_data: {},

      response_id: " ... (length: 40)",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },

    {
      type: " ... (length: 3)",

      id: " ... (length: 13)",

      url: " ... (length: 43)",

      slug: " ... (length: 20)",

      bitly_gif_url: " ... (length: 21)",

      bitly_url: " ... (length: 21)",

      embed_url: " ... (length: 37)",

      username: "",

      source: " ... (length: 49)",

      title: " ... (length: 16)",

      rating: " ... (length: 1)",

      content_url: "",

      source_tld: " ... (length: 19)",

      source_post_url: " ... (length: 49)",

      is_sticker: false,

      import_datetime: " ... (length: 19)",

      trending_datetime: " ... (length: 19)",

      images: {
        original: {
          height: 256,

          width: 198,

          size: " ... (length: 5)",

          url: " ... (length: 146)",

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 146)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 148)",

          frames: " ... (length: 1)",

          hash: " ... (length: 32)",
        },

        downsized: {
          height: 256,

          width: 198,

          size: " ... (length: 5)",

          url: " ... (length: 146)",
        },

        downsized_large: {
          height: 256,

          width: 198,

          size: " ... (length: 5)",

          url: " ... (length: 146)",
        },

        downsized_medium: {
          height: 256,

          width: 198,

          size: " ... (length: 5)",

          url: " ... (length: 146)",
        },

        downsized_small: {
          height: 256,

          width: 198,

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 178)",
        },

        downsized_still: {
          height: 256,

          width: 198,

          size: " ... (length: 5)",

          url: " ... (length: 150)",
        },

        fixed_height: {
          height: 200,

          width: 155,

          size: " ... (length: 5)",

          url: " ... (length: 142)",

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 142)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 144)",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 155,

          size: " ... (length: 5)",

          url: " ... (length: 146)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 148)",
        },

        fixed_height_small: {
          height: 100,

          width: 78,

          size: " ... (length: 4)",

          url: " ... (length: 142)",

          mp4_size: " ... (length: 4)",

          mp4: " ... (length: 142)",

          webp_size: " ... (length: 4)",

          webp: " ... (length: 144)",
        },

        fixed_height_small_still: {
          height: 100,

          width: 78,

          size: " ... (length: 4)",

          url: " ... (length: 146)",
        },

        fixed_height_still: {
          height: 200,

          width: 155,

          size: " ... (length: 4)",

          url: " ... (length: 146)",
        },

        fixed_width: {
          height: 259,

          width: 200,

          size: " ... (length: 5)",

          url: " ... (length: 144)",

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 144)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 146)",
        },

        fixed_width_downsampled: {
          height: 259,

          width: 200,

          size: " ... (length: 5)",

          url: " ... (length: 148)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 150)",
        },

        fixed_width_small: {
          height: 130,

          width: 100,

          size: " ... (length: 4)",

          url: " ... (length: 144)",

          mp4_size: " ... (length: 4)",

          mp4: " ... (length: 144)",

          webp_size: " ... (length: 4)",

          webp: " ... (length: 146)",
        },

        fixed_width_small_still: {
          height: 130,

          width: 100,

          size: " ... (length: 4)",

          url: " ... (length: 148)",
        },

        fixed_width_still: {
          height: 259,

          width: 200,

          size: " ... (length: 5)",

          url: " ... (length: 148)",
        },

        looping: {
          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 156)",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 256,

          width: 198,

          size: " ... (length: 5)",

          url: " ... (length: 150)",
        },

        original_mp4: {
          height: 620,

          width: 480,

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 146)",
        },

        preview: {
          height: 256,

          width: 198,

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 162)",
        },

        preview_gif: {
          height: 256,

          width: 198,

          size: " ... (length: 5)",

          url: " ... (length: 162)",
        },

        preview_webp: {
          height: 256,

          width: 198,

          size: " ... (length: 5)",

          url: " ... (length: 164)",
        },

        "480w_still": {
          height: 621,

          width: 480,

          size: " ... (length: 5)",

          url: " ... (length: 148)",
        },
      },

      analytics_response_payload: " ... (length: 138)",

      analytics: {
        onload: { url: " ... (length: 237)" },

        onclick: { url: " ... (length: 238)" },

        onsent: { url: " ... (length: 237)" },
      },

      alt_text: " ... (length: 197)",

      tags: [],

      bottle_data: {},

      response_id: " ... (length: 40)",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },

    {
      type: " ... (length: 3)",

      id: " ... (length: 18)",

      url: " ... (length: 65)",

      slug: " ... (length: 42)",

      bitly_gif_url: " ... (length: 24)",

      bitly_url: " ... (length: 24)",

      embed_url: " ... (length: 42)",

      username: " ... (length: 9)",

      source: "",

      title: " ... (length: 34)",

      rating: " ... (length: 1)",

      content_url: "",

      source_tld: "",

      source_post_url: "",

      is_sticker: false,

      import_datetime: " ... (length: 19)",

      trending_datetime: " ... (length: 19)",

      images: {
        original: {
          height: 480,

          width: 480,

          size: " ... (length: 6)",

          url: " ... (length: 151)",

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 151)",

          webp_size: " ... (length: 6)",

          webp: " ... (length: 153)",

          frames: " ... (length: 2)",

          hash: " ... (length: 32)",
        },

        downsized: {
          height: 480,

          width: 480,

          size: " ... (length: 6)",

          url: " ... (length: 151)",
        },

        downsized_large: {
          height: 480,

          width: 480,

          size: " ... (length: 6)",

          url: " ... (length: 151)",
        },

        downsized_medium: {
          height: 480,

          width: 480,

          size: " ... (length: 6)",

          url: " ... (length: 151)",
        },

        downsized_small: {
          height: 480,

          width: 480,

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 183)",
        },

        downsized_still: {
          height: 480,

          width: 480,

          size: " ... (length: 6)",

          url: " ... (length: 155)",
        },

        fixed_height: {
          height: 200,

          width: 200,

          size: " ... (length: 5)",

          url: " ... (length: 147)",

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 147)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 149)",
        },

        fixed_height_downsampled: {
          height: 200,

          width: 200,

          size: " ... (length: 5)",

          url: " ... (length: 151)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 153)",
        },

        fixed_height_small: {
          height: 100,

          width: 100,

          size: " ... (length: 5)",

          url: " ... (length: 147)",

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 147)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 149)",
        },

        fixed_height_small_still: {
          height: 100,

          width: 100,

          size: " ... (length: 4)",

          url: " ... (length: 151)",
        },

        fixed_height_still: {
          height: 200,

          width: 200,

          size: " ... (length: 4)",

          url: " ... (length: 151)",
        },

        fixed_width: {
          height: 200,

          width: 200,

          size: " ... (length: 5)",

          url: " ... (length: 149)",

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 149)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 151)",
        },

        fixed_width_downsampled: {
          height: 200,

          width: 200,

          size: " ... (length: 5)",

          url: " ... (length: 153)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 155)",
        },

        fixed_width_small: {
          height: 100,

          width: 100,

          size: " ... (length: 5)",

          url: " ... (length: 149)",

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 149)",

          webp_size: " ... (length: 5)",

          webp: " ... (length: 151)",
        },

        fixed_width_small_still: {
          height: 100,

          width: 100,

          size: " ... (length: 4)",

          url: " ... (length: 153)",
        },

        fixed_width_still: {
          height: 200,

          width: 200,

          size: " ... (length: 4)",

          url: " ... (length: 153)",
        },

        looping: {
          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 161)",

          width: NaN,

          height: NaN,
        },

        original_still: {
          height: 480,

          width: 480,

          size: " ... (length: 4)",

          url: " ... (length: 155)",
        },

        original_mp4: {
          height: 480,

          width: 480,

          mp4_size: " ... (length: 6)",

          mp4: " ... (length: 151)",
        },

        preview: {
          height: 480,

          width: 480,

          mp4_size: " ... (length: 5)",

          mp4: " ... (length: 167)",
        },

        preview_gif: {
          height: 480,

          width: 480,

          size: " ... (length: 5)",

          url: " ... (length: 167)",
        },

        preview_webp: {
          height: 464,

          width: 464,

          size: " ... (length: 5)",

          url: " ... (length: 169)",
        },

        "480w_still": {
          height: 480,

          width: 480,

          size: " ... (length: 6)",

          url: " ... (length: 153)",
        },
      },

      user: {
        avatar_url: " ... (length: 59)",

        banner_image: " ... (length: 66)",

        banner_url: " ... (length: 66)",

        profile_url: " ... (length: 28)",

        username: " ... (length: 9)",

        display_name: " ... (length: 9)",

        description: " ... (length: 98)",

        instagram_url: " ... (length: 40)",

        website_url: " ... (length: 29)",

        is_verified: true,

        suppress_chrome: false,

        is_public: false,
      },

      analytics_response_payload: " ... (length: 145)",

      analytics: {
        onload: { url: " ... (length: 244)" },

        onclick: { url: " ... (length: 245)" },

        onsent: { url: " ... (length: 244)" },
      },

      alt_text: " ... (length: 203)",

      tags: [],

      bottle_data: {},

      response_id: " ... (length: 40)",

      is_anonymous: false,

      is_community: false,

      is_featured: false,

      is_hidden: false,

      is_indexable: false,

      is_preserve_size: false,

      is_realtime: false,

      is_removed: false,

      is_dynamic: false,
    },
  ],

  meta: {
    status: 200,

    msg: " ... (length: 2)",

    response_id: " ... (length: 40)",
  },

  pagination: { total_count: 3206, count: 10, offset: 0 },
};

const GifsLayout = () => {
  const { fetchGifs } = useContext(GifContext);
  const [gifs, setGifs] = useState(null);
  useEffect(() => {
    // const fetchingGifs = async () => {
    //   const newGifs = await fetchGifs();
    //   console.log("🚀 ~ fetchingGifs ~ newGifs:", newGifs);
    //   setGifs(newGifs.data);
    // };
    // fetchingGifs();
  }, []);

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
      {/* <Grid className="w-" width={2} columns={4} fetchGifs={newGifs} /> */}
      {newGifs.data.map((gif) => (
        <div
          key={gif.title}
          className="flex flex-col gap-2 h-full border-solid border-black shadow-lg"
        >
          {/* <Image unoptimized alt="gif" src={gif.url} width={36} height={36} /> */}
          <img
            src={gif?.images?.fixed_width.webp}
            alt={gif?.title}
            className="w-full object-cover rounded transition-all duration-300"
          />
          <span>{gif.title}</span>
        </div>
      ))}
    </div>
  );
};

export default GifsLayout;
