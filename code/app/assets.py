# -*- coding: utf-8 -*-
from flask_assets import Bundle, Environment
from flask_assets import register_filter
from webassets_browserify import Browserify

register_filter(Browserify)

counter_js = Bundle("js/counter/main.js",
                   filters='browserify,jsmin',
                   output="./public/js/counter.js",
                   depends=['js/counter/*.js'])

assets = Environment()

assets.register("counter_js", counter_js)

