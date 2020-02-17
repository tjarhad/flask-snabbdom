#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask_assets import ManageAssets
from flask_script import Manager
from app.app import create_app

app = create_app()
# configure your app

manager = Manager(app)
manager.add_command("assets", ManageAssets())

if __name__ == "__main__":
    manager.run()
