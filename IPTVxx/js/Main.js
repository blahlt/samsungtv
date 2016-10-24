var mainparams = [
	/*ok*/ "Widget", // 0
	/*ok*/ "API", // 1
	/*ok*/ "Plugin", // 2
	/*ok*/ "TVKeyValue", // 3
	/*ok*/ "", // 4
	/*ok*/ "rulenone", //5
	/*ok*/ "nebo.ddns.net", //6
	/*ok*/ "http://", //7
	/*ok*/ "mac=", //8
	/*ok*/ "0.426", //9
	/*ok*/ "2.96", //10
	/*ok*/ "onLoad", //11
	/*ok*/ "Network", //12
	/*ok*/ "pluginNetwork", //13
	/*ok*/ "MAC", //14
	/*ok*/ "GetMAC", //15
	/*ok*/ "St", //16
	/*ok*/ "pluginStorage", //17
	/*ok*/ "Audio", //18
	/*ok*/ "pluginAudio", //19
	/*ok*/ "audio_output_device", //20
	/*ok*/ "GetOutputDevice", //21
	/*ok*/ "pluginTV", //22
	/*ok*/ "hardware_type", //23
	/*ok*/ "GetProductType", //24
	/*ok*/ "hardware", //25
	/*ok*/ "GetProductCode", //26
	/*ok*/ "LN40B650_KOR", //27
	/*ok*/ "Emu", //28
	/*ok*/ "C", //29
	/*ok*/ "indexOf", //30
	/*ok*/ "seriesC", //31
	/*ok*/ "E", //32
	/*ok*/ "D", //33
	/*ok*/ "seriesE", //34
	/*ok*/ "IME_XT9/ime.js", //35
	/*ok*/ "script", //36
	/*ok*/ "createElement", //37
	/*ok*/ "language", //38
	/*ok*/ "javascript", //39
	/*ok*/ "type", //40
	/*ok*/ "text/javascript", //41
	/*ok*/ "src", //42
	/*ok*/ "$MANAGER_WIDGET/Common/", //43
	/*ok*/ "appendChild", //44
	/*ok*/ "body", //45
	/*ok*/ "############## NOT FOR EMULATOR !!! ################", //46
	/*ok*/ "Location.reload(true)", //47
	/*ok*/ "init", //48
	/*ok*/ "onShow", //49
	/*ok*/ "onShowEventTVKey", //50
	/*ok*/ "sendReadyEvent", //51
	/*ok*/ "Loading...", //52
	/*ok*/ "status", //53
	/*ok*/ "loadingshow", //54
	/*ok*/ "Main.InitScript()", //55
	/*ok*/ "InitScript", //56
	/*ok*/ "Supe_ext", //57
	/*ok*/ "url_arr", //58
	/*ok*/ "fav.dat", //59
	/*ok*/ "star_url", //60
	/*ok*/ "FAV", //61
	/*ok*/ "openCommonFile", //62
	/*ok*/ "OpenFav", //63
	/*ok*/ "length", //64
	/*ok*/ "fav_start_channels", //65
	/*ok*/ "ReadPlArr", //66
	/*ok*/ "fav_url", //67
	/*ok*/ "XML_URL", //68
	/*ok*/ "Request", //69
	/*ok*/ "setGen()", //70
	/*ok*/ "showScroll()", //71
	/*ok*/ "confirm.popWindow()", //72
	/*ok*/ "confirm.closeWindow()", //73
	/*ok*/ "Not available !", //74
	/*ok*/ "SetVolumeWithKey", //75
	/*ok*/ "GetVolume", //76
	/*ok*/ "round", //77
	/*ok*/ "0", //78
	/*ok*/ "|", //79
	/*ok*/ "<b style='color:#00ccff;'>VOLUME</b> ", //80
	/*ok*/ " <b style='color:yellow;'>", //81
	/*ok*/ "</b>", //82
	/*ok*/ "setOffScreenSaver", //83
	/*ok*/ "setOffIdleEvent", //84
	/*ok*/ "SetBannerState", //85
	/*ok*/ "KEY_VOL_UP", //86
	/*ok*/ "unregistKey", //87
	/*ok*/ "KEY_VOL_DOWN", //88
	/*ok*/ "KEY_MUTE", //89
	/*ok*/ "KEY_MENU", //90
	/*ok*/ "registKey", //91
	/*ok*/ "KEY_GUIDE", //92
	/*ok*/ "KEY_SOURCE", //93
	/*ok*/ "onWidgetEvent", //94
	/*ok*/ "registVOLTVKey", //95
	/*ok*/ "KEY_PANEL_VOL_UP", //96
	/*ok*/ "KEY_PANEL_VOL_DOWN", //97
	/*ok*/ "ResetSelectedPosition", //98
	/*ok*/ "selected_channel", //99
	/*ok*/ "selected_page", //100
	/*ok*/ "chan_array_index", //101
	/*ok*/ "guide", //102
	/*ok*/ "help_info", //103
	/*ok*/ "prev_ch_array", //104
	/*ok*/ "SaveSelectedPosition", //105
	/*ok*/ "play_selected_channel", //106
	/*ok*/ "play_selected_page", //107
	/*ok*/ "play_chan_array_index", //108
	/*ok*/ "SetSelectedPosition", //109
	/*ok*/ "SetFavSelectedPosition", //110
	/*ok*/ "fav_num", //111
	/*ok*/ "temp_fav_num", //112
	/*ok*/ "fav_name", //113
	/*ok*/ "temp_fav_name", //114
	/*ok*/ "temp_fav_url", //115
	/*ok*/ "showCategorySelector", //116
	/*ok*/ "rightHalf", //117
	/*ok*/ "setFocus", //118
	/*ok*/ "CATEGORIES", //119
	/*ok*/ "categories", //120
	/*ok*/ "setBox", //121
	/*ok*/ "top", //122
	/*ok*/ "style", //123
	/*ok*/ "selectbox", //124
	/*ok*/ "60px", //125
	/*ok*/ "left", //126
	/*ok*/ "550px", //127
	/*ok*/ "showFavSelector", //128
	/*ok*/ "Select Favourites", //129
	/*ok*/ "favorites", //130
	/*ok*/ "showSiseSelector", //131
	/*ok*/ "Size Selector", //132
	/*ok*/ "120px", //133
	/*ok*/ "330px", //134
	/*ok*/ "Menu", //135
	/*ok*/ "FirstStart", //136
	/*ok*/ "Timemode", //137
	/*ok*/ "Main.FirstStart=false;", //138
	/*ok*/ "load_timer", //139
	/*ok*/ "search", //140
	/*ok*/ "xxx", //141
	/*ok*/ "hidestatus", //142
	/*ok*/ "statusbar1", //143
	/*ok*/ "hideplayer", //144
	/*ok*/ "loadinghide", //145
	/*ok*/ "AsReqMode", //146
	/*ok*/ "block_info", //147
	/*ok*/ "loading_pl", //148
	/*ok*/ "block_fav", //149
	/*ok*/ "SetZoom", //150
	/*ok*/ "playlist_prev", //151
	/*ok*/ "pre_pl_url", //152
	/*ok*/ "help_set_par", //153
	/*ok*/ "infoList", //154
	/*ok*/ "ya_date", //155
	/*ok*/ "ya_info", //156
	/*ok*/ "ya_help", //157
	/*ok*/ "UpdateHelpBar", //158
	/*ok*/ "RED", //159
	/*ok*/ "updatePage", //160
	/*ok*/ "channelList", //161
	/*ok*/ "main", //162
	/*ok*/ "0_help", //163
	/*ok*/ "1_help", //164
	/*ok*/ "2_help", //165
	/*ok*/ "3_help", //166
	/*ok*/ "3.1_help", //167
	/*ok*/ "3.2_help", //168
	/*ok*/ "3.21_help", //169
	/*ok*/ "3.3_help", //170
	/*ok*/ "3.4_help", //171
	/*ok*/ "4_help", //172
	/*ok*/ "4.1_help", //173
	/*ok*/ "5_help", //174
	/*ok*/ "5.1_help", //175
	/*ok*/ "6_help", //176
	/*ok*/ "7_help", //177
	/*ok*/ "8_help", //178
	/*ok*/ "9_help", //179
	/*ok*/ "10_help", //180
	/*ok*/ "10.1_help", //181
	/*ok*/ "11_help", //182
	/*ok*/ "12_help", //183
	/*ok*/ "Favourites", //184
	/*ok*/ " - \"", //185
	/*ok*/ "\"", //186
	/*ok*/ "Edit Favourites", //187
	/*ok*/ "help", //188
	/*ok*/ "HELP", //189
	/*ok*/ "EPG v.", //190
	/*ok*/ "version", //191
	/*ok*/ "yandextv_mode", //192
	/*ok*/ "ya_all_day", //193
	/*ok*/ "Open", //194
	/*ok*/ "history.dat", //195
	/*ok*/ "History", //196
	/*ok*/ "<b style=\"color:00cbfe;\">IPTV<i>x </i></b><b style=\"font-size:16px;color:cyan;\"> v.", //197
	/*ok*/ "ver", //198
	/*ok*/ "<b style=\"font-size:12px;\">  @</b><b style=\"font-size:16px;\">2016</b>", //199
	/*ok*/ "state", //200
	/*ok*/ "STOPPED", //201
	/*ok*/ "PLAYING_VOD", //202
	/*ok*/ "backgroundImage", //203
	/*ok*/ "background", //204
	/*ok*/ "url(img/bg.png)", //205
	/*ok*/ "guide_step", //206
	/*ok*/ "url(img/us_bg.png)", //207
	/*ok*/ "prev_pl_array", //208
	/*ok*/ "start.xml", //209
	/*ok*/ "Kill", //210
	/*ok*/ "Xcode", //211
	/*ok*/ "widget_date", //212
	/*ok*/ "540px", //213
	/*ok*/ "widget_time", //214
	/*ok*/ "850px", //215
	/*ok*/ "putInnerHTML", //216
	/*ok*/ "Forma", //217
	/*ok*/ "67px", //218
	/*ok*/ "54px", //219
	/*ok*/ "75px", //220
	/*ok*/ "38px", //221
	/*ok*/ "80px", //222
	/*ok*/ "66px", //223
	/*ok*/ "p_bg_num_logo", //224
	/*ok*/ "url(img/bgn02.png)", //225
	/*ok*/ "url(img/bgn03.png)", //226
	/*ok*/ "90px", //227
	/*ok*/ "46px", //228
	/*ok*/ "url(img/bgn01.png)", //229
	/*ok*/ "width", //230
	/*ok*/ "Update_Page", //231
	/*ok*/ "ret", //232
	/*ok*/ "chan_pages", //233
	/*ok*/ "ch", //234
	/*ok*/ "last_page_channels_counter", //235
	/*ok*/ "UpdateChannelBar", //236
	/*ok*/ "THIS IS RUNNING Update Channel", //237
	/*ok*/ "number", //238
	/*ok*/ "channels", //239
	/*ok*/ "img", //240
	/*ok*/ "Install the original version", //241
	/*ok*/ "toLowerCase", //242
	/*ok*/ "Access denied!", //243
	/*ok*/ "title", //244
	/*ok*/ "number_p", //245
	/*ok*/ "<b style=\"font-size:16px;color:white\"> - [  This portal has <font color=#00ccff>", //246
	/*ok*/ "</font> links  ]</b>", //247
	/*ok*/ ".xml", //248
	/*ok*/ ".m3u", //249
	/*ok*/ "=m3u", //250
	/*ok*/ "<b style=\"font-size:12px;\">  @</b><b style=\"font-size:16px;\">2016 </b></font>", //251
	/*ok*/ "<b style=\"color:00cbfe;\">HELP </b><b style=\"font-size:16px;color:cyan;\"> [ user guide ] </font>", //252
	/*ok*/ "Mix", //253
	/*ok*/ "<b style=\"color:00cbfe;\">EUROPE </b><b style=\"font-size:16px;color:cyan;\"> [ mix ] </font>", //254
	/*ok*/ "films", //255
	/*ok*/ "<b style=\"color:00cbfe;\">HOME </b><b style=\"font-size:16px;color:cyan;\"> [ cinema ] </font>", //256
	/*ok*/ "kids", //257
	/*ok*/ "<b style=\"color:00cbfe;\">KIDS </b><b style=\"font-size:16px;color:cyan;\"> [ cinema ] </font>", //258
	/*ok*/ "tutorials", //259
	/*ok*/ "<b style=\"color:00cbfe;\">VOD </b><b style=\"font-size:16px;color:cyan;\"> [ tutorial ] </font>", //260
	/*ok*/ "Focus", //261
	/*ok*/ "Main.updateChannel();", //262
	/*ok*/ "LoadTimer", //263
	/*ok*/ "updateChannel", //264
	/*ok*/ "logos/", //265
	/*ok*/ ":", //266
	/*ok*/ "logos/blue_folder.png", //267
	/*ok*/ "logos/image.png", //268
	/*ok*/ "logos/help.png", //269
	/*ok*/ "ya_auto", //270
	/*ok*/ " ", //271
	/*ok*/ "replace", //272
	/*ok*/ "chan", //273
	/*ok*/ "pre_selected_channel", //274
	/*ok*/ "color", //275
	/*ok*/ "#CBCBCB", //276
	/*ok*/ "url(img/number_bar.png)", //277
	/*ok*/ "url(img/chan_bar.png)", //278
	/*ok*/ "#FFFFFF", //279
	/*ok*/ "Main.UpdateChannelInfo()", //280
	/*ok*/ "UpdateChannelInfo", //281
	/*ok*/ "scrolling", //282
	/*ok*/ "ya_base_info", //283
	/*ok*/ "ch_num", //284
	/*ok*/ "name", //285
	/*ok*/ "s_url", //286
	/*ok*/ "url", //287
	/*ok*/ "pl_url", //288
	/*ok*/ "logo", //289
	/*ok*/ "ssize", //290
	/*ok*/ "a_num", //291
	/*ok*/ "buffer", //292
	/*ok*/ "ibuffer", //293
	/*ok*/ "timeshift", //294
	/*ok*/ "region", //295
	/*ok*/ "parser", //296
	/*ok*/ "search_on", //297
	/*ok*/ "toString", //298
	/*ok*/ "this.url= ", //299
	/*ok*/ "delta", //300
	/*ok*/ "Ya_flag_step", //301
	/*ok*/ "YandexGetUrl(GetYindex());", //302
	/*ok*/ "Ach(3)= ", //303
	/*ok*/ "epg_url:", //304
	/*ok*/ "split", //305
	/*ok*/ "cutted ee[0] =", //306
	/*ok*/ "cutted url =", //307
	/*ok*/ "protocol", //308
	/*ok*/ "?reg=", //309
	/*ok*/ "&chan=", //310
	/*ok*/ "&pass=PaCcT0$33v247&friendly=1", //311
	/*ok*/ "request =", //312
	/*ok*/ "showinfoList", //313
	/*ok*/ "string", //314
	/*ok*/ "<", //315
	/*ok*/ "/m.tv.yandex.", //316
	/*ok*/ "Yindex= ", //317
	/*ok*/ "UpdatePlayerStatusbar", //318
	/*ok*/ "ch_number", //319
	/*ok*/ "ch_name", //320
	/*ok*/ "ch_img", //321
	/*ok*/ "scroll_cursor", //322
	/*ok*/ "getElementById", //323
	/*ok*/ "playlist_name", //324
	/*ok*/ "<table width=\"100%\"><tr><td style=\"text-align:center;font-size:20px;color:#00ccff\">", //325
	/*ok*/ "</td></tr></table><table width=\"100%\"><tr height=\"2px\" bgcolor=\"#00cdfe\"><td></td></tr></table>", //326
	/*ok*/ "prev_page_text", //327
	/*ok*/ "prev_page_url", //328
	/*ok*/ "Back to start", //329
	/*ok*/ "<td><img src='img/buttons/rew.png'></img></td><td>", //330
	/*ok*/ "</td>", //331
	/*ok*/ "<td><img src='img/buttons/rew.png'></img></td><td>Prev</td>", //332
	/*ok*/ "next_page_text", //333
	/*ok*/ "next_page_url", //334
	/*ok*/ "<td><img src='img/buttons/ff.png'></img></td><td>", //335
	/*ok*/ "<td><img src='img/buttons/ff.png'></img></td><td>Next</td>", //336
	/*ok*/ "<td><img src='img/buttons/blue.png'></img></td><td>Back to start</td>", //337
	/*ok*/ "<table><tr>", //338
	/*ok*/ "</tr></table>", //339
	/*ok*/ "no additional information available", //340
	/*ok*/ "<div id=\"allInfo\">", //341
	/*ok*/ "<div>", //342
	/*ok*/ "allInfo", //343
	/*ok*/ "5px", //344
	/*ok*/ "10px", //345
	/*ok*/ "lost_date", //346
	/*ok*/ "Ya_flag_name", //347
	/*ok*/ "0px", //348
	/*ok*/ "PlayPrevChannel", //349
	/*ok*/ "PlayChannel", //350
	/*ok*/ "Previous channel", //351
	/*ok*/ "Starting channel", //352
	/*ok*/ "SavePrevChannel", //353
	/*ok*/ "play_prev", //354
	/*ok*/ "push", //355
	/*ok*/ "PlayPrevPlaylist", //356
	/*ok*/ "bl", //357
	/*ok*/ "pop", //358
	/*ok*/ "DEL", //359
	/*ok*/ "starthelp.xml", //360
	/*ok*/ ".dat", //361
	/*ok*/ "-=SEARCH=-", //362 
	/*ok*/ "playlist", //363
	/*ok*/ "start", //364
	/*ok*/ "Main playlist!", //365
	/*ok*/ "SavePrevPlaylist", //366
	/*ok*/ "all_channels", //367
	/*ok*/ "selectNextChannel", //368
	/*ok*/ "selectPrevChannel", //369
	/*ok*/ "Not Available!", //370
	/*ok*/ "selectNextPage", //371
	/*ok*/ "selectPrevPage", //372
	/*ok*/ "stop", //373
	/*ok*/ "txt", //374
	/*ok*/ "txt=", //375
	/*ok*/ "hurl", //376
	/*ok*/ "trp", //377
	/*ok*/ "/sh/request.php?", //378
	/*ok*/ "boom", //379
	/*ok*/ "/sh/vip_pls.php?", //380
	/*ok*/ "svoj", //381
	/*ok*/ "/sh/mojsvoy_pls.php?", //382
	/*ok*/ "tablemix", //383
	/*ok*/ "/sh/euromix.php?", //384
	/*ok*/ "%3F", //385
	/*ok*/ "?", //386
	/*ok*/ "%26", //387
	/*ok*/ "&", //388
	/*ok*/ "tableeng", //389
	/*ok*/ "/sh/englishmix.php?", //390
	/*ok*/ "tablefilms", //391
	/*ok*/ "/sh/bigpeople.php?", //392
	/*ok*/ "tablekidz", //393
	/*ok*/ "/sh/smallpeople.php?", //394
	/*ok*/ "tablevod", //395
	/*ok*/ "/sh/vodmix.php?", //396
	/*ok*/ "tableyt", //397
	/*ok*/ "/sh/youtube.php?", //398
	/*ok*/ "PlayerMode", //399
	/*ok*/ "stopFPlayer", //400
	/*ok*/ "stopV", //401
	/*ok*/ "status1", //402
	/*ok*/ "url_selected", //403
	/*ok*/ "Foto", //404
	/*ok*/ "resolution", //405
	/*ok*/ "rtmp://", //406
	/*ok*/ "rtsp://", //407
	/*ok*/ "mms://", //408
	/*ok*/ ".flv", //409
	/*ok*/ "PlayFlashStream", //410
	/*ok*/ "1", //411
	/*ok*/ "Main.PlayNoFlashStream()", //412
	/*ok*/ "stop!", //413
	/*ok*/ "Missing address!", //414
	/*ok*/ "Main.Menu();", //415
	/*ok*/ "showScroll();", //416
	/*ok*/ "exec", //417
	/*ok*/ "pl_history.dat", //418
	/*ok*/ "saveHistory", //419
	/*ok*/ "usb/", //420
	/*ok*/ "ScanUSB", //421
	/*ok*/ "$USB_DIR", //422
	/*ok*/ "OpenHistory", //423
	/*ok*/ "IP-TV, WEB-TV CHANNELS", //424
	/*ok*/ "image.png", //425
	/*ok*/ "live_history.dat", //426
	/*ok*/ "FILMS, VIDEOS", //427
	/*ok*/ "film.png", //428
	/*ok*/ "vod_history.dat", //429
	/*ok*/ "PLAYLISTs, FILE LISTs", //430
	/*ok*/ "blue_folder.png", //431
	/*ok*/ "SearchFormular()", //432
	/*ok*/ "ytv3/3.php", //433
	/*ok*/ "search.php", //434
	/*ok*/ "Reading... ", //435
	/*ok*/ "API.Request(Main.pl_url);", //436
	/*ok*/ "Main.PlayChannel()", //437
	/*ok*/ "SlideShowInterval", //438
	/*ok*/ "PlayNoFlashStream", //439
	/*ok*/ "Ibuffer", //440
	/*ok*/ "Buffer", //441
	/*ok*/ "screen_size", //442
	/*ok*/ "rtp://", //443
	/*ok*/ "udp://", //444
	/*ok*/ "Proxy", //445
	/*ok*/ "/udp/", //446
	/*ok*/ "substr", //447
	/*ok*/ ".m3u8", //448
	/*ok*/ "|COMPONENT=HLS", //449
	/*ok*/ "play", //450
	/*ok*/ "Empty link!", //451
	/*ok*/ "next", //452
	/*ok*/ "LOADING", //453
	/*ok*/ "flashplayer", //454
	/*ok*/ "flv=", //455
	/*ok*/ "file=", //456
	/*ok*/ "<object type=\"application/x-shockwave-flash\" id=\"rmtpplayerHD\" width=\"960\" height=\"540\">", //457
	/*ok*/ "<param name=\"movie\" value=\"nflashplayer.swf\" />", //458
	/*ok*/ "<param name=\"FlashVars\" value=\"", //459
	/*ok*/ "\" /></object>", //460
	/*ok*/ "PLAYING_LIVE", //461
	/*ok*/ "Main.setPlayer();", //462
	/*ok*/ "setPlayer", //463
	/*ok*/ "player", //464
	/*ok*/ "rmtpplayerHD", //465
	/*ok*/ "readFile", //466
	/*ok*/ "id", //467
	/*ok*/ "/", //468
	/*ok*/ "r", //469
	/*ok*/ "readLine", //470
	/*ok*/ "closeCommonFile", //471
	/*ok*/ "writeFile", //472
	/*ok*/ "isValidCommonPath", //473
	/*ok*/ "createCommonDir", //474
	/*ok*/ "w", //475
	/*ok*/ "writeLine", //476
	/*ok*/ "||", //477
	/*ok*/ "splice", //478
	/*ok*/ "delHistory", //479
	/*ok*/ "saveFavorites", //480
	/*ok*/"<b style=\"color:#CDCDCD\">Added to Favourites ", //481
	/*ok*/ "\"</b>", //482
	/*ok*/ "delFavorites", //483
	/*ok*/ "<b style=\"color:yellow\">Favourites folder ", //484
	/*ok*/ "\" -  EMPTY !</b>", //485
	/*ok*/ "API.Request(API.XML_URL)", //486
	/*ok*/ "Main.PlayPrevPlaylist();", //487
	/*ok*/ "moveFavorites", //488
	/*ok*/ "<b style=\"color:yellow\">Your Favourites folder is EMPTY !</b>", //489
	/*ok*/ "Display.status('Please change address in the settings')", //490
	/*ok*/ "<b style=\"color:yellow\">Favourites folder", //491
	/*ok*/ " - ", //492
	/*ok*/ " -  is EMPTY !</b>", //493
	/*ok*/ "selected", //494
	/*ok*/ "pre_selected", //495
	/*ok*/ "pre_selected_page", //496
	/*ok*/ "Empty!", //497
	/*ok*/ "ResetAll", //498
	/*ok*/ "countPages", //499
	/*ok*/ "Main.Menu()", //500
	/*ok*/ "<font color=\"#00ccff\">", //501
	/*ok*/ "<font color=\"#ffff99\">", //502
	/*ok*/ "GetUSBListSize", //503
	/*ok*/ "GetUSBDeviceID", //504
	/*ok*/ "GetUSBVendorName", //505
	/*ok*/ "GetUSBPartitionNum", //506
	/*ok*/ "GetUSBModelName", //507
	/*ok*/ "GetUSBMountPath", //508
	/*ok*/ "GetUSBAvailSize", //509
	/*ok*/ "GetUSBTotalSize", //510
	/*ok*/ "<h3> Name : ", //511
	/*ok*/ "</font><br>  Model : ", //512
	/*ok*/ "</font><br>  The total size : ", //513
	/*ok*/ "</font><br>  Free size  : ", //514
	/*ok*/ "</font><br>  Mount Directory  : ", //515
	/*ok*/ "</font><br>  Partition number  : ", //516
	/*ok*/ "</font></h3>", //517
	/*ok*/ "$USB_DIR/", //518
	/*ok*/ "</font>", //519
	/*ok*/ "usb_logo.png", //520
	/*ok*/ "USB Memory HDD", //521
	/*ok*/ "No USB devices has being found!", //522
	/*ok*/ "readDir", //523
	/*ok*/ "/dtv/usb/", //524
	/*ok*/ "Playlist not found!", //525
	/*ok*/ "<font color=\"#ffffcc\">", //526
	/*ok*/ "<font color=\"#00cc99\">", //527
	/*ok*/ "&page=", //528
	/*ok*/ "step_read_dir", //529
	/*ok*/ "substring", //530
	/*ok*/ ".", //531
	/*ok*/ "..", //532
	/*ok*/ "<h3>Name : ", //533
	/*ok*/ "isDir", //534
	/*ok*/ "<br> Type : ", //535
	/*ok*/ "File </font>", //536
	/*ok*/ "match", //537
	/*ok*/ " \"", //538
	/*ok*/ "</font>\"", //539
	/*ok*/ " \" Without Extension \"", //540
	/*ok*/ "size", //541
	/*ok*/ "<br> Size : ", //542
	/*ok*/ "/dtv/usb", //543
	/*ok*/ " Folder </font>", //544
	/*ok*/ "mtime", //545
	/*ok*/ "<br> Creation Date : ", //546
	/*ok*/ "playlist.png", //547
	/*ok*/ "</h3>", //548
	/*ok*/ "music.png", //549
	/*ok*/ "foto.png", //550
	/*ok*/ "file.png", //551
	/*ok*/ "concat", //552
	/*ok*/ "Empty Folder!", //553
	/*ok*/ "toFixed", //554
	/*ok*/ " Gb", //555
	/*ok*/ " Mb", //556
	/*ok*/ " Kb", //557
	/*ok*/ " Byte", //558
	/*ok*/ "onUnload", //559
	/*ok*/ "deinit", //560
	/*ok*/ "DEINIT", //561
	/*ok*/ "IntervalUpdateTime", //562
	/*ok*/ "SetTimeDate()", //563
	/*ok*/ "onreadystatechange", //564
	/*ok*/ "readyState", //565
	/*ok*/ "responseText", //566
	/*ok*/ "inetTime", //567
	/*ok*/ "SetTimeDate();", //568
	/*ok*/ "Sync_step", //569
	/*ok*/ "SyncInetTime()", //570
	/*ok*/ "Connection Error with NTP server!", //571
	/*ok*/ "GET", // 572
	/*ok*/ "http://wwp.greenwichmeantime.com/time/scripts/clock-8/x.php", //573
	/*ok*/ "open", //574
	/*ok*/ "User-Agent", //575
	/*ok*/ "Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51", //576
	/*ok*/ "setRequestHeader", //577
	/*ok*/ "send", //578
	/*ok*/ "year", //579
	/*ok*/ "getFullYear", //580
	/*ok*/ "date", //581
	/*ok*/ "getDate", //582
	/*ok*/ "month", //583
	/*ok*/ "getMonth", //584
	/*ok*/ "day", //585
	/*ok*/ "getDay", //586
	/*ok*/ "h", //587
	/*ok*/ "getHours", //588
	/*ok*/ "m", //589
	/*ok*/ "getMinutes", //590
	/*ok*/ "s", //591
	/*ok*/ "getSeconds", //592
	/*ok*/ "Timefix", //593
	/*ok*/ "y_t_days", //594
	/*ok*/ "pluginTime", //595
	/*ok*/ "GetEpochTime", //596
	/*ok*/ "ya_epg_info_arr", //597
	/*ok*/ "epg_t1", //598
	/*ok*/ "epg_t2", //599
	/*ok*/ "innerHTML", //600
	/*ok*/ "time", //601
	/*ok*/ "Sunday", //602
	/*ok*/ "Monday", //603
	/*ok*/ "Tuesday", //604
	/*ok*/ "Wednesday", //605
	/*ok*/ "Thursday", //606
	/*ok*/ "Friday", //607
	/*ok*/ "Saturday", //608
	/*ok*/ "January", //609
	/*ok*/ "February", //610
	/*ok*/ "March", //611
	/*ok*/ "April", //612
	/*ok*/ "May", //613
	/*ok*/ "June", //614
	/*ok*/ "July", //615
	/*ok*/ "August", //616
	/*ok*/ "September", //617
	/*ok*/ "October", //618
	/*ok*/ "November", //619
	/*ok*/ "December", //620
	/*ok*/ "floor", //621
	/*ok*/ "progressBar", //622
	/*ok*/ "px", //623
	/*ok*/ "% ", //624
	/*ok*/ "timeInfo", //625
	/*ok*/ "http://nebo.ddns.net/help/starthelp.xml", //626
	/*ok*/ "500", //627
	/*ok*/ "100", //628
	/*ok*/ "2", //629
	/*ok*/ "213", //630
	/*ok*/ "ru", //631
	/*ok*/ " Main | IP-TV | Films | Series", //632
	/*ok*/ "London", //633
	/*ok*/ "360p", //634
	/*ok*/ "fn", //635
	/*ok*/ "291s.dat", //636
	/*ok*/ "Surl", //637
	/*ok*/ "Login", //638
	/*ok*/ "Pasword", //639
	/*ok*/ "Scode", //640
	/*ok*/ "Favname", //641
	/*ok*/ "CODE", //642
	/*ok*/ "REG", //643
	/*ok*/ "Timeshift", //644
	/*ok*/ "+", //645
	/*ok*/ "Size", //646
	/*ok*/ "Ph", //647
	/*ok*/ "Pw", //648
	/*ok*/ "a_size1", //649
	/*ok*/ "a_size2", //650
	/*ok*/ "a_size3", //651
	/*ok*/ "Pstyle", //652
	/*ok*/ "Mac", //653
	/*ok*/ "Header", //654
	/*ok*/ "Vquality", //655
	/*ok*/ "Cityname", //656
	/*ok*/ "_ya_name_index_url.dat", //657
	/*ok*/ "<font style=\"color:#00ccff;font-weight:bolder\">", //658
	/*ok*/ "StartTime()", //659
	/*ok*/ "<br>", //660
	/*ok*/ ") ", //661
	/*ok*/ "Channel", //662
	/*ok*/ "Channels", //663
	/*ok*/ "In the database of ", //664
	/*ok*/ "</font> region ", //665
	/*ok*/ " </font> ", //666
	/*ok*/ " : ", //667
	/*ok*/ "loadComplete", //668
	/*ok*/ "<b style=\"color:yellow\">ERROR IN THE PLAYLIST!</b>", //669
	/*ok*/ "getIdb('main');SetupFormular()", //670
	/*ok*/ "tsnakeman", //671
	/*ok*/ "://", //672
	/*ok*/ "search_string", //673
	/*ok*/ "3.php", //674
	/*ok*/ "search=", //675
	/*ok*/ "&maxResults=50", //676
	/*ok*/ "GETTING URL!!! >", //677
	/*ok*/ "XHRObj", //678
	/*ok*/ "destroy", //679
	/*ok*/ "stReq_timeout", //680
	/*ok*/ "API.stopRequest()", //681
	/*ok*/ "stReq_time", //682
	/*ok*/ "recieveData", //683
	/*ok*/ "overrideMimeType", //684
	/*ok*/ "text/xml", //685
	/*ok*/ "Accept-Encoding", //686
	/*ok*/ "identity", //687
	/*ok*/ "Accept-Language", //688
	/*ok*/ "en-us,en;q=0.5", //689
	/*ok*/ "Accept", //690
	/*ok*/ "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", //691
	/*ok*/ "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.6) Gecko/20100627 Firefox/3.6.6", //692
	/*ok*/ "Accept-Charset", //693
	/*ok*/ "ISO-8859-1,utf-8;q=0.7,*;q=0.7", //694
	/*ok*/ "Connection", //695
	/*ok*/ "close", //696
	/*ok*/ "Location", //697
	/*ok*/ "getResponseHeader", //698
	/*ok*/ "jump", //699
	/*ok*/ "Gen", //700
	/*ok*/ "AGEN URL =", //701
	/*ok*/ "GenUrl", //702
	/*ok*/ "if(API.Gen){if(API.GenT>=1000)API.GenT=API.GenT/2;API.Gen=false;}else if(API.GenT<512000)API.GenT=API.GenT*2; AGen();", //703
	/*ok*/ "GenT", //704
	/*ok*/ "getChannel_list", //705
	/*ok*/ "responseXML", //706
	/*ok*/ "GETTING XML SOURCE!!!", //707
	/*ok*/ "<b style=\"color:yellow\">Wrong address or an Error in the playlist! </b>", //708
	/*ok*/ "stopRequest", //709
	/*ok*/ "abort", //710
	/*ok*/ "chan_counter", //711
	/*ok*/ "nodeValue", //712
	/*ok*/ "childNodes", //713
	/*ok*/ "getElementsByTagName", //714
	/*ok*/ "getAttributeNode", //715
	/*ok*/ "All Categories", //716
	/*ok*/ "\x0A", //717
	/*ok*/ "#EXTINF:", //718
	/*ok*/ "/dtv", //719
	/*ok*/ "#EXTM3U", //720
	/*ok*/ "cache=", //721
	/*ok*/ "tvg-name=\"", //722
	/*ok*/ "tvg-shift=", //723
	/*ok*/ "tvg-logo=\"", //724
	/*ok*/ "aspect-ratio=", //725
	/*ok*/ "16:9", //726
	/*ok*/ "16x9", //727
	/*ok*/ "14:9", //728
	/*ok*/ "14x9", //729
	/*ok*/ "4:3z2", //730
	/*ok*/ "4x3z2", //731
	/*ok*/ "4:3z1", //732
	/*ok*/ "4x3z1", //733
	/*ok*/ "3", //734
	/*ok*/ "4:3", //735
	/*ok*/ "4x3", //736
	/*ok*/ "4", //737
	/*ok*/ "x-zoom", //738
	/*ok*/ "5", //739
	/*ok*/ "auto", //740
	/*ok*/ "6", //741
	/*ok*/ "audio-track=", //742
	/*ok*/ "group-title=\"", //743
	/*ok*/ ",", //744
	/*ok*/ ".png", //745
	/*ok*/ "Category : ", //746
	/*ok*/ "no_name", //747
	/*ok*/ "text", //748
	/*ok*/ "all_logo", //749
	/*ok*/ "all_size", //750
	/*ok*/ "all_audiotrack_num", //751
	/*ok*/ "all_buffer", //752
	/*ok*/ "all_timeshift", //753
	/*ok*/ "all_region", //754
	/*ok*/ "all_parser", //755
	/*ok*/ "channel", //756
	/*ok*/ "stream_url", //757
	/*ok*/ "logo_30x30", //758
	/*ok*/ "description", //759
	/*ok*/ "category_id", //760
	/*ok*/ "audiotrack_num", //761
	/*ok*/ "playlist_url", //762
	/*ok*/ "category", //763
	/*ok*/ "category_title", //764
	/*ok*/ "setCategory", //765
	/*ok*/ "This category is empty!", //766
	/*ok*/ "Select the Quality", //767
	/*ok*/ "select_list", //768
	/*ok*/ "last_page_counter", //769
	/*ok*/ "pages", //770
	/*ok*/ "updateBox", //771
	/*ok*/ "<div><div style=\"text-align:center;width:100%;height:10px;padding:4px;font-size:20px;\">", //772
	/*ok*/ "</div><br>", //773
	/*ok*/ "style=\"color:#ffffff; border: 2px solid #ffffff\" ", //774
	/*ok*/ "<li ", //775
	/*ok*/ ">", //776
	/*ok*/ "</li>", //777
	/*ok*/ "<div style=\"height:25px;\"><div id=\"navi_button\"><img src=\"img/buttons/exit.png\"></img></div><span id=\"navi_helpertext\">Exit</span>", //778
	/*ok*/ "<div id=\"navi_button\"><img src=\"img/buttons/move.png\"></img></div><span id=\"navi_helpertext\">Move</span>", //779
	/*ok*/ "<div id=\"navi_button\"><img src=\"img/buttons/enter.png\"></img></div><span id=\"navi_helpertext\">Enter</span></div></div>", //780
	/*ok*/ "selectNextItem", //781
	/*ok*/ "selectPrevItem", //782
	/*ok*/ "SelectCategory", //783
	/*ok*/ "SelectFav", //784
	/*ok*/ "SelectSize", //785
	/*ok*/ "ch_t", //786
	/*ok*/ "cur_time", //787
	/*ok*/ "run", //788
	/*ok*/ "loading", //789
	/*ok*/ "loadingshowTimer", //790
	/*ok*/ "loadingstep", //791
	/*ok*/ "loadingshow_timer", //792
	/*ok*/ "index", //793
	/*ok*/ "imgAnim", //794
	/*ok*/ "img/loading/loading_0", //795
	/*ok*/ "img/loading/loading_", //796
	/*ok*/ "Display.loadingstep();", //797
	/*ok*/ "Player.ReturnMenu();", //798
	/*ok*/ "showplayer", //799
	/*ok*/ "PAUSE_VOD", //800
	/*ok*/ "help_navi_l_player", //801
	/*ok*/ "p_epg_line", //802
	/*ok*/ "progressBarBG", //803
	/*ok*/ "560px", //804
	/*ok*/ "725px", //805
	/*ok*/ "580px", //806
	/*ok*/ "745px", //807
	/*ok*/ "860px", //808
	/*ok*/ "p_info_line", //809
	/*ok*/ "help_navi_vod_player", //810
	/*ok*/ "statusbar", //811
	/*ok*/ "68px", //812
	/*ok*/ "vod_pause", //813
	/*ok*/ "vod_play", //814
	/*ok*/ "39px", //815
	/*ok*/ "48px", //816
	/*ok*/ "30px", //817
	/*ok*/ "40px", //818
	/*ok*/ "repeat", //819
	/*ok*/ "Repeat mode", //820
	/*ok*/ "Continuous playback", //821
	/*ok*/ "70px", //822
	/*ok*/ "130px", //823
	/*ok*/ "595px", //824
	/*ok*/ "740px", //825
	/*ok*/ "140px", //826
	/*ok*/ "20px", //827
	/*ok*/ "605px", //828
	/*ok*/ "750px", //829
	/*ok*/ "ya_prog_id", //830
	/*ok*/ "epg_info", //831
	/*ok*/ "100px", //832
	/*ok*/ "p_second_line", //833
	/*ok*/ "infobar_timer", //834
	/*ok*/ "infobarTimer", //835
	/*ok*/ "epg_info_step", //836
	/*ok*/ "Display.hideplayer()", //837
	/*ok*/ "status_timer", //838
	/*ok*/ "statusTimer", //839
	/*ok*/ "status1_timer", //840
	/*ok*/ "status1Timer", //841
	/*ok*/ "Display.hidestatus()", //842
	/*ok*/ "getIdn(\"statusbar1\")", //843
	/*ok*/ "ShowTools", //844
	/*ok*/ "serieC", //845
	/*ok*/ "blockNavigation", //846
	/*ok*/ "send_Return", //847
	/*ok*/ "sendReturnEvent", //848
	/*ok*/ "<b style=\"color:yellow\">To quit - press \"EXIT\" again!</b>", //849
	/*ok*/ "KeyHandler.send_Return=false;", //850
	/*ok*/ "ReturnMenu", //851
	/*ok*/ "focus", //852
	/*ok*/ "MainMenu_Anchor", //853
	/*ok*/ "KEY_TOOLS", //854
	/*ok*/ "LoadingPlayer_Anchor", //855
	/*ok*/ "LivePlayer_Anchor", //856
	/*ok*/ "VODPlayer_Anchor", //857
	/*ok*/ "Selectbox_Anchor", //858
	/*ok*/ "RedFav_Anchor", //859
	/*ok*/ "Guide_Anchor", //860
	/*ok*/ "Setup_Anchor", //861
	/*ok*/ "KanalSelector", //862
	/*ok*/ "NumberEntered", //863
	/*ok*/ "Input error", //864
	/*ok*/ "Keys10", //865
	/*ok*/ "KEY_1", //866
	/*ok*/ "KEY_2", //867
	/*ok*/ "KEY_3", //868
	/*ok*/ "KEY_4", //869
	/*ok*/ "KEY_5", //870
	/*ok*/ "KEY_6", //871
	/*ok*/ "7", //872
	/*ok*/ "KEY_7", //873
	/*ok*/ "8", //874
	/*ok*/ "KEY_8", //875
	/*ok*/ "9", //876
	/*ok*/ "KEY_9", //877
	/*ok*/ "KEY_0", //878
	/*ok*/ "info", //879
	/*ok*/ "ChSelectorTimeout", //880
	/*ok*/ "KeyHandler.KanalSelector()", //881
	/*ok*/ "RedFavKeyDown", //882
	/*ok*/ "keyCode", //883
	/*ok*/ "KEY_EXIT", //884
	/*ok*/ "KEY_DOWN", //885
	/*ok*/ "KEY_UP", //886
	/*ok*/ "KEY_LEFT", //887
	/*ok*/ "KEY_RIGHT", //888
	/*ok*/ "KEY_RED", //889
	/*ok*/ "KEY_GREEN", //890
	/*ok*/ "KEY_YELLOW", //891
	/*ok*/ "KEY_BLUE", //892
	/*ok*/ "KEY_RETURN", //893
	/*ok*/ "getIdn('main')", //894
	/*ok*/ "KEY_STOP", //895
	/*ok*/ "GuideKeyDown", //896
	/*ok*/ "MainMenuKeyDown", //897
	/*ok*/ "ya_prog_info_arr", //898
	/*ok*/ "There is no EPG!", //899
	/*ok*/ "openWindow", //900
	/*ok*/ "MAC = ", //901
	/*ok*/ " | Parser = ", //902
	/*ok*/ "KEY_INFO", //903
	/*ok*/ "SetupFormular();", //904
	/*ok*/ "KEY_PANEL_MENU", //905
	/*ok*/ "help_step", //906
	/*ok*/ "KEY_ENTER", //907
	/*ok*/ "[[[[[[[[[[[[[[FAV]]]]]]]]]]]]]]]", //908
	/*ok*/ "KEY_FF", //909
	/*ok*/ "total_time", //910
	/*ok*/ "resumeVideo", //911
	/*ok*/ "pauseVideo", //912
	/*ok*/ ": <font style='font-size:16px;color:white;'>scroll page</font><font style='font-size:16px;color:cyan;'> P-/P+ </font>: <font style='font-size:16px;color:white;'>region - </font><font style='font-size:16px;color:cyan;'>", //913
	/*ok*/ "</font> : <font style='font-size:16px;color:white;'>index - </font><font style='font-size:16px;color:cyan;'>", //914
	/*ok*/ "ch_index", //915
	/*ok*/ "</font> :", //916
	/*ok*/ "creating Yandex EPG from database", //917
	/*ok*/ "GetYandexBase()", //918
	/*ok*/ "KEY_PAUSE", //919
	/*ok*/ "KEY_RW", //920
	/*ok*/ "Resume playback", //921
	/*ok*/ "Repeat playback", //922
	/*ok*/ "All modes are disabled!", //923
	/*ok*/ "KEY_PLAY", //924
	/*ok*/ "ChannelSetupFormular()", //925
	/*ok*/ "SEFSetNextAudioStream", //926
	/*ok*/ "KEY_SUBTITLE", //927
	/*ok*/ "LoadingPlayerKeyDown", //928
	/*ok*/ "SelectboxKeyDown", //929
	/*ok*/ "Select Size", //930
	/*ok*/ "LivePlayerKeyDown", //931
	/*ok*/ "<table><tr><td><img src=\"img/buttons/move_m.png\"></img></td><td>- Set Zoom</td></tr></table>", //932
	/*ok*/ "NO EPG!", //933
	/*ok*/ "setSize", //934
	/*ok*/ "get3DMode", //935
	/*ok*/ "change3DMode", //936
	/*ok*/ "Flash player", //937
	/*ok*/ "StartSlideShow();", //938
	/*ok*/ "Start SlideShow", //939
	/*ok*/ "Stop SlideShow", //940
	/*ok*/ "No data!", //941
	/*ok*/ "black_line", //942
	/*ok*/ "black_line_top", //943
	/*ok*/ "VODPlayerKeyDown", //944
	/*ok*/ "PercentJump", //945
	/*ok*/ "0%", //946
	/*ok*/ "MinutesJump", //947
	/*ok*/ "save_time", //948
	/*ok*/ "PlaySaveTime", //949
	/*ok*/ "getIdn('selectbox');getIdb('rightHalf');KeyHandler.setFocus(3);", //950
	/*ok*/ "pluginObjectNNavi", //951
	/*ok*/ "GetFirmware", //952
	/*ok*/ "d= ", //953
	/*ok*/ "-", //954
	/*ok*/ "2011", //955
	/*ok*/ "2012", //956
	/*ok*/ "2013", //957
	/*ok*/ "2014", //958
	/*ok*/ "SefPlugin", //959
	/*ok*/ "pluginObjectSef", //960
	/*ok*/ "Sef", //961
	/*ok*/ "plugin", //962
	/*ok*/ "pluginPlayer", //963
	/*ok*/ "pluginObjectTVMW", //964
	/*ok*/ "Screen3Dplugin", //965
	/*ok*/ "pluginObjectScreen3D", //966
	/*ok*/ "SetMediaSource", //967
	/*ok*/ "OnConnectionFailed", //968
	/*ok*/ "Player.OnConnectionFailed", //969
	/*ok*/ "OnNetworkDisconnected", //970
	/*ok*/ "Player.OnNetworkDisconnected", //971
	/*ok*/ "OnStreamNotFound", //972
	/*ok*/ "Player.OnStreamNotFound", //973
	/*ok*/ "OnRenderError", //974
	/*ok*/ "Player.OnRenderError", //975
	/*ok*/ "OnBufferingStart", //976
	/*ok*/ "Player.OnBufferingStart", //977
	/*ok*/ "OnBufferingProgress", //978
	/*ok*/ "Player.OnBufferingProgress", //979
	/*ok*/ "OnBufferingComplete", //980
	/*ok*/ "Player.OnBufferingComplete", //981
	/*ok*/ "OnCurrentPlayTime", //982
	/*ok*/ "Player.OnCurrentPlayTime", //983
	/*ok*/ "Flag3DEffectSupport", //984
	/*ok*/ "Flag3DTVConnect", //985
	/*ok*/ "mode3D", //986
	/*ok*/ "status3D", //987
	/*ok*/ "3D OFF", //988
	/*ok*/ "SIDE - BY - SIDE", //989
	/*ok*/ "TOP - BOTTOM", //990
	/*ok*/ "Check3DEffectMode", //991
	/*ok*/ "Set3DEffectMode", //992
	/*ok*/ "error", //993
	/*ok*/ "eerr", //994
	/*ok*/ "Unsupported container", //995
	/*ok*/ "Unsupported video codec", //996
	/*ok*/ "Unsupported audio codec", //997
	/*ok*/ "Unsupported aspect ratio", //998
	/*ok*/ "Unsupported refresh rate", //999
	/*ok*/ "Corrupted stream!", //1000
	/*ok*/ "Missing File", //1001
	/*ok*/ "Disconnected network", //1002
	/*ok*/ "Connection failed", //1003
	/*ok*/ "serr", //1004
	/*ok*/ "Player.ReturnMenu()", //1005
	/*ok*/ "AutoReStart", //1006
	/*ok*/ "Player.play(Player.url,0)", //1007
	/*ok*/ "BufferingTimer", //1008
	/*ok*/ "Auto Restart", //1009
	/*ok*/ "Buffer : 1%", //1010
	/*ok*/ "Buffer : ", //1011
	/*ok*/ "%", //1012
	/*ok*/ "buffering_timer", //1013
	/*ok*/ "message", //1014
	/*ok*/ "GetDuration", //1015
	/*ok*/ "Execute", //1016
	/*ok*/ ".mp3", //1017
	/*ok*/ "h_url", //1018
	/*ok*/ "GetResolution", //1019
	/*ok*/ "Player.GetVideoSize();", //1020
	/*ok*/ "GetAudioNum", //1021
	/*ok*/ "<tr><table><tr><td><img src=\"img/buttons/red_m.png\"></img></td><td>- Set Quality</td></tr></table></tr>", //1022
	/*ok*/ "if(Player.message!=\"\")Display.status(\"<table>\"+Player.message+\"</table>\",6000);Main.saveHistory(Player.h_url);if(Player.state==Player.PLAYING_VOD)Player.getSaveTime();", //1023
	/*ok*/ "Player.message=\"\";", //1024
	/*ok*/ "Display.hideplayer();", //1025
	/*ok*/ "SetBuffer", //1026
	/*ok*/ "SetTotalBufferSize", //1027
	/*ok*/ "SetInitialBuffer", //1028
	/*ok*/ "SetInitialTimeOut", //1029
	/*ok*/ "SetPendingBuffer", //1030
	/*ok*/ "Player deinit", //1031
	/*ok*/ "tnum", //1032
	/*ok*/ "long_pause", //1033
	/*ok*/ "SaveUrl", //1034
	/*ok*/ "Stop", //1035
	/*ok*/ "ClearScreen", //1036
	/*ok*/ "Close", //1037
	/*ok*/ "SEFPlay", //1038
	/*ok*/ "Play", //1039
	/*ok*/ "url.dat", //1040
	/*ok*/ "getSaveTime", //1041
	/*ok*/ "video/x-flv", //1042
	/*ok*/ "Display.status(\" Resume ?\",5000);", //1043
	/*ok*/ "Player.save_time=0", //1044
	/*ok*/ "statusmessage", //1045
	/*ok*/ "resume!", //1046
	/*ok*/ "JumpForward", //1047
	/*ok*/ "Display.status(\"resume failed!\",2000);Player.play(Player.url,0);", //1048
	/*ok*/ "GetVideoResolution", //1049
	/*ok*/ "GetVideoHeight", //1050
	/*ok*/ "GetVideoWidth", //1051
	/*ok*/ "X", //1052
	/*ok*/ "- MP3 -", //1053
	/*ok*/ "GetVideoSize", //1054
	/*ok*/ "Player.setSize(Player.size,1,1);", //1055
	/*ok*/ "16x9 FULL", //1056
	/*ok*/ "ORIGINAL", //1057
	/*ok*/ "w/h=1.67", //1058
	/*ok*/ "w/h=1.56", //1059
	/*ok*/ "4x3 ZOOM 2", //1060
	/*ok*/ "w/h=1.45", //1061
	/*ok*/ "4x3 ZOOM 1", //1062
	/*ok*/ "w/h=2", //1063
	/*ok*/ "X-ZOOM - set size: CH LIST", //1064
	/*ok*/ " _ w=", //1065
	/*ok*/ "% _ h=", //1066
	/*ok*/ "ORIGINAL ZOOM 1", //1067
	/*ok*/ "16x9 ZOOM 1", //1068
	/*ok*/ "ORIGINAL ZOOM 2", //1069
	/*ok*/ "16x9 ZOOM 2", //1070
	/*ok*/ "Not specified", //1071
	/*ok*/ "Not specified!", //1072
	/*ok*/ "<tr><table><tr><td><img src=\"img/buttons/blue_m.png\"></img></td><td>- ", //1073
	/*ok*/ "</td></tr></table></tr>", //1074
	/*ok*/ "SetDisplayArea", //1075
	/*ok*/ "SetCropArea", //1076
	/*ok*/ "JumpBackward", //1077
	/*ok*/ "delta_time", //1078
	/*ok*/ " min.", //1079
	/*ok*/ "TestTime", //1080
	/*ok*/ " > > > ", //1081
	/*ok*/ "Resume", //1082
	/*ok*/ "Player.MinutesJump(-0.05);", //1083
	/*ok*/ "Pause", //1084
	/*ok*/ "Player.long_pause=true;", //1085
	/*ok*/ "Connection failed!", //1086
	/*ok*/ "Player", //1087
	/*ok*/ "1.000", //1088
	/*ok*/ "InitPlayer", //1089
	/*ok*/ "OnEvent", //1090
	/*ok*/ "Player.SefOnEvent", //1091
	/*ok*/ "SetPlayerProperty", //1092
	/*ok*/ "StartPlayback", //1093
	/*ok*/ "SefOnEvent", //1094
	/*ok*/ "Function is Not available!", //1095
	/*ok*/ "Only one sound track!", //1096
	/*ok*/ "GetCurrentStreamID", //1097
	/*ok*/ "SetAudioStream", //1098
	/*ok*/ "LangCodes", //1099
	/*ok*/ "Albenian", //1100
	/*ok*/ "Armenian", //1101
	/*ok*/ "Azerbaijan", //1102
	/*ok*/ "Belorussian", //1103
	/*ok*/ "Bulgar", //1104
	/*ok*/ "Chinese", //1105
	/*ok*/ "English", //1106
	/*ok*/ "French", //1107
	/*ok*/ "German", //1108
	/*ok*/ "Italian", //1109
	/*ok*/ "Japanese", //1110
	/*ok*/ "Kazakh", //1111
	/*ok*/ "Korian", //1112
	/*ok*/ "Portuguese", //1113
	/*ok*/ "Russian", //1114
	/*ok*/ "Slovak", //1115
	/*ok*/ "Slovenian", //1116
	/*ok*/ "Spanish", //1117
	/*ok*/ "Serbian", //1118
	/*ok*/ "Swedish", //1119
	/*ok*/ "Turkish", //1120
	/*ok*/ "Ukranian", //1121
	/*ok*/ "Uzbek", //1122
	/*ok*/ "SetStreamID", //1123
	/*ok*/ "GetStreamLanguageInfo", //1124
	/*ok*/ "Unknown", //1125
	/*ok*/ " audio track \u2116", //1126
	/*ok*/ "<tr><td>", //1127
	/*ok*/ "</td></tr>", //1128
	/*ok*/ "<tr><td>Wrong \u2116 of audio track!</td></tr>", //1129
	/*ok*/ "GetTotalNumOfStreamID", //1130
	/*ok*/ "<tr><table><tr><td><img src=\"img/buttons/green_m.png\"></img></td><td> - Change audio track</td></tr></table></tr>", //1131
	/*ok*/ "<tr><td><img src=\"img/buttons/green_m.png\"></img> or \"AD/SUBT\" - Change audio track</td></tr>", //1132
	/*ok*/ "search_h", //1133
	/*ok*/ "<div id=\"allInput\"><form>", //1134
	/*ok*/ "Enter code.", //1135
	/*ok*/ "<span id=\"text_form0\">Access code to \"XXX\" (from 0 to 9999) : </span><input id=\"", //1136
	/*ok*/ "\" type=\"text\" size=\"", //1137
	/*ok*/ "\" maxlength=\"4\"></input>", //1138
	/*ok*/ "Enter your Search here ", //1139
	/*ok*/ "<span id=\"psearch\"> Find : </span><input id=\"", //1140
	/*ok*/ "\" maxlength=\"200\"></input>", //1141
	/*ok*/ "Enter an address ", //1142
	/*ok*/ "<span id=\"psearch\"> Address : </span><input id=\"", //1143
	/*ok*/ "</form><form><span>\"ENTER\" - confirm input.</span></form><form><span>\"EXIT\" and \"RETURN\" - go back.</span></form>", //1144
	/*ok*/ "<h3 style=\"padding-top:150px;text-align:center;\"> Warning !!!<br>If you provide URL of the playlist<br> and file extension doesnt contain \".xml\" or \".m3u\" ,<br>then put \"#\" in the front of URL.</h3>", //1145
	/*ok*/ "</div>", //1146
	/*ok*/ "Keyboard", //1147
	/*ok*/ "setKeypadPos", //1148
	/*ok*/ "setQWERTYPos", //1149
	/*ok*/ "setString", //1150
	/*ok*/ "setKeyFunc", //1151
	/*ok*/ "setEnterFunc", //1152
	/*ok*/ "value", //1153
	/*ok*/ "Main.openCommonFile(Main.pl_url)", //1154
	/*ok*/ "<b style=\"color:#00ccff\">Please wait! Searching...</b>", //1155
	/*ok*/ "<b style=\"color:#00ccff\">Access granted!</b>", //1156
	/*ok*/ "#", //1157
	/*ok*/ "allInput", //1158
	/*ok*/ "Edit impossible! Too big size.", //1159
	/*ok*/ "stream", //1160
	/*ok*/ "Editing options ", //1161
	/*ok*/ "<div id=\"allInput\"><form><span>Name ", //1162
	/*ok*/ " : </span></form><form><input id=\"0\" type=\"text\" size=\"", //1163
	/*ok*/ "\" maxlength=\"200\"/></form><form><span>URL address ", //1164
	/*ok*/ " : </span></form><form><input id=\"1\" type=\"text\" size=\"", //1165
	/*ok*/ "\" maxlength=\"200\"/></form><form><span>Description, additional information : </span></form>", //1166
	/*ok*/ "<form><input id=\"", //1167
	/*ok*/ "\" maxlength=\"200\"/></form>", //1168
	/*ok*/ "<form><span>Icons address ", //1169
	/*ok*/ " : </span></form><form><input id=\"", //1170
	/*ok*/ "<form><span>Starting aspect ratio :</span></form><form><span>\"0\"- 16X9 FULL or ORIGINAL , \"1\"- 14X9 ,</span></form><form><span>\"2\"- 4X3 ZOOM 2 , \"3\"- 4X3 ZOOM 1 ,\"4\"- 4X3 , </span></form><form><span id=\"text_form0\">\"5\"- X-ZOOM , \"6\"- AUTO . </span><input id=\"", //1171
	/*ok*/ "\" maxlength=\"2\"/></form><form><span id=\"text_form0\">Audio track number ( 1, 2, 3 . . . ) : </span><input id=\"", //1172
	/*ok*/ "\"  type=\"text\" size=\"", //1173
	/*ok*/ "\" maxlength=\"2\"/></form><form><span id=\"text_form0\">Shift time EPG ( +/-12 h.) : </span><input id=\"", //1174
	/*ok*/ "\" maxlength=\"4\"/></form><form><span>Total buffer size  0.5 - 20 ( Mb.).</span></form><form><span id=\"text_form0\">If it is not specified - \"auto\" : </span><input id=\"", //1175
	/*ok*/ "\" maxlength=\"3\"/></form><form><span>Start after buffer is  10 - 50 ( % ) .</span></form><form><span id=\"text_form0\">If it is not specified - \"auto\" : </span><input id=\"", //1176
	/*ok*/ "\" maxlength=\"3\"/></form><form><span id=\"text_form0\"> Yandex region code ( \"213\"- Moscow ) : </span><input id=\"", //1177
	/*ok*/ "\" maxlength=\"6\"/></form>", //1178
	/*ok*/ "<form></form><form></form><form></form><form></form><form></form><form></form><form></form></div>", //1179
	/*ok*/ "margin", //1180
	/*ok*/ "px 0px 0px 0px ", //1181
	/*ok*/ "SetupKeyDown", //1182
	/*ok*/ "setup_id", //1183
	/*ok*/ "ua", //1184
	/*ok*/ "by", //1185
	/*ok*/ "-12", //1186
	/*ok*/ "-11", //1187
	/*ok*/ "-10", //1188
	/*ok*/ "-9", //1189
	/*ok*/ "-8", //1190
	/*ok*/ "-7", //1191
	/*ok*/ "-6", //1192
	/*ok*/ "-5", //1193
	/*ok*/ "-4", //1194
	/*ok*/ "-3", //1195
	/*ok*/ "-2", //1196
	/*ok*/ "-1", //1197
	/*ok*/ "+1", //1198
	/*ok*/ "+2", //1199
	/*ok*/ "+3", //1200
	/*ok*/ "+4", //1201
	/*ok*/ "+5", //1202
	/*ok*/ "+6", //1203
	/*ok*/ "+7", //1204
	/*ok*/ "+8", //1205
	/*ok*/ "+9", //1206
	/*ok*/ "+10", //1207
	/*ok*/ "+11", //1208
	/*ok*/ "+12", //1209
	/*ok*/ "10", //1210
	/*ok*/ "auto-sync", //1211
	/*ok*/ "auto-unix", //1212
	/*ok*/ "manual", //1213
	/*ok*/ "11", //1214
	/*ok*/ "12", //1215
	/*ok*/ "16X9", //1216
	/*ok*/ "14X9", //1217
	/*ok*/ "4X3-ZOOM 2", //1218
	/*ok*/ "4X3-ZOOM 1", //1219
	/*ok*/ "4X3", //1220
	/*ok*/ "X-ZOOM", //1221
	/*ok*/ "AUTO", //1222
	/*ok*/ "Not installed", //1223
	/*ok*/ "13", //1224
	/*ok*/ "14", //1225
	/*ok*/ "15", //1226
	/*ok*/ "4X3 ZOOM 1", //1227
	/*ok*/ "4X3 ZOOM 2", //1228
	/*ok*/ "16", //1229
	/*ok*/ "16X9 ZOOM 1", //1230
	/*ok*/ "16X9 ZOOM 2", //1231
	/*ok*/ "17", //1232
	/*ok*/ "ORIG.ZOOM 1", //1233
	/*ok*/ "ORIG.ZOOM 2", //1234
	/*ok*/ "18", //1235
	/*ok*/ "square", //1236
	/*ok*/ "rectangular", //1237
	/*ok*/ "19", //1238
	/*ok*/ "on", //1239
	/*ok*/ "off", //1240
	/*ok*/ "20", //1241
	/*ok*/ "0.5", //1242
	/*ok*/ "0.6", //1243
	/*ok*/ "0.7", //1244
	/*ok*/ "0.8", //1245
	/*ok*/ "0.9", //1246
	/*ok*/ "21", //1247
	/*ok*/ "25", //1248
	/*ok*/ "30", //1249
	/*ok*/ "35", //1250
	/*ok*/ "40", //1251
	/*ok*/ "45", //1252
	/*ok*/ "50", //1253
	/*ok*/ "22", //1254
	/*ok*/ "23", //1255
	/*ok*/ "24", //1256
	/*ok*/ "240p", //1257
	/*ok*/ "480p", //1258
	/*ok*/ "720p", //1259
	/*ok*/ "1080p", //1260
	/*ok*/ "26", //1261
	/*ok*/ "Moscow", //1262
	/*ok*/ "Berlin", //1263
	/*ok*/ "Paris", //1264
	/*ok*/ "Rome", //1265
	/*ok*/ "Dublin", //1266
	/*ok*/ "Madrid", //1267
	/*ok*/ "Lisbon", //1268
	/*ok*/ "Vienna", //1269
	/*ok*/ "Warsaw", //1270
	/*ok*/ "Kiev", //1271
	/*ok*/ "Prague", //1272
	/*ok*/ "Athens", //1273
	/*ok*/ "Ankara", //1274
	/*ok*/ "27", //1275
	/*ok*/ "28", //1276
	/*ok*/ "preventDefault", //1277
	/*ok*/ "en", //1278
	/*ok*/ " Settings , MAC = ", //1279
	/*ok*/ "</span></form><form style=\"color:#00ccff;font-size:17px;\"><span>", //1280
	/*ok*/ "</span></form><form style=\"color:#00ccff;font-size:20px;\"><span>Link is too long!", //1281
	/*ok*/ "<div id=\"allInput\"><form><span> URL of the current playlist : <font style=\"color:#00ccff;font-size:17px;\">\"", //1282
	/*ok*/ "hidden link", //1283
	/*ok*/ "\"</span></form><form><span> URL of the Main playlist : </span></form><form><input id=\"0\" type=\"text\" size=\"", //1284
	/*ok*/ "\" maxlength=\"200\"></input></form>", //1285
	/*ok*/ "<form><span> URL of the hidden playlist : </span></form><form><input id=\"1\" type=\"text\" size=\"", //1286
	/*ok*/ "<form><span id=\"text_form3\"> Login for hidden playlist :</span><input id=\"2\" type=\"text\" size=\"", //1287
	/*ok*/ "\" maxlength=\"40\"></input></form><form><span id=\"text_form3\">Pass for hidden playlist :</span><input id=\"3\" type=\"text\" size=\"", //1288
	/*ok*/ "\" maxlength=\"40\"></input></form><form><span id=\"text_form3\">UDP proxy ( IP : port ) :</span><input id=\"4\" type=\"text\" size=\"", //1289
	/*ok*/ "\" maxlength=\"40\"></input></form><form><span id=\"text_form0\">Access code to \"XXX\" ( 0 - 9999 ) : </span><input id=\"5\" type=\"text\" size=\"", //1290
	/*ok*/ "\" maxlength=\"4\"></input></form><form><span id=\"text_form0\">Code of Fav. name  ( 0 - 9999 ) :</span><input id=\"6\" type=\"text\" size=\"", //1291
	/*ok*/ "\" maxlength=\"4\"></input></form><form><span>Names of Fav. folders, any, order</span></form><form><span>( name 1 | name 2 | name 3 . . . ) : </span></form><form><input id=\"7\" type=\"text\" size=\"", //1292
	/*ok*/ "\" maxlength=\"200\"></input></form><form><span id=\"text_form0\"> Yandex region code ( \"213\"- Moscow ) : </span><input id=\"8\" type=\"text\" size=\"", //1293
	/*ok*/ "\" maxlength=\"7\"></input></form><form><span id=\"text_form1\">EPG from \"m.tv.yandex.</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"9\"></div></form><form><span id=\"text_form1\">EPG Shift time (+/-12 h.)</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"10\"></div></form><form><span id=\"text_form2\">Widget Time : </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"11\"></div></form><form><span id=\"text_form1\">Time zone for \"auto.\" ( +/-12 h.)</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"12\"></div></form><form><span id=\"text_form2\">Starting video size : </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"13\"></div></form><form><span id=\"text_form1\">\"X-ZOOM\" height 50 - 150 ( % )</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"14\"></div></form><form><span id=\"text_form1\">\"X-ZOOM\" width 50 - 150 ( % ) </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"15\"></div></form><form><span id=\"text_form2\">AUTO for w/h<1.35 </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"16\"></div></form><form><span id=\"text_form2\">AUTO for 1.34 < w/h <1.79 </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"17\"></div></form><form><span id=\"text_form2\">AUTO for  w/h > 1.78 </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"18\"></div></form><form><span id=\"text_form2\">Icons shape :</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"19\"></div></form><form><span id=\"text_form1\">External icons :</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"20\"></div></form><form><span>Total buffer size 0.5 - 20 ( Mb.).</span></form><form><span id=\"text_form1\">\"0\"- auto or from the playlist :</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"21\"></div></form><form><span>Start playback after reading </span></form><form><span> from 10 to 50 ( % ) of total buffer size.</span></form><form><span id=\"text_form1\">\"0\"- auto or from the playlist :</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"22\"></div></form><form><span id=\"text_form1\">Bottom help panel  </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"23\"></div></form><form><span id=\"text_form1\">Post MAC address </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"24\"></div></form><form><span id=\"text_form1\">Masking a TV browser </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"25\"></div></form><form><span id=\"text_form1\">Limit the video quality </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"26\"></div></form><form><span id=\"text_form1\">Choose Weather Forecast for </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"27\"></div></form><form><span id=\"text_form1\">Reset to default </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"28\"></div></form><form></form><form></form><form></form><form></form><form></form><form></form><form></form><form></form></div>", //1294
	/*ok*/ "##", //1295
	/*ok*/ "###", //1296
	/*ok*/ "####", //1297
	/*ok*/ "52px", //1298
	/*ok*/ "black", //1299
	/*ok*/ "#999999", //1300
	/*ok*/ "border", //1301
	/*ok*/ "2px solid #ffffff", //1302
	/*ok*/ "blue", //1303
	/*ok*/ "#eeeeee", //1304
	/*ok*/ "2px solid #999999", //1305
	/*ok*/ "reload", //1306
	/*ok*/ "Main|IP-TV|Films|Series", //1307
	/*ok*/ "write", //1308
	/*ok*/ "01", //1309
	/*ok*/ "display", //1310
	/*ok*/ "block", //1311
	/*ok*/ "none", //1312
	/*ok*/ "getElementsByClassName", //1313
	/*ok*/ "s=", //1314
	/*ok*/ "signature=", //1315
	/*ok*/ "http://185.25.119.98/php/youtubesign/youtube.php?sig=", //1316
	/*ok*/ "itag%3D", //1317
	/*ok*/ "HD 1080p.mp4", //1318
	/*ok*/ "121", //1319
	/*ok*/ "37", //1320
	/*ok*/ "HD 720p.mp4", //1321
	/*ok*/ "120", //1322
	/*ok*/ "HD 720p.h264", //1323
	/*ok*/ "84", //1324
	/*ok*/ "480p.flv", //1325
	/*ok*/ "360p.mp4", //1326
	/*ok*/ "240p.mp4", //1327
	/*ok*/ "36", //1328
	/*ok*/ "url=", //1329
	/*ok*/ "sig=", //1330
	/*ok*/ "&s=", //1331
	/*ok*/ "&el=embedded", //1332
	/*ok*/ "&el=detailpage", //1333
	/*ok*/ "&el=vevo", //1334
	/*ok*/ "http://www.youtube.com/get_video_info?&video_id=", //1335
	/*ok*/ "&ps=default&eurl=&gl=US&hl=en", //1336
	/*ok*/ "itag", //1337
	/*ok*/ "%2C", //1338
	/*ok*/ "itag=43", //1339
	/*ok*/ "itag=", //1340
	/*ok*/ "&url=", //1341
	/*ok*/ "vkontakte.ru", //1342
	/*ok*/ "vk.com", //1343
	/*ok*/ "=", //1344
	/*ok*/ "/assets/video/", //1345
	/*ok*/ "vkid=", //1346
	/*ok*/ ".vk.flv", //1347
	/*ok*/ "u", //1348
	/*ok*/ "/videos/", //1349
	/*ok*/ "720.mp4", //1350
	/*ok*/ "720p.mp4", //1351
	/*ok*/ "480.mp4", //1352
	/*ok*/ "480p.mp4", //1353
	/*ok*/ "360.mp4", //1354
	/*ok*/ "240.mp4", //1355
	/*ok*/ "http://rutube.ru/api/oembed/?url=", //1356
	/*ok*/ "&format=xml", //1357
	/*ok*/ "http://rutube.ru/play/embed/", //1358
	/*ok*/ "\"m3u8\":", //1359
	/*ok*/ "reverse", //1360
	/*ok*/ "Loading EPG...", //1361
	/*ok*/ "Ya_ready_timeout", //1362
	/*ok*/ "ukErr();", //1363
	/*ok*/ "YaHTTP", //1364
	/*ok*/ "Loaded!", //1365
	/*ok*/ "J = ", //1366
	/*ok*/ "<li><font style=\"color:#00ccff;\">", //1367
	/*ok*/ "<li><font style=\"color:#ffcc00;\">", //1368
	/*ok*/ "<li><font style=\"color:#ffeeee;\">", //1369
	/*ok*/ "</font><font style=\"color:#CCCCCC;\">", //1370
	/*ok*/ "</font></li>", //1371
	/*ok*/ "<ul>", //1372
	/*ok*/ "  ", //1373
	/*ok*/ "</ul>", //1374
	/*ok*/ "it-", //1375
	/*ok*/ "__________This is run", //1376
	/*ok*/ "http://nebo.ddns.net:8881/epg_ita_temp.php?ch=", //1377
	/*ok*/ "_________________b: ", //1378
	/*ok*/ "uk_prog_info_arr", //1379
	/*ok*/ "temp_uk_epg_info_arr", //1380
	/*ok*/ "http://bleb.org/tv/channel.html?ch=", //1381
	/*ok*/ "&all", //1382
	/*ok*/ "_____2____________b: ", //1383
	/*ok*/ "Loading UK EPG...", //1384
	/*ok*/ "<table class=\"listings\">", //1385
	/*ok*/ "<tr>", //1386
	/*ok*/ "<b>", //1387
	/*ok*/ "</b>&nbsp;", //1388
	/*ok*/ "Loading ITA EPG...", //1389
	/*ok*/ "<div class=\"gen dataz\">", //1390
	/*ok*/ "Array MA", //1391
	/*ok*/ "\">", //1392
	/*ok*/ "</a>", //1393
	/*ok*/ "&flag=", //1394
	/*ok*/ "/program/", //1395
	/*ok*/ "channel=", //1396
	/*ok*/ "http:", //1397
	/*ok*/ "https://m.tv.yandex.", //1398
	/*ok*/ "/channels/", //1399
	/*ok*/ "?period=all-day", //1400
	/*ok*/ ": <font style='font-size:16px;color:cyan;'>", //1401
	/*ok*/ "toDateString", //1402
	/*ok*/ "</font> : <font style='font-size:16px;color:white;'>scroll page</font><font style='font-size:16px;color:cyan;'> P-/P+ </font> :", //1403
	/*ok*/ "setDate", //1404
	/*ok*/ "date=", //1405
	/*ok*/ "&period=all-day", //1406
	/*ok*/ "temp_ya_epg_info_arr", //1407
	/*ok*/ "join", //1408
	/*ok*/ "Nothing Found!", //1409
	/*ok*/ "Err();", //1410
	/*ok*/ "<span class=\"tv-event__time\">", //1411
	/*ok*/ "<span class=\"tv-event__time-text\">", //1412
	/*ok*/ "</span>", //1413
	/*ok*/ "<span class=\"tv-event-title\">", //1414
	/*ok*/ "Deleting Yandex database", //1415
	/*ok*/ "location.reload(true);", //1416
	/*ok*/ "https://tv.yandex.", //1417
	/*ok*/ "/channels", //1418
	/*ok*/ "connection", //1419
	/*ok*/ "structure", //1420
	/*ok*/ "<img class=\"b-icon\" src=\"", //1421
	/*ok*/ "<td class=\"l-suplayout__rotator\">", //1422
	/*ok*/ "https:", //1423
	/*ok*/ "alt=", //1424
	/*ok*/ "data-id=", //1425
	/*ok*/ "Error ", //1426
	/*ok*/ "___Get-UK-EPGInfo is running", //1427
	/*ok*/ "uk_epg_info_arr", //1428
	/*ok*/ "<li><font style=\"color:#ffcc00;font-size:20px;font-weight:bold;\">", //1429
	/*ok*/ "</font><font style=\"color:#CCCCCC;font-size:20px;font-weight:bold;\">", //1430
	/*ok*/ "TIME _ HOURS_ MIN ", //1431
	/*ok*/ "temp_epg_info", //1432
	/*ok*/ "<font style='color:#00ccff;font-weight:bolder;padding-left:10px;'>", //1433
	/*ok*/ "http://nebo.", //1434
	/*ok*/ "q=", //1435
	/*ok*/ "http://tvqb.ru/", //1436
	/*ok*/ "user=", //1437
	/*ok*/ "action=get_test_url&s_key=", //1438
	/*ok*/ "hash =", //1439
	/*ok*/ "action=get_result_url_hash&s_key=", //1440
	/*ok*/ "&hash=", //1441
	/*ok*/ "md5hash", //1442
	/*ok*/ "vk.com/video_ext.php?", //1443
	/*ok*/ "/vkontakte.php?video", //1444
	/*ok*/ "vkontakte.ru/video_ext.php", //1445
	/*ok*/ "/vkontakte/vk_kinohranilishe.php?id=", //1446
	/*ok*/ "youtube.com/watch?v=", //1447
	/*ok*/ "youtube.com/embed", //1448
	/*ok*/ "embed/", //1449
	/*ok*/ ".html", //1450
	/*ok*/ "md4hash", //1451
	/*ok*/ "start_logo", //1452
	/*ok*/ "url(http://neb0.no-ip.biz:8881/pic/IPTVxBG.jpg)", //1453
	/*ok*/ "visibility", //1454
	/*ok*/ "visible", //1455
	/*ok*/ "url(http://neb0.no-ip.biz:8881/pic/set-bg.jpg)", //1456
	/*ok*/ "hidden", //1457
	/*ok*/ "scroll", //1458
	/*ok*/ "scroll_line", //1459
	/*ok*/ "http://nebo.ddns.net:8881/weather_new.php?city=", //1460
	/*ok*/ "weather_icons", //1461
	/*ok*/ "temp", //1462
	/*ok*/ "/weather_temp_new.php?city=",
	/*ok*/ "abs", //1464
	/*ok*/ "new top=", //1465
	/*ok*/ "460px", //1466
	/*ok*/ "ACCESS DENIED", //1467
	/*ok*/ "<b style=\"color:yellow\">", //1468
	/*ok*/ "url(", //1469
	/*ok*/ ")", //1470
	/*ok*/ "<p><b style=\"color:#FFFFFF;font-size:14px;\">", //1471
	/*ok*/ "</b> ", //1472
	/*ok*/ "</p>", //1473
	/*ok*/ "Hello! I am an alert box!", //1474
	/*ok*/ "setWindowPosition", //1475
	/*ok*/ "confirm_text", //1476
	/*ok*/ "<img src=\"http://nebo.ddns.net:8881/pic/bg.jpg\" ></img><br><b style=\"color:EF5C0C;font-size:14px\">Welcome to IPTV<i>x </i>World!!!</b><br><i style=\"font-size:12px\">Courtesy of Multiviewer.TV</i><br><b style=\"color:EF5C0C;\">www.multiviewer.tv</b>", //1477
	/*ok*/ "setContents", //1478
	/*ok*/ "turnPopup", //1479
	/*ok*/ "btn_ok", //1480
	/*ok*/ "popWindow", //1481
	/*ok*/ "setWindowPosition1", //1482
	/*ok*/ "<img src=\"http://nebo.ddns.net:8881/pic/bg-update.jpg\" ></img>", //1483
	/*ok*/ "confirm", //1484
	/*ok*/ "backgroundColor", //1485
	/*ok*/ "b_ok", //1486
	/*ok*/ "#5fbaff", //1487
	/*ok*/ "setByttonStyleOnFocus", //1488
	/*ok*/ "getAttribute", //1489
	/*ok*/ "#0866aa", //1490
	/*ok*/ "b_canc", //1491
	/*ok*/ "setByttonStyleOnBlur", //1492
	/*ok*/ "KeyDown", //1493
	/*ok*/ "Options Key code : ", //1494
	/*ok*/ "closeWindow", //1495
	/*ok*/ "btn_canc", //1496
	/*ok*/ "selectButton" //1497
];

var widgetAPI = new Common.API.Widget();
var pluginAPI = new Common.API.Plugin();
var tvKey = new Common.API.TVKeyValue();

var Main = {
    setup_id: "",
    YaHTTP: null,
    Ya_ready_timeout: null,
    XML_URL: "",
    loading_pl: false,
    pre_selected_channel: 0,
    selected_channel: 0,
    selected_page: 0,
    chan_array_index: 0,
    play_selected_channel: 0,
    play_selected_page: 0,
    play_chan_array_index: 0,
    PlayerMode: "",
    yandextv_mode: false,
    ya_all_day: false,
    ya_base_info: false,
    Ya_flag_step: 0,
    Ya_flag_name: "",
    ya_prog_id: -1,
    temp_epg_info: "",
    epg_info_step: 0,
    epg_t1: 0,
    epg_t2: 0,
    ch_index: "",
    ya_prog_info_arr: [],
    ya_epg_info_arr: [],
    uk_epg_info_arr: [],
    uk_prog_info_arr: [],
    temp_ya_epg_info_arr: [],
    temp_uk_epg_info_arr: [],
    ya_auto: false,
    guide: false,
    block_info: false,
    write: false,
    usb_info: "",
    lost_date: "",
    lost_chname: "",
    scrolling: 0,
    load_timer: null,
    prev_pl_array: [],
    playlist_prev: false,
    prev_ch_array: [],
    url_arr: [],
    fav_name: "",
    fav_num: 1,
    fav_url: "",
    temp_fav_name: "",
    temp_fav_num: 1,
    temp_fav_url: "",
    block_fav: false,
    play_prev: true,
    help_step: 0,
    help_info: false,
    MAC: "",
    audio_output_device: "",
    hardware: "",
    hardware_type: "",
    ch_num: 0,
    name: "",
    url: "",
    pl_url: "",
    pre_pl_url: "",
    info: "",
    logo: "",
    ssize: -1,
    a_num: 0,
    buffer: 0,
    ibuffer: 0,
    timeshift: "",
    search_on: "",
    region: "",
    parser: "rulenone",
    usb_url: "",
    playlist_name: "",
    ret_url: "",
    hurl: "nebo.ddns.net",
    Kill: "",
    number_p: 1,
    step_read_dir: 1,
    FAV: false,
    DEL: false,
    RED: false,
    ret: false,
    search: false,
    start: false,
    Foto: false,
    xxx: false,
    Emu: false,
    seriesC: false,
    seriesE: false,
    seriesD: false,
    Tsnake: true,
    Supe_ext: true,
    FirstStart: true,
    Update_Page: false,
    SetZoom: false,
    Network: null,
    St: null,
    Audio: null,
    St_size: null,
    IntervalUpdateTime: null,
    SlideShowInterval: null,
    protocol: "http://",
    openWindow: null,
    txt: "mac=",
    trp: 81,
    version: "0.426",
    ver: "2.96"
};

Main.onLoad = function () {
    showImage();
    try {
        this.Network = getId("pluginNetwork");
        this.MAC = this.Network.GetMAC();
        this.St = getId("pluginStorage");
        this.Audio = getId("pluginAudio");
        this.audio_output_device = this.Audio.GetOutputDevice();
        var i = getId("pluginTV");
        this.hardware_type = i.GetProductType();
        this.hardware = i.GetProductCode(1);
        if (this.hardware == "LN40B650_KOR") {
            Main.Emu = true
        } else {
            if (this.hardware.indexOf("C") > 1) {
                Main.seriesC = true
            } else {
                if (this.hardware.indexOf("E") > 1 || (this.hardware.indexOf("C") < 0 && this.hardware.indexOf("D") < 0)) {
                    Main.seriesE = true;
                    var j = "IME_XT9/ime.js";
                    var l = document.createElement("script");
                    l.language = "javascript", l.type = "text/javascript", l.src = "$MANAGER_WIDGET/Common/" + j, document.body.appendChild(l)
                }
            }
        };
        if (Main.Emu) {
            alert("############## NOT FOR EMULATOR !!! ################");
            setTimeout(function(){ Location.reload(true); }, 2000)
        } else {
            if (API.init() && Player.init()) {
                window.onShow = Main.onShowEventTVKey;
                widgetAPI.sendReadyEvent();
                Display.status("Loading...", 2000);
                Display.loadingshow();
                setTimeout(function(){ Main.InitScript(); }, 2500)
            }
        }
    } catch (b) {}
};

Main.InitScript = function () {
    if (Main.Supe_ext) {
        Main.url_arr = [];
        if (API.star_url.indexOf("fav.dat") > 0) {
            Main.FAV = true;
            Main.openCommonFile(API.star_url)
        } else {
            if (API.star_url.indexOf("OpenFav") == 0) {
                if (API.fav_start_channels.length > 1) {
                    Main.ReadPlArr("OpenFav", API.fav_start_channels)
                } else {
                    Main.FAV = true;
                    Main.openCommonFile(Main.fav_url)
                }
            } else {
                API.XML_URL = API.star_url;
                API.Request(API.star_url)
            }
        };
        setTimeout(function(){ setGen(); }, 5000)
    };
    showWeather();
    showTemp();
    setTimeout(function(){ showScroll(); }, 800);
    setTimeout(function(){ confirm.popWindow(); }, 1000);
    setTimeout(function(){ confirm.closeWindow(); }, 5000)
};

SetVolume = function (o) {
    if (Main.audio_output_device == 3 || Main.hardware_type == 2) {
        Display.status("Not available !")
    } else {
        Main.Audio.SetVolumeWithKey(o);
        var l = Main.Audio.GetVolume();
        var j = "";
        var q = Math.round(0.44 + l * (1 - l / 360), 10);
        var p = l > 9 ? l : ("0" + l);
        for (var i = 0; i < q; i++) {
            j += "|"
        };
        Display.status("<b style='color:#00ccff;'>VOLUME</b> " + p + " <b style='color:yellow;'>" + j + "</b>")
    }
};

Main.onShowEventTVKey = function () {
    pluginAPI.setOffScreenSaver();
    pluginAPI.setOffIdleEvent();
    pluginAPI.SetBannerState(1);
    pluginAPI.unregistKey(tvKey.KEY_VOL_UP);
    pluginAPI.unregistKey(tvKey.KEY_VOL_DOWN);
    pluginAPI.unregistKey(tvKey.KEY_MUTE);
    pluginAPI.registKey(tvKey.KEY_MENU);
    pluginAPI.registKey(tvKey.KEY_GUIDE);
    pluginAPI.registKey(tvKey.KEY_SOURCE);
    pluginAPI.unregistKey(203);
    pluginAPI.unregistKey(204);
    pluginAPI.registKey(613);
    pluginAPI.registKey(105);
    pluginAPI.registKey(106);
    pluginAPI.registKey(309);
    pluginAPI.registKey(612);
    pluginAPI.registKey(1118);
    pluginAPI.registKey(1219);
    pluginAPI.registKey(84);
    pluginAPI.registKey(655);
    pluginAPI.registKey(650);
    pluginAPI.registKey(1089);
    pluginAPI.registKey(1057);
    pluginAPI.registKey(1083);
    pluginAPI.registKey(1078);
    pluginAPI.registKey(1080);
    pluginAPI.registKey(1086);
    pluginAPI.registKey(78);
    pluginAPI.registKey(1249)
};

curWidget.onWidgetEvent = function () {
    Main.onShowEventTVKey()
};

Main.registVOLTVKey = function () {
    pluginAPI.registKey(tvKey.KEY_VOL_UP);
    pluginAPI.registKey(tvKey.KEY_VOL_DOWN);
    pluginAPI.registKey(tvKey.KEY_PANEL_VOL_UP);
    pluginAPI.registKey(tvKey.KEY_PANEL_VOL_DOWN);
    pluginAPI.registKey(tvKey.KEY_MUTE)
};

Main.ResetSelectedPosition = function () {
    this.selected_channel = 0;
    this.selected_page = 0;
    this.chan_array_index = 0;
    if (!this.guide && !Main.help_info) {
        this.prev_ch_array = []
    }
};

Main.SaveSelectedPosition = function () {
    this.play_selected_channel = this.selected_channel;
    this.play_selected_page = this.selected_page;
    this.play_chan_array_index = this.chan_array_index
};

Main.SetSelectedPosition = function () {
    this.selected_channel = this.play_selected_channel;
    this.selected_page = this.play_selected_page;
    this.chan_array_index = this.play_chan_array_index
};

Main.SetFavSelectedPosition = function () {
    Main.fav_num = Main.temp_fav_num;
    Main.fav_name = Main.temp_fav_name;
    Main.fav_url = Main.temp_fav_url
};

Main.showCategorySelector = function () {
    getIdn("rightHalf");
    KeyHandler.setFocus(4);
    Selectbox.setBox("CATEGORIES", API.categories);
    getId("selectbox").style.top = "60px";
    getId("selectbox").style.left = "550px"
};

Main.showFavSelector = function () {
    getIdn("rightHalf");
    KeyHandler.setFocus(4);
    Selectbox.setBox("Select Favourites", API.favorites);
    getId("selectbox").style.top = "60px";
    getId("selectbox").style.left = "550px"
};

Main.showSiseSelector = function () {
    KeyHandler.setFocus(4);
    Selectbox.setBox("Size Selector", Main.url_arr);
    getId("selectbox").style.top = "120px";
    getId("selectbox").style.left = "330px"
};

Main.Menu = function () {
    if (Main.FirstStart) {
        if ((API.Timemode == 0 || API.Timemode == 1)) {
            setTimeout(function(){ }, 500)
        }
    };
	setTimeout(function(){ Main.FirstStart=false; }, 3000);
    clearTimeout(this.load_timer);
    if (!Main.search && !Main.xxx) {
        Display.hidestatus()
    };
    getIdn("statusbar1");
    Display.hideplayer();
    Display.loadinghide();
    API.AsReqMode = true;
    this.FAV = false;
    this.xxx = false;
    this.help_info = false;
    this.block_info = false;
    this.loading_pl = false;
    this.block_fav = false;
    this.SetZoom = false;
    this.playlist_prev = true;
    this.pre_pl_url = API.XML_URL;
    getIdn("selectbox");
    getIdn("help_set_par");
    getIdb("rightHalf");
    getIdn("infoList");
    getIdn("ya_date");
    getIdn("ya_info");
    getIdn("ya_help");
    Main.UpdateHelpBar();
    if (this.RED) {
        KeyHandler.setFocus(5)
    } else {
        if (Main.guide) {
            KeyHandler.setFocus(6)
        } else {
            KeyHandler.setFocus(0)
        }
    };
    Main.updatePage();
    getIdb("channelList");
    getIdb("main")
};

Main.UpdateHelpBar = function () {
    getIdn("0_help");
    getIdn("1_help");
    getIdb("2_help");
    getIdn("3_help");
    getIdn("3.1_help");
    getIdn("3.1_help");
    getIdn("3.2_help");
    getIdn("3.21_help");
    getIdn("3.3_help");
    getIdn("3.4_help");
    getIdb("4_help");
    getIdn("4.1_help");
    getIdb("5_help");
    getIdn("5.1_help");
    getIdb("6_help");
    getIdn("7_help");
    getIdn("8_help");
    getIdn("9_help");
    getIdn("10_help");
    getIdn("10.1_help");
    getIdn("11_help");
    getIdn("12_help");
    if (API.XML_URL.indexOf("fav.dat") > 0 && !Main.guide) {
        Main.FAV = true;
        Main.fav_url = API.XML_URL;
        if (!this.RED) {
            var i = "Favourites" + Main.fav_num + " - \"" + Main.fav_name + "\"";
            if (API.favorites.length > 1) {
                getIdb("3.3_help")
            };
            getIdb("3.4_help")
        } else {
            i = "Edit Favourites" + Main.fav_num + " - \"" + Main.fav_name + "\"";
            getIdn("2_help");
            getIdb("3.2_help");
            if (API.favorites.length > 1) {
                getIdb("3.21_help")
            };
            getIdn("5_help");
            getIdn("6_help")
        }
    } else {
        if (API.XML_URL.indexOf("help") > 0) {
            Main.help_info = true;
            i = "HELP";
            getIdn("2_help");
            getIdb("10_help");
            getIdb("4.1_help")
        } else {
            if (Main.guide) {
                i = "EPG v." + this.version;
                this.yandextv_mode = true;
                getIdn("2_help");
                getIdn("5_help");
                getIdn("6_help");
                getIdb("4.1_help");
                getIdb("10.1_help");
                if (!Main.ya_all_day) {
                    this.selected_channel = 1
                }
            } else {
                if (API.XML_URL.indexOf("Open") < 0) {
                    getIdb("3.1_help")
                };
                if (API.categories.length > 2) {
                    getIdb("3_help")
                };
                if (API.XML_URL.indexOf("history.dat") > 0) {
                    i = "History";
                    getIdb("5.1_help")
                } else {
                    i = "<b style=\"color:00cbfe;\">IPTV<i>x </i></b><b style=\"font-size:16px;color:cyan;\"> v." + this.ver + "<b style=\"font-size:12px;\">  @</b><b style=\"font-size:16px;\">2016</b>"
                }
            }
        }
    };
    if (Player.state != Player.STOPPED) {
        getIdb("1_help");
        if (Player.state == Player.PLAYING_VOD && !this.RED) {
            getIdb("8_help")
        };
        getId("background").style.backgroundImage = "url(img/bg.png)"
    } else {
        KeyHandler.guide_step = 0;
        getIdb("0_help");
        getId("background").style.backgroundImage = "url(img/us_bg.png)";
        if (this.prev_pl_array.length > 0) {
            if (API.categories.length < 3 && !Main.FAV && !Main.guide && API.XML_URL.indexOf("history.dat") < 0) {
                getIdb("9_help")
            };
            if (API.XML_URL.indexOf("start.xml") == 0) {
                Display.status(API.XML_URL);
                if (Main.Kill != "") {
                    API.Xcode = Main.Kill
                }
            }
        } else {
            if (API.XML_URL.indexOf("start.xml") != 0) {
                getIdn("6_help");
                if (!this.RED) {
                    getIdb("7_help")
                };
                if (API.categories.length < 3 && !Main.FAV && !Main.guide) {
                    getIdb("9_help")
                }
            } else {
                if (Main.Kill != "") {
                    API.Xcode = Main.Kill
                };
                getIdn("6_help");
                getIdb("9_help")
            }
        }
    };
    if (Main.seriesE) {
        getId("widget_date").style.left = "540px";
        getId("widget_time").style.left = "850px"
    };
    getIdb("background");
    if (API.XML_URL.indexOf("OpenFav") == 0 || Main.help_info) {
        Main.block_fav = true
    };
    widgetAPI.putInnerHTML(getId("version"), i);
    showWeather();
    showTemp()
};

LogoStyle = function (j, q, i) {
    var p, o;
    if (i == 1 && (API.Forma == 1 || API.Forma == 3)) {
        p = "67px";
        o = "54px"
    } else {
        if (i == 1) {
            p = "75px";
            o = "38px"
        } else {
            if (API.Forma == 1 || API.Forma == 3) {
                p = "80px";
                o = "66px";
                if (q != "") {
                    getId("p_bg_num_logo").style.backgroundImage = "url(img/bgn02.png)"
                } else {
                    getId("p_bg_num_logo").style.backgroundImage = "url(img/bgn03.png)"
                }
            } else {
                p = "90px";
                o = "46px";
                if (q != "") {
                    getId("p_bg_num_logo").style.backgroundImage = "url(img/bgn01.png)"
                } else {
                    getId("p_bg_num_logo").style.backgroundImage = "url(img/bgn03.png)"
                }
            }
        }
    };
    getId(j).src = q;
    getId(j).style.left = p;
    getId(j).style.width = o
};

Main.updatePage = function () {
    try {
        clearTimeout(this.load_timer);
        this.Update_Page = false;
        this.ret = false;
        var p = 10;
        this.selected_page = (this.selected_page > API.chan_pages - 1) ? 0 : (this.selected_page < 0) ? API.chan_pages - 1 : this.selected_page;
        for (var q = 0; q < 10; q++) {
            getIdb("ch" + q)
        };
        if (this.selected_page == API.chan_pages - 1) {
            p = API.last_page_channels_counter;
            for (var q = p; q < 10; q++) {
                getIdn("ch" + q)
            };
             if (this.selected_channel > API.last_page_channels_counter - 1) {
                this.selected_channel = API.last_page_channels_counter - 1
            }
        };
        Main.UpdateChannelBar();
        alert("THIS IS RUNNING Update Channel");
        for (var q = 0; q < p; q++) {
            var o = 10 * this.selected_page + q;
            if (Main.guide) {
                widgetAPI.putInnerHTML(getId("number" + q), API.channels[o][10])
            } else {
                widgetAPI.putInnerHTML(getId("number" + q), o + 1)
            };
            var i = (dPr(API.channels[o][2]) != "") ? getLogo1(dPr(API.channels[o][5]), dPr(API.channels[o][2])) : getLogo2(lrdPr(API.channels[o][0]), API.channels[o][3], dPr(API.channels[o][5]));
            LogoStyle("img" + q, i, 1);
            var u = (API.channels[o][0].toLowerCase().indexOf("Install the original version") >= 0) ? "Access denied!" : API.channels[o][0];
            widgetAPI.putInnerHTML(getId("title" + q), u)
        };
        if (this.number_p > 0) {
            this.ret = true;
            var s = "";
            if (API.channels.length > 10) {
                s = "<b style=\"font-size:16px;color:white\"> - [  This portal has <font color=#00ccff>" + API.channels.length + "</font> links  ]</b>"
            };
            if (API.XML_URL.indexOf(".xml") > 0 || API.XML_URL.indexOf(".m3u") > 0 || API.XML_URL.indexOf("=m3u") > 0) {
                widgetAPI.putInnerHTML(getId("version"), "<b style=\"color:00cbfe;\">IPTV<i>x </i></b><b style=\"font-size:16px;color:cyan;\"> v." + this.ver + "<b style=\"font-size:12px;\">  @</b><b style=\"font-size:16px;\">2016 </b></font>" + s);
                if (API.XML_URL.indexOf("help") > 0) {
                    widgetAPI.putInnerHTML(getId("version"), "<b style=\"color:00cbfe;\">HELP </b><b style=\"font-size:16px;color:cyan;\"> [ user guide ] </font>" + s)
                };
                if (API.XML_URL.indexOf("Mix") > 0) {
                    widgetAPI.putInnerHTML(getId("version"), "<b style=\"color:00cbfe;\">EUROPE </b><b style=\"font-size:16px;color:cyan;\"> [ mix ] </font>" + s)
                };
                if (API.XML_URL.indexOf("films") > 0) {
                    widgetAPI.putInnerHTML(getId("version"), "<b style=\"color:00cbfe;\">HOME </b><b style=\"font-size:16px;color:cyan;\"> [ cinema ] </font>" + s)
                };
                if (API.XML_URL.indexOf("kids") > 0) {
                    widgetAPI.putInnerHTML(getId("version"), "<b style=\"color:00cbfe;\">KIDS </b><b style=\"font-size:16px;color:cyan;\"> [ cinema ] </font>" + s)
                };
                if (API.XML_URL.indexOf("tutorials") > 0) {
                    widgetAPI.putInnerHTML(getId("version"), "<b style=\"color:00cbfe;\">VOD </b><b style=\"font-size:16px;color:cyan;\"> [ tutorial ] </font>" + s)
                }
            }
        };
        if (KeyHandler.Focus == 0 || KeyHandler.Focus == 5 || KeyHandler.Focus == 6) {
            Main.LoadTimer(function() { Main.updateChannel(); }, 100)
        } else {
            Main.updateChannel()
        }
    } catch (f) {}
};

getLogo1 = function (p, o) {
    var i = "logos/";
    if (o.indexOf(":") >= 0) {
        if (API.Forma == 0 || API.Forma == 1) {
            i = ""
        } else {
            o = (p != "") ? "logos/blue_folder.png" : "logos/image.png"
        }
    };
    o = i + o;
    return o
};

getLogo2 = function (o, i, q) {
    o = lrdPr(o);
    var p = "";
    if (API.XML_URL.indexOf("help") > 0) {
        p = "logos/help.png"
    } else {
        if (q != "") {
            p = "logos/blue_folder.png"
        } else {
            if (API.Forma == 0 || API.Forma == 1) {
                if (Main.ya_auto && !isNaN(i) && i > 0 && i < 2000) {
                    p = Ya_icon_index_url_obj[i]
                };
                if (Main.ya_auto && lrdPr(o) != "" && (p == undefined || isNaN(i) || i < 1 || i > 1999)) {
                    p = Ya_icon_name_url_obj[lrdPr(o).toLowerCase().replace(/\_/g, " ")]
                };
                if (p == undefined || !Main.ya_auto) {
                    p = (lrdPr(o) != "" && dPr(i) != "") ? "logos/blue_folder.png" : "logos/image.png"
                }
            } else {
                p = "logos/image.png"
            }
        }
    };
    return p
};

Main.UpdateChannelBar = function () {
    getId("chan" + this.pre_selected_channel).style.backgroundImage = "";
    getId("number" + this.pre_selected_channel).style.backgroundImage = "";
    getId("title" + this.pre_selected_channel).style.color = "#CBCBCB";
    getId("number" + this.selected_channel).style.backgroundImage = "url(img/number_bar.png)";
    getId("chan" + this.selected_channel).style.backgroundImage = "url(img/chan_bar.png)";
    getId("title" + this.selected_channel).style.color = "#FFFFFF";
    this.pre_selected_channel = this.selected_channel
};

Main.updateChannel = function () {
    clearTimeout(this.load_timer);
    if (KeyHandler.Focus == 0 || KeyHandler.Focus == 5 || KeyHandler.Focus == 6) {
        YaAbort();
        getIdn("infoList");
        getIdn("ya_date");
        getIdn("ya_info");
        Main.UpdateChannelBar()
    };
    Main.Update_Page = true;
    if (KeyHandler.Focus == 0 && !this.block_info) {
        Main.LoadTimer(function() { Main.UpdateChannelInfo(); }, 200)
    } else {
        Main.UpdateChannelInfo()
    }
};

Main.UpdateChannelInfo = function () {
    Main.scrolling = 0;
    Main.ya_base_info = false;
    this.chan_array_index = 10 * this.selected_page + this.selected_channel;
    this.ch_num = this.chan_array_index + 1;
    this.name = Ach(0);
    if (!Main.s_url) {
        this.url = Ach(1);
        this.pl_url = Ach(5)
    };
    this.logo = Ach(2);
    if (Player.state == Player.STOPPED) {
        this.ssize = Ach(6);
        this.a_num = Ach(7)
    };
    this.buffer = Ach(8);
    this.ibuffer = Ach(9);
    this.timeshift = Ach(10);
    this.region = Ach(11);
    this.parser = decLongUrl(Ach(12));
    this.search_on = Ach(13);
    if (!Main.block_info && KeyHandler.Focus != 5 && KeyHandler.Focus != 1) {
        var i = "";
        if (this.url != "") {
            var y = this.url.toString();
            alert("this.url= " + y);
            i = GetYindex()
        };
        if (i != "") {
            Main.yandextv_mode = true;
            Main.ya_all_day = false;
            T.delta = 0;
            Main.Ya_flag_step = 0;
            if (!Main.FirstStart) {
                YandexGetUrl(i)
            } else {
                Main.LoadTimer(function() { YandexGetUrl(GetYindex()); }, 1000)
            }
        } else {
            this.yandextv_mode = false;
            var z = Ach(3).toString();
            alert("Ach(3)= " + z);
            if (Ach(3) != "" && z.indexOf("epg_url:") >= 0) {
                var w = z.split("|");
                alert("cutted ee[0] =" + w[0]);
                var A = w[0].split(":");
                alert("cutted url =" + A[1] + ":" + A[2]);
                var x = Main.protocol + A[1] + ":" + A[2] + "?reg=" + w[1] + "&chan=" + w[2] + "&pass=PaCcT0$33v247&friendly=1";
                alert("request =" + x);
                EUROGetEPG(x)
            } else {
                Main.showinfoList(Ach(3));
                if (typeof z == "string" && z != "" && z.indexOf("<") != 0) {
                    UKGetUrl(i, z)
                }
            }
        }
    };
    this.block_info = false
};

GetYindex = function () {
    var i = (Ach(3) != "" && Ach(3).indexOf("/m.tv.yandex.") > 0) ? Ach(3) : (!isNaN(Ach(3)) && Ach(3) > 0 && Ach(3) < 2000) ? Ach(3) : (Main.ya_auto && Main.name != "") ? Ya_name_index_obj[Main.name.toLowerCase().replace(/\_/g, " ")] : "";
    if (i == undefined) {
        i = ""
    };
    alert("Yindex= " + i);
    return i
};

Main.UpdatePlayerStatusbar = function () {
    widgetAPI.putInnerHTML(getId("ch_number"), this.ch_num);
    widgetAPI.putInnerHTML(getId("ch_name"), Main.name);
    var i = (Main.logo != "") ? getLogo1(Main.pl_url, Main.logo) : getLogo2(Main.name, Ach(3), Main.pl_url);
    LogoStyle("ch_img", i, 0)
};

Main.LoadTimer = function (o, i) {
    clearTimeout(this.load_timer);
    this.load_timer = setTimeout(o, i)
};

Main.showinfoList = function (o) {
    document.getElementById("scroll_cursor").style.top = "80px";
    if (KeyHandler.Focus == 0 || KeyHandler.Focus == 6) {
        getIdn("infoList");
        getIdn("ya_date");
        getIdn("ya_info");
        widgetAPI.putInnerHTML(getId("infoList"), "");
        if (!this.yandextv_mode || Main.guide) {
            getIdn("ya_help");
            var i = "";
            var p = "";
            if (API.playlist_name != "") {
                p = "<table width=\"100%\"><tr><td style=\"text-align:center;font-size:20px;color:#00ccff\">" + API.playlist_name + "</td></tr></table><table width=\"100%\"><tr height=\"2px\" bgcolor=\"#00cdfe\"><td></td></tr></table>"
            };
            if (API.prev_page_text != "" && (API.prev_page_url != "" || (this.url == "" && API.prev_page_text.indexOf("Back to start") == -1))) {
                i += "<td><img src='img/buttons/rew.png'></img></td><td>" + API.prev_page_text + "</td>"
            } else {
                if (API.prev_page_url != "") {
                    i += "<td><img src='img/buttons/rew.png'></img></td><td>Prev</td>"
                }
            };
            if (API.next_page_text != "" && (API.next_page_url != "" || (this.url == "" && API.next_page_text.indexOf("Back to start") == -1))) {
                i += "<td><img src='img/buttons/ff.png'></img></td><td>" + API.next_page_text + "</td>"
            } else {
                if (API.next_page_url != "") {
                    i += "<td><img src='img/buttons/ff.png'></img></td><td>Next</td>"
                }
            };
            if (API.next_page_url != "" || API.prev_page_url != "") {
                i += "<td><img src='img/buttons/blue.png'></img></td><td>Back to start</td>"
            };
            if (i != "") {
                i = "<table><tr>" + i + "</tr></table>"
            };
            if (o == "" || o == 0) {
                i += "no additional information available";
                o = ""
            };
            i = "<div id=\"allInfo\">" + p + i + o + "<div>";
            widgetAPI.putInnerHTML(getId("infoList"), i);
            if (API.playlist_name != "") {
                getId("allInfo").style.top = "5px"
            } else {
                getId("allInfo").style.top = "10px"
            };
            getIdb("infoList")
        } else {
            i = "<div id=\"allInfo\">" + o + "<div>";
            widgetAPI.putInnerHTML(getId("ya_date"), "");
            widgetAPI.putInnerHTML(getId("ya_date"), Main.lost_date + Main.Ya_flag_name);
            widgetAPI.putInnerHTML(getId("ya_info"), "");
            widgetAPI.putInnerHTML(getId("ya_info"), i);
            getId("allInfo").style.top = "0px";
            getIdb("ya_date");
            getIdb("ya_info");
            getIdb("ya_help")
        }
    }
};

Main.PlayPrevChannel = function () {
    var i = this.prev_ch_array.length - 1;
    if (i > 0) {
        var o = this.prev_ch_array[i - 1];
        this.selected_channel = o[0];
        this.selected_page = o[1];
        this.chan_array_index = o[2];
        Main.yandextv_mode = true;
        Main.UpdateChannelInfo();
        Main.PlayChannel();
        Display.status("Previous channel", 500)
    } else {
        Display.status("Starting channel", 500)
    }
};

Main.SavePrevChannel = function () {
    if (this.play_prev) {
        var i = [this.selected_channel, this.selected_page, this.chan_array_index];
        this.prev_ch_array.push(i)
    }
};

Main.PlayPrevPlaylist = function () {
    if (KeyHandler.bl && this.prev_pl_array.length > this.number_p) {
        if (this.url != "" && (API.next_page_url == "" || API.prev_page_url == "")) {
            this.number_p++
        };
        for (var l = 0; l < this.number_p - 1; l++) {
            this.prev_pl_array.pop()
        };
        this.number_p = 1
    };
    var i = this.prev_pl_array.length - 1;
    if (i > -1) {
        var j = this.prev_pl_array[i];
        this.pl_url = j[0];
        this.selected_channel = j[1];
        this.selected_page = j[2];
        this.chan_array_index = j[3];
        this.number_p = j[4];
        this.fav_name = j[5];
        this.fav_num = j[6];
        var q = [];
        var p = [];
        var o = [];
        q = j[7];
        o = j[8];
        p = j[9];
        this.prev_pl_array.pop();
        this.playlist_prev = false;
        Main.DEL = true;
        KeyHandler.bl = false;
        Main.guide = false;
        Main.RED = false;
        API.search_on = "";
        if (this.pl_url.indexOf("starthelp.xml") == -1) {
            this.help_info = false
        };
        if (this.pl_url.indexOf(".dat") > 0) {
            Main.openCommonFile(this.pl_url)
        } else {
            if (q.length > 0) {
                Main.ReadPlArr(this.pl_url, q, o, p);
                API.playlist_name = j[10];
                API.prev_page_url = j[11];
                API.prev_page_text = j[12];
                API.next_page_url = j[13];
                API.next_page_text = j[14]
            } else {
                if (Main.name.indexOf("-=SEARCH=-") == 0) {
                    Main.name = ""
                };
                this.search_on = "";
                Main.playlist()
            }
        }
    } else {
        if (API.XML_URL.indexOf("start.xml") != 0) {
            this.start = true;
            Main.DEL = false;
            Main.playlist()
        } else {
            Display.status("Main playlist!", 500)
        }
    }
};

Main.SavePrevPlaylist = function () {
    if (this.playlist_prev) {
        var p = [];
        var o = [];
        if (API.channels.length < 500 && API.XML_URL.indexOf(".dat") < 0) {
            p = API.channels;
            if (API.categories.length > 2 && API.all_channels.length > API.channels.length) {
                o = API.all_channels
            }
        };
        var i = [API.XML_URL, this.selected_channel, this.selected_page, this.chan_array_index, this.number_p, this.temp_fav_name, this.temp_fav_num, p, o, API.categories, API.playlist_name, API.prev_page_url, API.prev_page_text, API.next_page_url, API.next_page_text];
        this.prev_pl_array.push(i);
        this.playlist_prev = false
    }
};

Main.selectNextChannel = function () {
    if (Main.Update_Page) {
        this.selected_channel++;
        if (this.selected_channel >= 10 || (this.selected_page == API.chan_pages - 1 && this.selected_channel == API.last_page_channels_counter)) {
            this.selected_channel = 0;
            this.selected_page++;
            Main.updatePage()
        } else {
            Main.updateChannel()
        }
    }
};

Main.selectPrevChannel = function () {
    if (Main.Update_Page) {
        this.selected_channel--;
        if (this.selected_page == 0 && this.selected_channel < 0) {
            this.selected_channel = API.last_page_channels_counter - 1;
            this.selected_page = API.chan_pages - 1;
            Main.updatePage()
        } else {
            if (this.selected_channel < 0) {
                this.selected_channel = 9;
                this.selected_page--;
                Main.updatePage()
            } else {
                Main.updateChannel()
            }
        }
    }
};

function ListNextPage() {
    if (API.next_page_url != "") {
        Main.pl_url = API.next_page_url;
        Main.SavePrevPlaylist();
        Main.number_p++;
        if (Main.pl_url != "") {
            Main.PlayChannel()
        }
    } else {
        Display.status("Not Available!")
    }
}

Main.selectNextPage = function () {
    if (API.next_page_url != "" && this.selected_page == API.chan_pages - 1) {
        ListNextPage()
    } else {
        if (Main.Update_Page) {
            this.selected_page++;
            Main.updatePage()
        }
    }
};

function ListPrevPage() {
    if (API.prev_page_url != "") {
        Main.playlist_prev = false;
        Main.prev_pl_array.pop();
        Main.pl_url = API.prev_page_url;
        if (Main.number_p > 1) {
            Main.number_p--
        };
        if (Main.pl_url != "") {
            Main.PlayChannel()
        }
    } else {
        Display.status("Not Available!", 500)
    }
}

Main.selectPrevPage = function () {
    if (API.prev_page_url != "" && this.selected_page == 0) {
        ListPrevPage()
    } else {
        if (Main.Update_Page) {
            this.selected_page--;
            Main.updatePage()
        }
    }
};

Main.PlayChannel = function () {
    hideImage();
    try {
        clearTimeout(this.load_timer);
        if (this.pl_url != "" && this.pl_url.indexOf("stop") != 0) {
            if (this.pl_url.indexOf("rulenone") >= 0) {
                var B = Main.MAC;
                var z = 8800;
                a = Main.protocol;
                r = Main.txt;
                var o = r.replace("mac=", "txt=");
                var C = a + Main.hurl + ":" + eval(Main.trp + z) + "/sh/request.php?" + o + B;
                this.pl_url = C
            } else {
                if (this.pl_url.indexOf("boom") >= 0) {
                    var B = Main.MAC;
                    var z = 8800;
                    a = Main.protocol;
                    r = Main.txt;
                    var o = r.replace("mac=", "txt=");
                    var C = a + Main.hurl + ":" + eval(Main.trp + z) + "/sh/vip_pls.php?" + o + B;
                    this.pl_url = C
                } else {
                    if (this.pl_url.indexOf("svoj") >= 0) {
                        var B = Main.MAC;
                        var z = 8800;
                        a = Main.protocol;
                        r = Main.txt;
                        var o = r.replace("mac=", "txt=");
                        var C = a + Main.hurl + ":" + eval(Main.trp + z) + "/sh/mojsvoy_pls.php?" + o + B;
                        this.pl_url = C
                    } else {
                        if (this.pl_url.indexOf("tablemix") >= 0) {
                            var B = Main.MAC;
                            var z = 8800;
                            a = Main.protocol;
                            r = Main.txt;
                            var o = r.replace("mac=", "txt=");
                            var C = a + Main.hurl + ":" + eval(Main.trp + z) + "/sh/euromix.php?" + o + B;
                            this.pl_url = C
                        } else {
                            if (this.pl_url.indexOf("=m3u") >= 0) {
                                a = this.pl_url;
                                var o = a.replace("%3F", "?");
                                var p = o.replace("%26", "&");
                                var q = p.replace("%26", "&");
                                var C = q;
                                this.pl_url = C
                            } else {
                                if (this.pl_url.indexOf("tableeng") >= 0) {
                                    var B = Main.MAC;
                                    var z = 8800;
                                    a = Main.protocol;
                                    r = Main.txt;
                                    var o = r.replace("mac=", "txt=");
                                    var C = a + Main.hurl + ":" + eval(Main.trp + z) + "/sh/englishmix.php?" + o + B;
                                    this.pl_url = C
                                } else {
                                    if (this.pl_url.indexOf("tablefilms") >= 0) {
                                        var B = Main.MAC;
                                        var z = 8800;
                                        a = Main.protocol;
                                        r = Main.txt;
                                        var o = r.replace("mac=", "txt=");
                                        var C = a + Main.hurl + ":" + eval(Main.trp + z) + "/sh/bigpeople.php?" + o + B;
                                        this.pl_url = C
                                    } else {
                                        if (this.pl_url.indexOf("tablekidz") >= 0) {
                                            var B = Main.MAC;
                                            var z = 8800;
                                            a = Main.protocol;
                                            r = Main.txt;
                                            var o = r.replace("mac=", "txt=");
                                            var C = a + Main.hurl + ":" + eval(Main.trp + z) + "/sh/smallpeople.php?" + o + B;
                                            this.pl_url = C
                                        } else {
                                            if (this.pl_url.indexOf("tablevod") >= 0) {
                                                var B = Main.MAC;
                                                var z = 8800;
                                                a = Main.protocol;
                                                r = Main.txt;
                                                var o = r.replace("mac=", "txt=");
                                                var C = a + Main.hurl + ":" + eval(Main.trp + z) + "/sh/vodmix.php?" + o + B;
                                                this.pl_url = C
                                            } else {
                                                if (this.pl_url.indexOf("tableyt") >= 0) {
                                                    var B = Main.MAC;
                                                    var z = 8800;
                                                    a = Main.protocol;
                                                    r = Main.txt;
                                                    var o = r.replace("mac=", "txt=");
                                                    var C = a + Main.hurl + ":" + eval(Main.trp + z) + "/sh/youtube.php?" + o + B;
                                                    this.pl_url = C
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            Main.playlist()
        } else {
            if (this.url != "" && this.url.indexOf("stop") != 0) {
                if (Player.state != Player.STOPPED) {
                    if (Main.PlayerMode == "0") {
                        Main.stopFPlayer()
                    } else {
                        Player.stopV()
                    }
                };
                Main.UpdatePlayerStatusbar();
                Display.status1(this.ch_num);
                Main.url_arr = [];
                Main.url_selected = 0;
                Main.Foto = false;
                Main.ssize = Ach(6);
                Main.a_num = Ach(7);
                Main.SavePrevChannel();
                Main.SaveSelectedPosition();
                Main.XML_URL = API.XML_URL;
                widgetAPI.putInnerHTML(getId("resolution"), "");
                getIdn("main");
                if (this.url.indexOf("rtmp://") >= 0 || this.url.indexOf("rtsp://") >= 0 || this.url.indexOf("mms://") >= 0 || this.url.indexOf(".flv") >= 0) {
                    Main.PlayerMode = "0";
                    hideWeather();
                    hideTemp();
                    hideScroll();
                    Main.PlayFlashStream()
                } else {
                    Main.PlayerMode = "1";
                    setTimeout(function() { Main.PlayNoFlashStream(); }, 50);
                    hideWeather();
                    hideTemp();
                    hideScroll()
                };
                pluginAPI.setOffScreenSaver()
            } else {
                if (this.url.indexOf("stop") == 0 || this.pl_url.indexOf("stop") == 0) {
                    alert("stop!")
                } else {
                    Display.status("Missing address!")
                };
                setTimeout(function() { Main.Menu(); }, 500)
            }
        }
    } catch (a) {}
};

Main.playlist = function () {
    setTimeout(function(){ showScroll(); }, 500);
    try {
        this.pl_url = decLongUrl(this.pl_url);
        this.pre_pl_url = API.XML_URL;
        this.playlist_name = Main.name;
        if (Main.start) {
            this.pl_url = "start.xml"
        };
        if (API.Xcode != 0 && !Main.guide && !Main.start && !Main.help_info && this.url == "") {
            var p = /[-="',&\/\?\s\_]xxx|porno|sex|erotica|секс|порно|эротика|aнал/i;
            if (p.exec(" " + Main.name) != null || p.exec(" " + API.playlist_name) != null || p.exec(" " + this.pl_url) != null) {
                this.xxx = true
            }
        };
        if (!this.DEL && !Main.guide && this.playlist_prev && Main.pl_url.indexOf("history.dat") < 0) {
            if (API.XML_URL.indexOf("fav.dat") > 0) {
                Main.temp_fav_num = Main.fav_num;
                Main.temp_fav_name = Main.fav_name
            };
            Main.SavePrevPlaylist();
            if (Main.pl_url.indexOf("Open") != 0 && Main.pl_url.indexOf("history.dat") < 0 && API.XML_URL != "start.xml") {
                Main.saveHistory("pl_history.dat")
            }
        };
        this.start = false;
        this.search = false;
        if (Main.pl_url.indexOf("usb/") == 0) {
            var o = SearchPlToUSB();
            if (o != "") {
                API.XML_URL = o;
                API.Request(o)
            }
        } else {
            if (Main.pl_url.indexOf("ScanUSB") == 0) {
                ScanUsbPort()
            } else {
                if (Main.pl_url.indexOf("$USB_DIR") == 0) {
                    ReadUsbDirN()
                } else {
                    if (Main.pl_url == "OpenHistory") {
                        var i = [
                            ["IP-TV, WEB-TV CHANNELS", "", "image.png", "IP-TV, WEB-TV CHANNELS", "", "live_history.dat", "", "", "", "", "", "", "", ""],
                            ["FILMS, VIDEOS", "", "film.png", "FILMS, VIDEOS", "", "vod_history.dat", "", "", "", "", "", "", "", ""],
                            ["PLAYLISTs, FILE LISTs", "", "blue_folder.png", "PLAYLISTs, FILE LISTs", "", "pl_history.dat", "", "", "", "", "", "", "", ""]
                        ];
                        Main.ReadPlArr("OpenHistory", i)
                    } else {
                        if (Main.pl_url.indexOf("history.dat") >= 0) {
                            if (API.Xcode != 0) {
                                this.xxx = true;
                                setTimeout(function() { SearchFormular(); }, 500)
                            } else {
                                Main.openCommonFile(Main.pl_url)
                            }
                        } else {
                            if (Main.pl_url.indexOf("OpenFav") == 0) {
                                if (API.fav_start_channels.length > 1) {
                                    Main.ReadPlArr("OpenFav", API.fav_start_channels)
                                } else {
                                    Main.FAV = true;
                                    Main.openCommonFile(Main.fav_url)
                                }
                            } else {
                                if (Main.pl_url.indexOf("fav.dat") > 0) {
                                    Main.fav_num = Main.ch_num;
                                    Main.fav_name = Main.name;
                                    Main.FAV = true;
                                    Main.openCommonFile(Main.pl_url)
                                } else {
                                    if (this.xxx || Main.name.indexOf("-=SEARCH=-") == 0 || this.pl_url.indexOf("ytv3/3.php") >= 0 || this.pl_url.indexOf("search.php") >= 0 || this.search_on != "") {
                                        if (!this.xxx) {
                                            Main.search = true
                                        };
                                        setTimeout(function() { SearchFormular(); }, 500)
                                    } else {
                                        API.XML_URL = this.pl_url;
                                        this.loading_pl = true;
                                        Display.status("Reading... ", 0);
                                        if (Main.pl_url.indexOf("=m3u") >= 0) {
                                            API.AsReqMode = true;
                                            if (this.pl_url.indexOf("=m3u") >= 0) {
                                                setTimeout(function() { API.Request(Main.pl_url); }, 3000)
                                            } else {
                                                API.Request(Main.pl_url)
                                            }
                                        } else {
                                            setTimeout(function() { API.Request(Main.pl_url); }, 50)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } catch (d) {}
};

StartSlideShow = function () {
    Main.block_info = true;
    Main.selectNextChannel();
    setTimeout(function(){ Main.PlayChannel(); }, 20)
};

StopSlideShow = function () {
    if (Main.SlideShowInterval !== null) {
        clearInterval(Main.SlideShowInterval);
        Main.SlideShowInterval = null
    }
};

Main.PlayNoFlashStream = function () {
    Foto = /\.(gif|jpg|jpeg|bmp|tiff|raw )$/i;
    if (Foto.exec(this.url) != null) {
        Main.Foto = true
    } else {
        StopSlideShow()
    };
    if (API.Ibuffer > 0 && API.Buffer == 0) {
        Main.buffer = ""
    } else {
        if (Main.Foto) {
            Main.buffer = 0.5
        } else {
            if (Main.buffer != "") {
                Main.buffer = (Main.buffer > 20) ? 20 : (Main.buffer < 0.5) ? 0.5 : Main.buffer;
                if (Main.ibuffer > 0) {
                    Main.ibuffer = (Main.ibuffer > 50) ? 50 : (Main.ibuffer < 10) ? 10 : Main.ibuffer
                }
            } else {
                if (API.Buffer > 0) {
                    Main.buffer = API.Buffer;
                    if (API.Ibuffer > 0) {
                        Main.ibuffer = API.Ibuffer
                    }
                }
            }
        }
    };
    getIdb("screen_size");
    var i = this.url;
    i = i.replace("rtp://", "udp://");
    if (i.indexOf("udp://") >= 0) {
        if (dPr(API.Proxy) != "" && API.Proxy.indexOf(":") > 0) {
            i = "http://" + API.Proxy + "/udp/" + i.substr(7)
        }
    } else {
        if (!Main.Foto) {
            API.AsReqMode = false;
            try {
                i = Super_parser(i)
            } catch (b) {
                i = this.url
            };
            API.AsReqMode = true
        }
    };
    if (dPr(i) != "") {
        if (i.indexOf(".m3u8") >= 0) {
            i = i + "|COMPONENT=HLS"
        };
        Player.play(i, 0)
    } else {
        Player.stopV();
        Display.status("Empty link!");
        this.prev_ch_array.pop();
        setTimeout(function() { Main.Menu(); }, 500)
    }
};

Main.PlayFlashStream = function () {
    Player.next = false;
    Player.state = Player.LOADING;
    Main.saveHistory("live_history.dat");
    KeyHandler.setFocus(2);
    getIdn("screen_size");
    getIdb("flashplayer");
    widgetAPI.putInnerHTML(getId("flashplayer"), "");
    var i = (this.url.indexOf(".flv") >= 0) ? ("flv=" + this.url) : ("file=" + this.url);
    var o = "<object type=\"application/x-shockwave-flash\" id=\"rmtpplayerHD\" width=\"960\" height=\"540\">";
    o += "<param name=\"movie\" value=\"nflashplayer.swf\" />";
    o += "<param name=\"FlashVars\" value=\"" + i + "\" /></object>";
    widgetAPI.putInnerHTML(getId("flashplayer"), o);
    Player.state = Player.PLAYING_LIVE;
    setTimeout(function() { Main.setPlayer(); }, 500)
};

Main.setPlayer = function () {
    Main.player = window.rmtpplayerHD
};

Main.stopFPlayer = function () {
    delete Main.player;
    getIdn("flashplayer");
    Display.hidestatus();
    widgetAPI.putInnerHTML(getId("flashplayer"), "");
    Player.state = Player.STOPPED
};

Main.readFile = function (q, j) {
    var p = new FileSystem();
    var o = p.openCommonFile(curWidget.id + "/" + j, "r");
    if (!o) {
        o = p.openCommonFile(j, "r")
    };
    if (o) {
        while (1) {
            var i = o.readLine();
            if (i == null) {
                break
            };
            q.push(i)
        };
        p.closeCommonFile(o)
    }
};

Main.writeFile = function (q, j) {
    var p = new FileSystem();
    if (!p.isValidCommonPath(curWidget.id)) {
        p.createCommonDir(curWidget.id)
    };
    var o = p.openCommonFile(curWidget.id + "/" + j, "w");
    if (o) {
        for (var i = 0; i < q.length; i++) {
            o.writeLine(q[i])
        };
        p.closeCommonFile(o)
    }
};

Main.saveHistory = function (q) {
    var p = [dSp(dI(Main.name) + "|" + dI(this.url) + "|" + dI(this.logo) + "|" + dI(Ach(3)) + "||" + dI(this.pl_url) + "|" + this.ssize + "|" + this.a_num + "|" + this.buffer + "|" + this.ibuffer + "|" + this.timeshift + "|" + this.region + "|" + dI(this.parser) + "|" + dI(this.search_on))];
    Main.readFile(p, q);
    if (p.length > 10) {
        p.pop()
    };
    var i = (this.url != "") ? dI(this.url) : dI(this.pl_url);
    for (var o = 1; o < p.length; o++) {
        if (p[o].indexOf(i) > 0) {
            p.splice(o, 1);
            break
        }
    };
    Main.writeFile(p, q)
};

Main.delHistory = function (i) {
    var o = [];
    Main.writeFile(o, i);
    Main.PlayPrevPlaylist()
};

Main.saveFavorites = function () {
    var i = [dSp(dI(Main.name) + "|" + dI(this.url) + "|" + dI(this.logo) + "|" + dI(Ach(3)) + "||" + dI(this.pl_url) + "|" + this.ssize + "|" + this.a_num + "|" + this.buffer + "|" + this.ibuffer + "|" + this.timeshift + "|" + this.region + "|" + dI(this.parser) + "|" + dI(this.search_on))];
    Main.readFile(i, Main.fav_url);
    Main.writeFile(i, Main.fav_url);
    Display.status("<b style=\"color:#CDCDCD\">Added to Favourites " + Main.fav_num + " - \"" + Main.fav_name + "\"</b>", 1500)
};

Main.delFavorites = function () {
    var i = this.ch_num - 1;
    var o = [];
    Main.readFile(o, Main.fav_url);
    o.splice(i, 1);
    Main.writeFile(o, Main.fav_url);
    this.DEL = true;
    if (o.length == 0) {
        Display.status("<b style=\"color:yellow\">Favourites folder " + Main.fav_num + " - \"" + Main.fav_name + "\" -  EMPTY !</b>", 1500);
        Main.FAV = false;
        Main.RED = false;
        if (Main.prev_pl_array.length == 0 && API.XML_URL.indexOf("start.xml") < 0) {
            API.XML_URL = "start.xml";
            setTimeout(function() { API.Request(API.XML_URL); }, 3000)
        } else {
            setTimeout(function() { Main.PlayPrevPlaylist(); }, 3000)
        }
    } else {
        this.playlist_prev = false;
        Main.openCommonFile(Main.fav_url)
    }
};

Main.moveFavorites = function (p) {
    var i = this.ch_num - 1;
    var q = [];
    Main.readFile(q, Main.fav_url);
    if (q.length > 1) {
        p = (i == 0 && p == 1) ? -q.length : (i == q.length - 1 && p == -1) ? q.length - 1 : p;
        this.DEL = true;
        var o = q.splice(i, 1);
        q.splice(i - p, 0, o.toString());
        Main.writeFile(q, Main.fav_url);
        this.playlist_prev = false;
        Main.openCommonFile(Main.fav_url);
        if (p == -1 || p == q.length - 1) {
            Main.selectNextChannel()
        } else {
            Main.selectPrevChannel()
        }
    }
};

Main.openCommonFile = function (p) {
    var l = [];
    Main.readFile(l, p);
    if (l.length == 0) {
        if (p.indexOf("fav.dat") > 0) {
            if (Main.prev_pl_array.length == 0 && API.XML_URL.indexOf("start.xml") < 0) {
                Display.status("<b style=\"color:yellow\">Your Favourites folder is EMPTY !</b>", 1500);
                setTimeout(function() {
					Display.status('Please change address in the settings');
				}, 3500);
                API.XML_URL = "start.xml";
                setTimeout(function() { API.Request(API.XML_URL); }, 7000)
            } else {
                Display.status("<b style=\"color:yellow\">Favourites folder" + Main.fav_num + " - " + Main.fav_name + " -  is EMPTY !</b>", 1500);
                if (API.XML_URL.indexOf("fav.dat") > 0) {
                    Main.SetFavSelectedPosition();
                    Main.readFile(l, API.XML_URL)
                } else {
                    if (Main.FAV) {
                        Main.FAV = false
                    }
                };
                if (API.XML_URL.indexOf("OpenFav") >= 0) {
                    this.prev_pl_array.pop();
                    this.playlist_prev = true
                };
                Selectbox.selected = Selectbox.pre_selected;
                Selectbox.selected_page = Selectbox.pre_selected_page
            }
        } else {
            Display.status("Empty!", 500)
        }
    } else {
        var q = [];
        for (var o = 0; o < l.length; o++) {
            var i = l[o];
            i = i.split("|");
            for (var j = 0; j < 14; j++) {
                if (i[j] == undefined) {
                    i[j] = ""
                }
            };
            q.push(i)
        };
        Main.ReadPlArr(p, q)
    }
};

Main.ReadPlArr = function (o, i, q, p) {
    Main.SavePrevPlaylist();
    API.ResetAll();
    API.channels = i;
    if (p != undefined && p.length > 2) {
        API.categories = p;
        if (q != undefined && q.length > 0) {
            API.all_channels = q
        } else {
            API.all_channels = i
        }
    };
    API.XML_URL = o;
    API.countPages();
    setTimeout(function(){ Main.Menu(); }, 500)
};

function ScanUsbPort() {
    Main.playlist_name = "";
    var bb = [];
    var bd = "<font color=\"#00ccff\">";
    var Z = "<font color=\"#ffff99\">";
    var G = Main.St.GetUSBListSize();
    if (G && G != -1) {
        for (var z = 0; z < G; z++) {
            var E = parseInt(Main.St.GetUSBDeviceID(z), 10);
            var R = Main.St.GetUSBVendorName(E);
            var D = parseInt(Main.St.GetUSBPartitionNum(E), 10);
            var u = Main.St.GetUSBModelName(E);
            for (var y = 0; y < D; y++) {
                var l = Main.St.GetUSBMountPath(E, y);
                var j = ReSize(Main.St.GetUSBAvailSize(E, y) * 1024);
                var q = ReSize(Main.St.GetUSBTotalSize(E, y) * 1024);
                var s = "<h3> Name : " + Z + R + "</font><br>  Model : " + Z + u + "</font><br>  The total size : " + Z + q + "</font><br>  Free size  : " + Z + j + "</font><br>  Mount Directory  : " + Z + l + "</font><br>  Partition number  : " + Z + D; + "</font></h3>";
                var o = "$USB_DIR/" + l;
                var p = bd + R + " - " + u + "</font>";
                var i = [p, "", "usb_logo.png", s, "", o, "", "", "", "", "", "", "", ""];
                bb.push(i)
            }
        };
        Main.ReadPlArr(Main.pl_url, bb);
        API.playlist_name = "USB Memory HDD"
    } else {
        Display.status("No USB devices has being found!", 500)
    }
}

function SearchPlToUSB() {
    var j = "";
    var u = Main.St.GetUSBListSize();
    if (u && u != -1) {
        for (var D = 0; D < u; D++) {
            var s = parseInt(Main.St.GetUSBDeviceID(D), 10);
            var l = parseInt(Main.St.GetUSBPartitionNum(s), 10);
            for (var R = 0; R < l; R++) {
                var q = Main.St.GetUSBMountPath(s, R);
                var i = "$USB_DIR/" + q;
                var E = new FileSystem();
                var p = E.readDir(i);
                if (p) {
                    for (var o = 0; o < p.length; o++) {
                        if (p[o].name && Main.pl_url.substr(4) == p[o].name) {
                            j = "/dtv/usb/" + q + "/" + Main.pl_url.substr(4);
                            D = u;
                            break
                        }
                    }
                }
            }
        };
        if (j == "") {
            Display.status("Playlist not found!", 500)
        }
    } else {
        Display.status("No USB devices has being found!", 500)
    };
    return j
}

function ReadUsbDirN() {
    var p = "<font color=\"#00ccff\">";
    var o = "<font color=\"#ffffcc\">";
    var R = "<font color=\"#ffff99\">";
    var D = "<font color=\"#00cc99\">";
    var u = [];
    var K = [];
    var J = [];
    var I = [];
    var bk = [];
    var bi = [];
    var bg = [];
    var bd = 0;
    Playlist = /\.(m3u|xml)$/i;
    Video = /\.(avi|asf|3gp|3g2|3gp2|3gpp|flv|mp4|mp4v|m4v|m2v|m2ts|m2t|mp2v|mov|mpg|mpe|mpeg|mkv|swf|mts|wm|wmv|vob|vro|f4v|ts|tts)$/i;
    Audio = /\.(mp3|mp4a|dts|ac3|wav|wma|flac)$/i;
    Foto = /\.(png|gif|jpg|jpeg|bmp|ico|tiff|mpo|raw)$/i;
    var Z = function (O, br, M, L, N, P) {
            bd++;
            u = [br, M, L, N, "", P, "", "", "", "", "", "", "", ""];
            O.push(u)
        };
    var bm = Main.pl_url.indexOf("&page=");
    if (bm != -1) {
        Main.step_read_dir = parseInt(Main.pl_url.substring(bm + 6), 10);
        Main.pl_url = Main.pl_url.substring(0, bm)
    };
    var q = new FileSystem();
    var G = q.readDir(Main.pl_url);
    if (G) {
        var bj = "";
        var bf = "";
        if (G.length > ((50 * Main.step_read_dir) + 2)) {
            if (Main.step_read_dir > 1) {
                bf = Main.pl_url + "&page=" + (Main.step_read_dir - 1)
            };
            bj = Main.pl_url + "&page=" + (Main.step_read_dir + 1);
            var bb = 50 * (Main.step_read_dir - 1);
            var z = (50 * Main.step_read_dir) + 2
        } else {
            if (Main.step_read_dir != 1) {
                bj = Main.pl_url + "&page=" + (Main.step_read_dir - 1)
            };
            bb = 50 * (Main.step_read_dir - 1);
            z = G.length;
            Main.step_read_dir = 1
        };
        var l = "";
        for (var y = bb + 2; y < z; y++) {
            var s = "";
            if (G[y].name) {
                s = G[y].name
            };
            if (s != "." && s != ".." && l != s) {
                var E = "<h3>Name : " + R + s + "</font>";
                if (!G[y].isDir) {
                    E += "<br> Type : " + D + "File </font>";
                    var j = G[y].name.match(/\.(\w+)$/i);
                    if (j != null) {
                        j = j[1].toLowerCase();
                        E += " \"" + R + j + "</font>\""
                    } else {
                        E += " \" Without Extension \""
                    };
                    if (G[y].size) {
                        E += "<br> Size : " + R + ReSize(G[y].size) + "</font>"
                    };
                    var bh = Main.pl_url.replace("$USB_DIR", "/dtv/usb")
                } else {
                    E += "<br> Type : " + p + " Folder </font>"
                };
                if (G[y].mtime) {
                    E += "<br> Creation Date : " + R + G[y].mtime + "</font>"
                };
                if (!G[y].isDir && Playlist.exec(s) != null) {
                    Z(K, R + s + "</font>", "", "playlist.png", E + "</h3>", bh + "/" + s)
                } else {
                    if (!G[y].isDir && Video.exec(s) != null) {
                        Z(J, R + s + "</font>", bh + "/" + s, "film.png", E + "</h3>", "")
                    } else {
                        if (!G[y].isDir && Audio.exec(s) != null) {
                            Z(I, R + s + "</font>", bh + "/" + s, "music.png", E + "</h3>", "")
                        } else {
                            if (!G[y].isDir && Foto.exec(s) != null) {
                                Z(bk, R + s + "</font>", bh + "/" + s, "foto.png", E + "</h3>", "")
                            } else {
                                if (!G[y].isDir) {
                                    Z(bi, o + s + "</font>", bh + "/" + s, "file.png", E + "</h3>", "")
                                } else {
                                    if (G[y].isDir) {
                                        Z(bg, D + s + "</font>", "", "blue_folder.png", E + "</h3>", Main.pl_url + "/" + s)
                                    }
                                }
                            }
                        }
                    }
                }
            };
            l = s
        }
    };
    if (API.playlist_name == "USB Memory HDD") {
        Main.playlist_name = Main.name
    };
    if (bd > 0) {
        var i = K.concat(J, I, bk, bi, bg);
        Main.ReadPlArr(Main.pl_url, i);
        API.playlist_name = Main.playlist_name;
        API.next_page_url = bj;
        API.prev_page_url = bf
    } else {
        Display.status("Empty Folder!", 500)
    }
}

function ReSize(o) {
    var i = (o >= 1073741824)
				? (o / 1073741824).toFixed(2) + " Gb"
				: (o >= 1048576)
					? (o / 1048576).toFixed(2) + " Mb"
					: (o >= 1024)
						? (o / 1024).toFixed(2) + " Kb"
						: (o >= 0)
							? o + " Byte"
							: (o < 0)
								? (2 + o / 1073741824).toFixed(2) + " Gb"
								: "";
    return i
}

Main.onUnload = function () {
    if (Main.PlayerMode == "0") {
        Main.stopFPlayer()
    };
    Player.deinit();
    alert("DEINIT")
};

function StartTime() {
    clearInterval(Main.IntervalUpdateTime);
    Main.IntervalUpdateTime = setInterval(function() { SetTimeDate(); }, 1000);
    if (API.Timemode == 0) {
        SyncInetTime()
    }
}

var T = {
    s: 0,
    m: 0,
    h: 0,
    day: 0,
    date: 0,
    month: 0,
    year: 0,
    inetTime: 0,
    delta: 0,
    y_t_days: 0,
    Sync_step: 0,
    timezone: 0
};

function SyncInetTime() {
    var i = null;
    i = new XMLHttpRequest();
    i.onreadystatechange = function () {
        if (i.readyState == 4) {
            var o = Math.round(Number(i.responseText));
            if (!isNaN(o) && o > 0) {
                T.inetTime = o;
                clearInterval(Main.IntervalUpdateTime);
                Main.IntervalUpdateTime = setInterval(function() { SetTimeDate(); }, 1000)
            } else {
                if (T.Sync_step < 3) {
                    T.Sync_step++;
                    setTimeout(function() { SyncInetTime(); }, 60000)
                } else {
                    if (T.Sync_step == 3) {
                        T.Sync_step = 0;
                        setTimeout(function() { SyncInetTime(); }, 30 * 60000);
                        Display.status("Connection Error with NTP server!", 500)
                    }
                }
            }
        }
    };
    i.open("GET", "http://wwp.greenwichmeantime.com/time/scripts/clock-8/x.php", true);
    i.setRequestHeader("User-Agent", "Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51");
    i.send()
}

function getDT(o) {
    var i = new Date(o);
    T.year = i.getFullYear();
    T.date = i.getDate();
    T.month = i.getMonth();
    T.day = i.getDay();
    T.h = i.getHours();
    T.m = i.getMinutes();
    T.s = i.getSeconds()
}

function to(q, p, o, i) {
    return (q > 9 ? q : ("0" + q)) + ":" + (p > 9 ? p : ("0" + p)) + ((Player.state != Player.PLAYING_LIVE || i == 0) ? (":" + (o > 9 ? o : ("0" + o))) : "")
}

function SetTimeDate() {
    if (API.Timemode == 0 && T.inetTime > 0) {
        T.inetTime += 1000;
        var s = T.inetTime + API.Timefix * 3600000;
        T.y_t_days = parseInt(T.inetTime / 86400000);
        getDT(s)
    } else {
        if (API.Timemode == 0 || API.Timemode == 1) {
            s = Number(new Date()) + API.Timefix * 3600000;
            T.y_t_days = parseInt(new Date() / 86400000);
            getDT(s)
        } else {
            if (!Main.Emu) {
                var R = getId("pluginTime");
                s = parseInt(R.GetEpochTime() * 1000);
                T.y_t_days = parseInt(s / 86400000);
                getDT(s)
            }
        }
    };
    if (Main.ya_epg_info_arr.length > 0 && Main.epg_t1 <= Main.epg_t2) {
        var D = parseInt((T.h * 3600 + T.m * 60 + T.s) * 1000);
        if (Main.epg_t1 < 24 * 3600000 && Main.epg_t1 > D) {
            D += 24 * 3600000
        };
        if (Main.epg_t1 < D && D <= Main.epg_t2) {
            if (D == Main.epg_t2) {
                Main.epg_t2 = 0;
                Main.epg_t1 = 0;
                GetEpgInfo()
            } else {
                var u = D - Main.epg_t1;
                var l = Main.epg_t2 - Main.epg_t1;
                TimeInfo(u, l)
            }
        } else {
            if (D == Main.epg_t2 + 1000) {
                Main.epg_t2 = 0;
                Main.epg_t1 = 0;
                GetEpgInfo()
            } else {
                if (Main.epg_t2 < D) {
                    TimeInfo(1, 1)
                } else {
                    TimeInfo(0, 0)
                }
            }
        }
    };
    var s = to(T.h, T.m, T.s, 0);
    getId("widget_time").innerHTML = s;
    getId("time").innerHTML = s;
    var j = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var q = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var p = j[T.day];
    var o = q[T.month];
    var i = p + " " + T.date + " " + o;
    getId("widget_date").innerHTML = i
}

function TimeInfo(j, q) {
    if (j >= 0 && q >= j) {
        var p = (j > 0) ? parseInt((100 * j) / q) : 0;
        var o = Math.floor(p * 5.45);
        var i = "";
        getId("progressBar").style.width = o + "px";
        i = (p > 9 ? p : ("0" + p)) + "% " + msecToStr(j);
        i += "/" + msecToStr(q);
        getId("timeInfo").innerHTML = i
    }
}

msecToStr = function (i, o) {
    i = Math.floor(i / 1000);
    m = Math.floor(i / 60);
    i = i % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    return to(h, m, i)
};

var API = {
    XML_URL: "start.xml",
    star_url: "start.xml",
    help_url: "http://nebo.ddns.net/help/starthelp.xml",
    GenUrl: "",
    GenT: "500",
    Gen: false,
    Proxy: "",
    Timefix: "0",
    Timemode: "0",
    Xcode: "0",
    Size: "",
    Ph: "100",
    Pw: "100",
    a_size1: "2",
    a_size2: "0",
    a_size3: "0",
    Forma: "0",
    CODE: 213,
    REG: "ru",
    Scode: "0",
    Login: "",
    Pasword: "",
    Surl: "",
    Buffer: "0",
    Ibuffer: "0",
    Timeshift: "0",
    Favname: " Main | IP-TV | Films | Series",
    Cityname: "London",
    Pstyle: "1",
    Mac: "1",
    Header: "0",
    Vquality: "360p",
    channels: [],
    all_channels: [],
    chan_pages: 0,
    last_page_channels_counter: 0,
    XHRObj: null,
    stReq_timeout: null,
    stReq_time: 50000,
    AsReqMode: true,
    categories: [],
    favorites: [],
    fav_start_channels: [],
    search_string: "",
    next_page_url: "",
    prev_page_url: "",
    playlist_name: "",
    search_on: "",
    next_page_text: "",
    prev_page_text: "",
    fn: ""
};

API.init = function () {
    try {
        Main.MAC = Main.Network.GetMAC();
        API.fn = parseInt(Main.MAC, 16) + "291s.dat";
        var q = [];
        Main.readFile(q, API.fn);
        if (q.length > 0) {
            API.star_url = (dPr(q[0]) != "") ? q[0] : API.star_url;
            API.Surl = (dPr(q[1]) != "") ? q[1] : "";
            API.Login = (dPr(q[2]) != "") ? q[2] : "";
            API.Pasword = (dPr(q[3]) != "") ? q[3] : "";
            API.Proxy = (dPr(q[4]) != "") ? q[4] : "";
            API.Xcode = (q[5] > 0 && q[5] < 10000) ? q[5] : "0";
            API.Scode = (q[6] < 10000 && q[6] > 0) ? q[6] : "0";
            API.Favname = (dPr(q[7]) != "") ? q[7] : API.Favname;
            API.CODE = (q[8] < 100000 && q[8] > 0) ? q[8] : 213;
            API.REG = q[9];
            API.Timeshift = q[10].replace("+", "");
            API.Timemode = q[11];
            API.Timefix = q[12].replace("+", "");
            API.Size = q[13];
            API.Ph = q[14];
            API.Pw = q[15];
            API.a_size1 = q[16];
            API.a_size2 = q[17];
            API.a_size3 = q[18];
            API.Forma = q[19];
            API.Buffer = q[20];
            API.Ibuffer = q[21];
            API.Pstyle = q[22];
            API.Mac = q[23];
            API.Header = q[24];
            API.Vquality = (q[25] == undefined) ? "360p" : q[25];
            API.Cityname = (dPr(q[26]) != "") ? q[26] : API.Cityname
        };
        API.favorites = [];
        API.fav_start_channels = [];
        var p = API.Favname.split("|");
        var u = (p.length > 10) ? 10 : p.length;
        for (var D = 0; D < u; D++) {
            var o = (D > 0) ? D : "";
            if (API.Scode != "" && parseInt(API.Scode, 10) > 0) {
                var i = API.Scode + o + "fav.dat"
            } else {
                i = parseInt(Main.MAC, 16).toString() + o + "fav.dat"
            };
            var l = [p[D], "", "blue_folder.png", p[D], "", i, "", "", "", "", "", "", "", ""];
            API.fav_start_channels.push(l);
            var G = [D, p[D], i];
            API.favorites.push(G)
        };
        Main.fav_num = 1 + API.favorites[0][0];
        Main.fav_name = API.favorites[0][1];
        Main.fav_url = API.favorites[0][2];
        Main.temp_fav_num = Main.fav_num;
        Main.temp_fav_name = Main.fav_name;
        q = [];
        Main.ya_auto = false;
        Main.readFile(q, API.CODE + "_ya_name_index_url.dat");
        if (q.length > 0) {
            Main.ya_auto = true;
            var E = "<font style=\"color:#00ccff;font-weight:bolder\">";
            for (var D = 0; D < q.length; D++) {
                var s = q[D];
                s = s.split("|");
                Ya_name_index_obj[s[0].toLowerCase()] = s[1];
                Ya_icon_index_url_obj[s[1]] = s[2];
                Ya_icon_name_url_obj[s[0].toLowerCase()] = s[2]
            }
        };
        setTimeout(function() { StartTime(); }, 50)
    } catch (k) {
        return false
    };
    return true
};

GetYaBaseInfo = function () {
    tempArr = [];
    var p = "";
    Main.readFile(tempArr, API.CODE + "_ya_name_index_url.dat");
    if (tempArr.length > 0) {
        var j = "<font style=\"color:#00ccff;font-weight:bolder\">";
        for (var q = 0; q < tempArr.length; q++) {
            var i = tempArr[q];
            i = i.split("|");
            p += "<br>" + (q + 1) + ") " + i[0] + " - " + j + i[1] + "</font>"
        };
        Main.ya_base_info = true
    };
    var o = "Channel";
    if (parseInt(tempArr.length / 10) * 10 == tempArr.length) {
        o = "Channels"
    };
    p = "In the database of " + j + API.CODE + "</font> region " + j + tempArr.length + " </font> " + o + " : " + p;
    Main.showinfoList(p)
};

API.loadComplete = function () {
    if (API.channels.length == 0) {
        Display.status("<b style=\"color:yellow\">ERROR IN THE PLAYLIST!</b>");
        if (Main.prev_pl_array.length == 0 && API.XML_URL == "start.xml") {
            setTimeout(function() { getIdb('main'); SetupFormular(); }, 2000)
        } else {
            setTimeout(function() { Main.PlayPrevPlaylist(); }, 500)
        }
    } else {
        Display.hidestatus();
        Main.Menu()
    }
};

API.Request = function (o) {
    try {
        Main.guide = false;
        if (API.AsReqMode && Main.parser == "tsnakeman") {
            KeyHandler.setFocus(1)
        } else {
            if (API.AsReqMode && o.indexOf("://") > 0) {
                if (API.search_string != "" && Main.search && o.indexOf("3.php") > 0) {
                    o += "search=" + API.search_string
                };
                if (API.search_string != "" && Main.search && o.indexOf("search.php") > 0) {
                    var i = "?";
                    o += i + "search=" + API.search_string + "&maxResults=50"
                };
                o = Super_Send(o);
                alert("GETTING URL!!! >" + o)
            };
            if (API.XHRObj != null) {
                API.XHRObj.destroy();
                API.XHRObj = null
            };
            API.XHRObj = new XMLHttpRequest();
            if (API.AsReqMode) {
                KeyHandler.setFocus(1);
                API.stReq_timeout = setTimeout(function() { API.stopRequest(); }, API.stReq_time);
                API.XHRObj.onreadystatechange = function () {
                    if (API.XHRObj.readyState == 4) {
                        API.recieveData(o)
                    }
                };
                if (Main.seriesE && API.XHRObj.overrideMimeType) {
                    API.XHRObj.overrideMimeType("text/xml")
                }
            };
            API.XHRObj.open("GET", o, API.AsReqMode);
            if (!API.AsReqMode || API.Header == "1") {
                API.XHRObj.setRequestHeader("Accept-Encoding", "identity");
                API.XHRObj.setRequestHeader("Accept-Language", "en-us,en;q=0.5");
                API.XHRObj.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                API.XHRObj.setRequestHeader("User-Agent", "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.6) Gecko/20100627 Firefox/3.6.6");
                API.XHRObj.setRequestHeader("Accept-Charset", "ISO-8859-1,utf-8;q=0.7,*;q=0.7");
                API.XHRObj.setRequestHeader("Connection", "close")
            };
            API.XHRObj.send(null);
            if (!API.AsReqMode) {
                if ((API.XHRObj.status == 302 || API.XHRObj.status == 303) && API.XHRObj.getResponseHeader("Location") != null) {
                    o = API.XHRObj.getResponseHeader("Location");
                    return API.Request(o)
                } else {
                    if (API.XHRObj.readyState == 4 && API.XHRObj.status == 200) {
                        return API.XHRObj.responseText
                    } else {
                        return ""
                    }
                }
            }
        }
    } catch (c) {}
};

function AGen() {
    if (!Main.FirstStart && KeyHandler.Focus != 1 && !Player.jump && API.AsReqMode) {
        var i = null;
        i = new XMLHttpRequest();
        i.onreadystatechange = function () {
            if (i.readyState == 4 && i.status == 200) {
                API.Gen = true
            }
        };
        alert("AGEN URL =" + i);
        i.open("GET", API.GenUrl, true);
        i.setRequestHeader("User-Agent", "Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51");
        i.send();
        setTimeout(function() {
			if (API.Gen) {
				if (API.GenT >= 1000)
					API.GenT = API.GenT/2;
				API.Gen = false;
			} else if (API.GenT < 512000)
				API.GenT = API.GenT*2;
			AGen();
		}, parseInt(API.GenT))
    }
}

API.recieveData = function (i) {
    clearTimeout(API.stReq_timeout);
    if (API.XHRObj.status == 200) {
        if (i.toLowerCase().indexOf("=m3u") >= 0 || i.toLowerCase().indexOf(".m3u") >= 0 && API.XHRObj.responseText != null && API.XHRObj.responseText != "") {
            API.getChannel_list(API.XHRObj.responseText)
        } else {
            if (API.XHRObj.responseXML != null && API.XHRObj.responseXML != "") {
                alert("GETTING XML SOURCE!!!");
                API.getChannel_list(API.XHRObj.responseXML)
            } else {
                API.channels = [];
                API.loadComplete()
            }
        }
    } else {
        Display.status("<b style=\"color:yellow\">Wrong address or an Error in the playlist! </b>");
        if (Main.FirstStart) {
            if (API.XML_URL.indexOf("start.xml") < 0) {
                API.XML_URL = "start.xml";
                setTimeout(function() { API.Request(API.XML_URL); }, 3000)
            } else {
                setTimeout(function() { getIdb('main'); SetupFormular(); }, 3000)
            }
        } else {
            setTimeout(function() { API.stopRequest(); }, 500)
        }
    }
};

API.stopRequest = function () {
    clearTimeout(API.stReq_timeout);
    if (API.XHRObj != null) {
        API.XHRObj.abort();
        API.XML_URL = Main.pre_pl_url;
        Main.prev_pl_array.pop();
        API.loadComplete()
    }
};

API.ResetAll = function () {
    API.chan_counter = 0;
    API.channels = [];
    API.all_channels = [];
    API.categories = [];
    if (!Main.FAV) {
        Selectbox.selected = 0;
        Selectbox.selected_page = 0
    };
    API.playlist_name = "";
    API.next_page_url = "";
    API.prev_page_url = "";
    API.search_on = "";
    API.next_page_text = "";
    API.prev_page_text = "";
    if (!Main.DEL) {
        Main.ResetSelectedPosition()
    };
    Main.DEL = false
};

API.getChannel_list = function (bk) {
    var bj = function (bq, bp, bo) {
            try {
                var bn = bq.getElementsByTagName(bp)[0].childNodes[0].nodeValue;
                if (bn == null) {
                    bn = ""
                };
                if (bo == 1) {
                    return dPr(bn, 1)
                } else {
                    return lrdPr(bn)
                }
            } catch (Y) {
                return ""
            }
        };
    var bi = function (bq, bp, bn) {
            try {
                var bo = bq.getElementsByTagName(bp)[0].getAttributeNode(bn).nodeValue;
                if (bo == null) {
                    bo = ""
                };
                return lrdPr(bo)
            } catch (Y) {
                return ""
            }
        };
    try {
        API.ResetAll();
        API.categories.push(Array("", "All Categories"));
        var bh = bk;
        var bg = "";
        var p = "";
        var o = "";
        var i = "";
        var be = "";
        var bc = "";
        var ba = "";
        if (API.XML_URL.toLowerCase().indexOf(".m3u8") < 0) {
            if (API.XML_URL.toLowerCase().indexOf(".m3u") >= 0 || API.XML_URL.toLowerCase().indexOf("=m3u") >= 0) {
                var W = {};
                var U = 1;
                var Q = bh.split("\x0A");
                for (var q = 0; q < Q.length; q++) {
                    if ((Q[q].indexOf("#EXTINF:") >= 0 && (Q[q + 1].indexOf("://") > 0 || Q[q + 2].indexOf("://") > 0 || Q[q + 1].indexOf("/dtv") > -1 || Q[q + 2].indexOf("/dtv") > -1)) || Q[q].indexOf("#EXTM3U") >= 0) {
                        var O = "";
                        var l = "";
                        var G = "";
                        var z = "";
                        var X = "";
                        var E = "";
                        var R = "";
                        var D = "";
                        var y = "";
                        var u = "";
                        var s = "";
                        Q[q] = Q[q].replace(/'/g, "\"");
                        s = parser(Q[q], "cache=", " ").replace(/"/g, "");
                        s = (s >= 0.5 && s <= 20) ? s : (s >= 50 && s <= 2000) ? s / 100 : "";
                        l = lrdPr(parser(Q[q], "tvg-name=\"", "\"").replace(/"/g, ""));
                        G = parser(Q[q], "tvg-shift=", " ").replace(/["\+]/g, "");
                        z = lrdPr(parser(Q[q], "tvg-logo=\"", "\"").replace(/"/g, "")).replace(/_/g, " ");
                        X = parser(Q[q], "aspect-ratio=", " ").replace(/"/g, "");
                        X = (X.indexOf("16:9") >= 0 || X.toLowerCase().indexOf("16x9") >= 0 || X.indexOf("0") == 0) ? "0" : (X.indexOf("14:9") >= 0 || X.toLowerCase().indexOf("14x9") >= 0 || X.indexOf("1") == 0) ? "1" : (X.toLowerCase().indexOf("4:3z2") >= 0 || X.toLowerCase().indexOf("4x3z2") >= 0 || X.indexOf("2") == 0) ? "2" : (X.toLowerCase().indexOf("4:3z1") >= 0 || X.toLowerCase().indexOf("4x3z1") >= 0 || X.indexOf("3") == 0) ? "3" : (X.indexOf("4:3") >= 0 || X.toLowerCase().indexOf("4x3") >= 0 || X.indexOf("4") == 0) ? "4" : (X.toLowerCase().indexOf("x-zoom") >= 0 || X.indexOf("5") == 0) ? "5" : "";
                        (X.toLowerCase().indexOf("auto") >= 0 || X.indexOf("6") == 0) ? "6" : "";
                        D = parser(Q[q], "audio-track=", " ").replace(/"/g, "");
                        D = (D != "") ? (parseInt(D) + 1).toString() : "";
                        if (q == 0) {
                            p = (z != "") ? z : "";
                            o = (X != "") ? X : "";
                            i = (D != "") ? D : "";
                            be = (s != "") ? s : "";
                            bg = (G != "") ? G : ""
                        } else {
                            R = lrdPr(parser(Q[q], "group-title=\"", "\"").replace(/"/g, ""));
                            y = lrdPr(parser(Q[q], ","));
                            try {
                                var bl = FoundYaIndex[y]
                            } catch (p) {};
                            var bf = (Q[q + 1].indexOf("://") > 0 || Q[q + 1].indexOf("/dtv") > -1) ? Q[q + 1] : Q[q + 2];
                            bf = lrdPr(bf);
                            z = (z != "") ? z : p;
                            if (z != "" && z.indexOf("://") < 0 && z.indexOf(".png") < 0) {
                                var bb = Ya_icon_name_url_obj[z.toLowerCase()];
                                z = (bb != undefined) ? bb : ""
                            };
                            if (bf.indexOf(".m3u8") < 0) {
                                if (bf.indexOf(".m3u") > -1 || bf.indexOf(".xml") > -1) {
                                    z = (z == "") ? "blue_folder.png" : z;
                                    if (R != "") {
                                        l = "Category : " + R
                                    };
                                    u = bf;
                                    bf = ""
                                }
                            };
                            try {
                                if (bl != undefined) {
                                    l = bl;
                                    z = FoundYaIco[l]
                                }
                            } catch (p) {};
                            if (bf != "") {
                                X = (X != "") ? X : o;
                                D = (D != "") ? D : i;
                                G = (G != "") ? G : bg;
                                s = (s != "") ? s : be
                            };
                            if (R != "") {
                                E = W[R];
                                if (E == undefined) {
                                    W[R] = U;
                                    E = U;
                                    var V = [U, R];
                                    API.categories.push(V);
                                    U++
                                }
                            };
                            var Z = [y, bf, z, l, E, u, X, D, s, "", G, "", "", ""];
                            API.channels.push(Z);
                            q++
                        }
                    }
                }
            } else {
                if (bh) {
                    try {
                        API.playlist_name = bj(bh, "playlist_name");
                        API.playlist_name = (API.playlist_name == "") ? Main.playlist_name : (API.playlist_name == "no_name") ? "" : API.playlist_name;
                        API.next_page_url = bj(bh, "next_page_url");
                        API.prev_page_url = bj(bh, "prev_page_url");
                        API.search_on = bj(bh, "search_on");
                        API.next_page_text = bi(bh, "next_page_url", "text");
                        API.prev_page_text = bi(bh, "prev_page_url", "text");
                        var S = bh.getElementsByTagName("all_channels");
                        if (S.length > 0) {
                            p = bj(S[0], "all_logo");
                            o = bj(S[0], "all_size", 1);
                            i = bj(S[0], "all_audiotrack_num", 1);
                            be = bj(S[0], "all_buffer", 1);
                            bg = bj(S[0], "all_timeshift", 1);
                            bc = bj(S[0], "all_region", 1);
                            ba = bj(S[0], "all_parser")
                        };
                        var P = bh.getElementsByTagName("channel");
                        for (var L = 0; L < P.length; L++) {
                            y = bj(P[L], "title");
                            try {
                                var bl = FoundYaIndex[y]
                            } catch (p) {};
                            bf = bj(P[L], "stream_url");
                            z = bj(P[L], "logo_30x30");
                            var N = bj(P[L], "logo");
                            l = bj(P[L], "description");
                            try {
                                if (bl != undefined) {
                                    l = bl;
                                    z = FoundYaIco[l]
                                }
                            } catch (p) {};
                            var M = bj(P[L], "parser");
                            M = (M != "") ? M : ba;
                            E = bj(P[L], "category_id");
                            z = (z != "") ? z : (N != "") ? N : (p != "") ? p : "";
                            u = "";
                            var K = "";
                            X = "";
                            D = "";
                            s = "";
                            var J = "";
                            G = "";
                            var I = "";
                            if (bf != "") {
                                X = bj(P[L], "size", 1);
                                X = (X != "") ? X : o;
                                D = bj(P[L], "audiotrack_num", 1);
                                D = (D != "") ? D : i;
                                s = bj(P[L], "buffer", 1);
                                s = (s != "") ? s : be;
                                J = bj(P[L], "ibuffer", 1);
                                G = bj(P[L], "timeshift", 1);
                                G = (G != "") ? G : bg;
                                I = bj(P[L], "region", 1);
                                I = (I != "") ? I : bc
                            } else {
                                u = bj(P[L], "playlist_url");
                                K = bj(P[L], "search_on")
                            };
                            Z = [y, bf, z, l, E, u, X, D, s, J, G, I, M, K];
                            API.channels.push(Z)
                        };
                        try {
                            var bm = bh.getElementsByTagName("category");
                            for (var bd = 0; bd < bm.length; bd++) {
                                var U = bj(bm[bd], "category_id");
                                var R = bj(bm[bd], "category_title");
                                if (U != "" && R != "") {
                                    var V = [U, R];
                                    API.categories.push(V)
                                }
                            }
                        } catch (F) {
                            API.categories = []
                        }
                    } catch (F) {
                        API.channels = []
                    }
                }
            }
        }
    } catch (F) {
        API.channels = []
    };
    API.countPages();
    if (API.categories.length > 2) {
        API.all_channels = API.channels
    };
    API.loadComplete()
};

API.setCategory = function (p) {
    API.channels = [];
    Main.ResetSelectedPosition();
    for (var i = 0; i < API.all_channels.length; i++) {
        if (API.all_channels[i][4] == p && p != "") {
            API.channels.push(API.all_channels[i])
        } else {
            if (p == "") {
                API.channels.push(API.all_channels[i])
            }
        }
    };
    if (API.channels.length == 0) {
        var o = ["This category is empty!", "stop", "", "This category is empty!", "", "", "", "", "", "", "", "", "", ""];
        API.channels.push(o)
    };
    API.countPages()
};

API.countPages = function () {
    if (API.channels.length > 0) {
        API.chan_pages = API.channels.length;
        API.last_page_channels_counter = API.channels.length % 10;
        if (API.last_page_channels_counter == 0) {
            API.last_page_channels_counter = 10
        };
        API.chan_pages = (API.last_page_channels_counter > 0 && API.last_page_channels_counter < 5) ? Math.round(API.chan_pages / 10) + 1 : Math.round(API.chan_pages / 10)
    }
};

var Selectbox = {
    selected: 0,
    pre_selected: 0,
    url_selected: 0,
    select_list: [],
    title: "",
    selected_page: 0,
    pre_selected_page: 0,
    pages: 0,
    last_page_counter: 0
};

Selectbox.setBox = function (p, o) {
    try {
        if (this.title != p) {
            this.selected = 0;
            this.selected_page = 0
        };
        if (p == "Select the Quality") {
            this.selected = this.url_selected;
            this.selected_page = 0
        };
        this.title = p;
        this.pre_selected = this.selected;
        this.pre_selected_page = this.selected_page;
        this.select_list = o;
        this.last_page_counter = o.length % 10;
        if (this.last_page_counter == 0) {
            this.last_page_counter = 10
        };
        this.pages = Math.round(o.length / 10);
        if (this.last_page_counter > 0 && this.last_page_counter < 5) {
            this.pages++
        };
        Selectbox.updateBox()
    } catch (a) {}
};

Selectbox.updateBox = function () {
    try {
        var l = 10;
        this.selected_page = (this.selected_page > this.pages - 1) ? 0 : (this.selected_page < 0) ? this.pages - 1 : this.selected_page;
        if (this.selected_page == this.pages - 1) {
            l = this.last_page_counter;
            if (this.selected > this.last_page_counter - 1) {
                this.selected = this.last_page_counter - 1
            }
        };
        if (this.selected_page == this.pages && this.last_page_counter < l + 1) {
            l = this.last_page_counter
        };
        var q = "<div><div style=\"text-align:center;width:100%;height:10px;padding:4px;font-size:20px;\">" + this.title + "</div><br>";
        for (var i = 0; i < l; i++) {
            var p = 10 * this.selected_page + i;
            var o = "";
            if (i == this.selected) {
                o = "style=\"color:#ffffff; border: 2px solid #ffffff\" "
            };
            var u = (this.selected_page > 0) ? this.selected_page.toString() + (1 + i) + ") " : (1 + i) + ") ";
            if (this.select_list[p][1]) {
                q += "<li " + o + ">" + u + this.select_list[p][1] + "</li>"
            }
        };
        q += "<div style=\"height:25px;\"><div id=\"navi_button\"><img src=\"img/buttons/exit.png\"></img></div><span id=\"navi_helpertext\">Exit</span>";
        q += "<div id=\"navi_button\"><img src=\"img/buttons/move.png\"></img></div><span id=\"navi_helpertext\">Move</span>";
        q += "<div id=\"navi_button\"><img src=\"img/buttons/enter.png\"></img></div><span id=\"navi_helpertext\">Enter</span></div></div>";
        widgetAPI.putInnerHTML(getId("selectbox"), q);
        getIdb("selectbox")
    } catch (g) {}
};

Selectbox.selectNextItem = function () {
    this.selected++;
    if (this.selected >= 10 || (this.selected_page == this.pages - 1 && this.selected == this.last_page_counter)) {
        this.selected = 0;
        this.selected_page++
    };
    Selectbox.updateBox()
};

Selectbox.selectPrevItem = function () {
    this.selected--;
    if (this.selected_page == 0 && this.selected_channel < 0) {
        this.selected = this.last_page_counter - 1;
        this.selected_page = this.pages - 1
    };
    if (this.selected < 0) {
        this.selected = 10;
        this.selected_page--
    };
    Selectbox.updateBox()
};

Selectbox.selectNextPage = function () {
    this.selected_page++;
    Selectbox.updateBox()
};

Selectbox.selectPrevPage = function () {
    this.selected_page--;
    Selectbox.updateBox()
};

Selectbox.SelectCategory = function () {
    var i = this.select_list[10 * this.selected_page + this.selected][0];
    getIdn("selectbox");
    Main.SavePrevPlaylist();
    API.setCategory(i);
    getIdb("rightHalf");
    Main.Menu()
};

Selectbox.SelectFav = function () {
    var i = this.select_list[10 * this.selected_page + this.selected][0];
    Main.temp_fav_num = Main.fav_num;
    Main.fav_num = 1 + parseInt(i);
    Main.temp_fav_name = Main.fav_name;
    Main.fav_name = this.select_list[10 * this.selected_page + this.selected][1];
    Main.temp_fav_url = Main.fav_url;
    Main.fav_url = this.select_list[10 * this.selected_page + this.selected][2];
    if (Main.FAV && !Main.RED) {
        Main.openCommonFile(Main.fav_url)
    } else {
        Main.saveFavorites()
    };
    if (Main.RED) {
        Main.SetFavSelectedPosition();
        Main.delFavorites();
        KeyHandler.setFocus(5)
    } else {
        KeyHandler.setFocus(0)
    };
    getIdn("selectbox");
    getIdb("rightHalf")
};

Selectbox.SelectSize = function () {
    this.url_selected = this.selected;
    var i = this.select_list[10 * this.selected_page + this.selected][0];
    i = decLongUrl(i);
    getIdn("selectbox");
    Player.ch_t = Player.cur_time;
    Player.play(i, 0);
    Player.ch = true
};

var Display = {
    status_timer: null,
    status1_timer: null,
    loadingshow_timer: null,
    index: 1,
    run: false
};

Display.loadingshow = function () {
    if (!this.run) {
        getIdb("loading");
        Display.loadingshowTimer();
        this.run = true;
        Display.loadingstep()
    }
};

Display.loadinghide = function () {
    this.run = false;
    clearTimeout(this.loadingshow_timer);
    getIdn("loading")
};

Display.loadingstep = function () {
    if (this.index < 10) {
        getId("imgAnim").src = "img/loading/loading_0" + this.index + ".png"
    } else {
        getId("imgAnim").src = "img/loading/loading_" + this.index + ".png"
    };
    this.index++;
    if (this.index > 8) {
        this.index = 1
    };
    if (this.run) {
        setTimeout(function() { Display.loadingstep(); }, 200)
    }
};

Display.loadingshowTimer = function () {
    this.loadingshow_timer = setTimeout(function() { Player.ReturnMenu(); }, 60000)
};

Display.showplayer = function () {
    if (KeyHandler.Focus != 0) {
        if (Player.state == Player.PLAYING_VOD || Player.state == Player.PAUSE_VOD) {
            Main.ya_epg_info_arr = [];
            Main.epg_t1 = 0;
            Main.epg_t2 = 0;
            getIdn("help_navi_l_player");
            getIdn("p_epg_line");
            if (Main.seriesE) {
                getId("progressBarBG").style.left = "0px";
                getId("timeInfo").style.left = "560px";
                getId("resolution").style.left = "725px";
                getId("time").style.left = "850px"
            } else {
                getId("progressBarBG").style.left = "10px";
                getId("timeInfo").style.left = "580px";
                getId("resolution").style.left = "745px";
                getId("time").style.left = "860px"
            };
            getIdb("p_info_line");
            getIdb("help_navi_vod_player");
            getId("statusbar").style.top = "68px";
            if (Player.state == Player.PAUSE_VOD) {
                getIdn("vod_pause");
                getIdb("vod_play");
                if (Main.seriesE) {
                    getId("help_navi_vod_player").style.left = "39px"
                } else {
                    getId("help_navi_vod_player").style.left = "48px"
                }
            } else {
                getIdb("vod_pause");
                getIdn("vod_play");
                if (Main.seriesE) {
                    getId("help_navi_vod_player").style.left = "30px"
                } else {
                    getId("help_navi_vod_player").style.left = "40px"
                };
                if (Player.repeat) {
                    Display.status("Repeat mode", 1000)
                } else {
                    if (Player.next) {
                        Display.status("Continuous playback", 1000)
                    }
                }
            }
        } else {
            if (Player.state == Player.PLAYING_LIVE) {
                getIdn("help_navi_vod_player");
                getIdn("p_info_line");
                getIdn("p_epg_line");
                if (Main.seriesE) {
                    if (Main.PlayerMode == "1") {
                        getId("help_navi_l_player").style.left = "70px"
                    } else {
                        getId("help_navi_l_player").style.left = "130px"
                    };
                    getId("progressBarBG").style.left = "10px";
                    getId("timeInfo").style.left = "595px";
                    getId("resolution").style.left = "740px";
                    getId("time").style.left = "850px"
                } else {
                    if (Main.PlayerMode == "1") {
                        getId("help_navi_l_player").style.left = "80px"
                    } else {
                        getId("help_navi_l_player").style.left = "140px"
                    };
                    getId("progressBarBG").style.left = "20px";
                    getId("timeInfo").style.left = "605px";
                    getId("resolution").style.left = "750px";
                    getId("time").style.left = "860px"
                };
                getIdb("help_navi_l_player");
                if (Main.PlayerMode == "1") {
                    if (Main.ya_epg_info_arr.length > 0 && Main.ya_prog_id == Main.chan_array_index) {
                        getIdb("p_info_line");
                        getIdb("p_epg_line");
                        var i = 302;
                        if (Main.seriesE) {
                            i = 280
                        };
                        if (getId("epg_info").innerHTML.length > i) {
                            getId("statusbar").style.top = "120px"
                        } else {
                            getId("statusbar").style.top = "100px"
                        }
                    } else {
                        getId("statusbar").style.top = "70px";
                        setTimeout(function() { Main.UpdateChannelInfo(); }, 400)
                    }
                }
            }
        };
        if (Main.PlayerMode == "1") {
            getIdb("resolution")
        } else {
            getIdn("resolution")
        };
        if (API.Pstyle == "1") {
            getIdb("p_second_line")
        } else {
            getIdn("p_second_line")
        };
        getIdn("statusbar1");
        getIdb("player");
        clearTimeout(this.infobar_timer);
        if (Player.state != Player.PAUSE_VOD) {
            Display.infobarTimer()
        }
    }
};

Display.hideplayer = function () {
    getIdn("player");
    getId("statusbar").style.top = "10px";
    if (Main.epg_info_step != 0) {
        Main.epg_info_step = 0;
        GetNextEpgInfo()
    }
};

Display.infobarTimer = function () {
    this.infobar_timer = setTimeout(function() { Display.hideplayer(); }, 5000)
};

Display.status = function (o, i) {
    getIdn("version");
    getIdb("statusbar");
    widgetAPI.putInnerHTML(getId("status"), o);
    clearTimeout(this.status_timer);
    if (i == undefined) {
        Display.statusTimer(3000)
    } else {
        if (i != 0) {
            Display.statusTimer(i)
        }
    }
};

Display.status1 = function (i) {
    getIdb("statusbar1");
    widgetAPI.putInnerHTML(getId("status1"), i);
    clearTimeout(this.status1_timer);
    Display.status1Timer()
};

Display.hidestatus = function () {
    getIdn("statusbar");
    getIdb("version")
};

Display.statusTimer = function (i) {
    this.status_timer = setTimeout(function() { Display.hidestatus(); }, i)
};

Display.status1Timer = function () {
    this.status1_timer = setTimeout(function() { getIdn("statusbar1"); }, 3000)
};

var KeyHandler = {
    NumberEntered: "",
    ChSelectorTimeout: null,
    Menu: 0,
    Focus: 1,
    guide_step: 0,
    black_line: false,
    bl: false,
    send_Return: false
};

function ShowMenuTV() {
    if (KeyHandler.Menu == 0) {
        Main.registVOLTVKey();
        pluginAPI.ShowTools(1);
        if (Main.serieC || Player.state == Player.STOPPED) {
            KeyHandler.Menu = 1
        }
    } else {
        Main.registVOLTVKey();
        pluginAPI.ShowTools(0);
        KeyHandler.Menu = 0
    }
}

function SmartExit() {
    widgetAPI.blockNavigation(event);
    if (Player.state == Player.STOPPED) {
        if (KeyHandler.send_Return) {
            widgetAPI.sendReturnEvent()
        };
        KeyHandler.send_Return = true;
        Display.status("<b style=\"color:yellow\">To quit - press \"EXIT\" again!</b>", 2000);
        setTimeout(function() { KeyHandler.send_Return=false; }, 2000)
    } else {
        Player.ReturnMenu()
    }
}

KeyHandler.setFocus = function (i) {
    KeyHandler.Focus = i;
    switch (i) {
    case 0:
        getId("MainMenu_Anchor").focus();
        if (!Main.seriesC) {
            pluginAPI.registKey(tvKey.KEY_TOOLS)
        };
        break;
    case 1:
        getId("LoadingPlayer_Anchor").focus();
        break;
    case 2:
        getId("LivePlayer_Anchor").focus();
        if (!Main.seriesC) {
            pluginAPI.unregistKey(tvKey.KEY_TOOLS)
        };
        break;
    case 3:
        getId("VODPlayer_Anchor").focus();
        if (!Main.seriesC) {
            pluginAPI.unregistKey(tvKey.KEY_TOOLS)
        };
        break;
    case 4:
        getId("Selectbox_Anchor").focus();
        break;
    case 5:
        getId("RedFav_Anchor").focus();
        break;
    case 6:
        getId("Guide_Anchor").focus();
        break;
    case 7:
        getId("Setup_Anchor").focus();
        break;
    default:
        break
    }
};
KeyHandler.KanalSelector = function () {
    if (KeyHandler.NumberEntered > API.channels.length) {
        Display.status("Input error", 500)
    } else {
        if (KeyHandler.NumberEntered > 0) {
            Main.selected_channel = (KeyHandler.NumberEntered < 11) ? KeyHandler.NumberEntered - 1 : ((KeyHandler.NumberEntered % 10) > 0) ? (KeyHandler.NumberEntered % 10) - 1 : 9;
            Main.selected_page = Math.round(KeyHandler.NumberEntered / 10);
            if (Main.selected_channel > 3) {
                Main.selected_page--
            };
            Main.chan_array_index = parseInt(KeyHandler.NumberEntered - 1);
            if (Main.loading_pl) {
                Player.ReturnMenu()
            } else {
                Main.block_info = true;
                Main.UpdateChannelInfo();
                setTimeout(function(){ Main.PlayChannel(); }, 20)
            }
        }
    };
    KeyHandler.NumberEntered = ""
};
KeyHandler.Keys10 = function (o) {
    var i = "";
    switch (o) {
    case tvKey.KEY_1:
        i = "1";
        break;
    case tvKey.KEY_2:
        i = "2";
        break;
    case tvKey.KEY_3:
        i = "3";
        break;
    case tvKey.KEY_4:
        i = "4";
        break;
    case tvKey.KEY_5:
        i = "5";
        break;
    case tvKey.KEY_6:
        i = "6";
        break;
    case tvKey.KEY_7:
        i = "7";
        break;
    case tvKey.KEY_8:
        i = "8";
        break;
    case tvKey.KEY_9:
        i = "9";
        break;
    case tvKey.KEY_0:
        i = "0";
        break;
    default:
        break
    };
    KeyHandler.NumberEntered = KeyHandler.NumberEntered + i;
    if (KeyHandler.NumberEntered != "") {
        Display.hideplayer();
        if (Main.PlayerMode == "0" && Player.state != Player.STOPPED) {
            Main.player.info(KeyHandler.NumberEntered)
        } else {
            Display.status1(KeyHandler.NumberEntered)
        };
        clearTimeout(this.ChSelectorTimeout);
        this.ChSelectorTimeout = setTimeout(function() { KeyHandler.KanalSelector(); }, 2000)
    }
};
KeyHandler.RedFavKeyDown = function () {
    var i = event.keyCode;
    switch (i) {
    case tvKey.KEY_EXIT:
        SmartExit();
        break;
    case 106:
        ;
    case tvKey.KEY_DOWN:
        Main.selectNextChannel();
        break;
    case 105:
        ;
    case tvKey.KEY_UP:
        Main.selectPrevChannel();
        break;
    case tvKey.KEY_LEFT:
        Main.selectPrevPage();
        break;
    case tvKey.KEY_RIGHT:
        Main.selectNextPage();
        break;
    case tvKey.KEY_RED:
        Main.delFavorites();
        break;
    case tvKey.KEY_GREEN:
        Main.moveFavorites(1);
        break;
    case tvKey.KEY_YELLOW:
        Main.moveFavorites(-1);
        break;
    case tvKey.KEY_BLUE:
        if (API.favorites.length > 1) {
            Main.showFavSelector()
        };
        break;
    case tvKey.KEY_RETURN:
        widgetAPI.blockNavigation(event);
        Main.RED = false;
        Main.Menu();
        break;
    case tvKey.KEY_STOP:
        widgetAPI.blockNavigation(event);
        if (Player.state != Player.STOPPED) {
            Player.stopV()
        };
        setTimeout(function() { getIdn('main'); }, 100);
        hideWeather();
        break;
    default:
        break
    }
};
KeyHandler.GuideKeyDown = function () {
    var i = event.keyCode;
    switch (i) {
    case 256:
        ;
    case 1057:
        ;
    case tvKey.KEY_RETURN:
        ;
    case tvKey.KEY_GUIDE:
        widgetAPI.blockNavigation(event);
        Main.PlayPrevPlaylist();
        if (Player.state == Player.PLAYING_LIVE) {
            this.guide_step = 1
        };
        break;
    case tvKey.KEY_EXIT:
        SmartExit();
        break;
    case 106:
        ;
    case tvKey.KEY_DOWN:
        Main.selectNextChannel();
        break;
    case 105:
        ;
    case tvKey.KEY_UP:
        Main.selectPrevChannel();
        break;
    case tvKey.KEY_LEFT:
        Main.selectPrevPage();
        break;
    case tvKey.KEY_RIGHT:
        Main.selectNextPage();
        break;
    case 68:
        ;
    case 1078:
        scrollDown();
        Scrol("allInfo", 20);
        break;
    case 65:
        ;
    case 1080:
        scrollUp();
        Scrol("allInfo", -20);
        break;
    default:
        break
    }
};
KeyHandler.MainMenuKeyDown = function () {
    var o = event.keyCode;
    KeyHandler.Keys10(o);
    switch (o) {
    case tvKey.KEY_SOURCE:
        if (!Main.FirstStart) {
            Main.pl_url = "ScanUSB";
            Main.playlist()
        };
        break;
    case 1086:
        ;
    case 84:
        if (API.XML_URL.indexOf("start.xml") != 0) {
            Main.start = true;
            Main.playlist()
        } else {
            Main.PlayPrevPlaylist()
        };
        break;
    case 256:
        ;
    case 1057:
        ;
    case tvKey.KEY_GUIDE:
        widgetAPI.blockNavigation(event);
        if (Main.play_chan_array_index != Main.chan_array_index) {
            this.guide_step = 0
        };
        if (Main.yandextv_mode && this.guide_step == 0 && Main.ya_prog_info_arr.length > 0) {
            Main.guide = true;
            Main.ReadPlArr(API.XML_URL, Main.ya_prog_info_arr)
        } else {
            if (Player.state == Player.PLAYING_LIVE && this.guide_step == 1) {
                this.guide_step = 0;
                Main.SetSelectedPosition();
                getIdn("main");
                Display.hidestatus();
                KeyHandler.setFocus(2);
                Display.showplayer()
            } else {
                Display.status("There is no EPG!", 500)
            }
        };
        break;
    case tvKey.KEY_INFO:
        confirm.openWindow();
        Display.status("MAC = " + Main.MAC + " | Parser = " + Main.Supe_ext, 5000);
        break;
    case tvKey.KEY_TOOLS:
        hideScroll();
        if (!Main.FirstStart && !Main.help_info) {
            if (Player.state != Player.STOPPED) {
                Player.stopV();
                setTimeout(function() { getIdn('main'); }, 700);
                Main.LoadTimer(function() { SetupFormular(); }, 1500)
            } else {
                getIdn("main");
                Main.LoadTimer(function() { SetupFormular(); }, 600)
            }
        };
        break;
    case 1118:
        ;
    case tvKey.KEY_PANEL_MENU:
        ;
    case tvKey.KEY_MENU:
        widgetAPI.blockNavigation(event);
        ShowMenuTV();
        break;
    case 78:
        ;
    case 259:
        if (!Main.help_info) {
            Main.PlayPrevChannel()
        };
        break;
    case tvKey.KEY_EXIT:
        SmartExit();
        break;
    case tvKey.KEY_RETURN:
        widgetAPI.blockNavigation(event);
        if (Player.state != Player.STOPPED && Main.XML_URL == API.XML_URL) {
            this.guide_step = 0;
            Main.SetSelectedPosition();
            getIdn("main");
            Display.hidestatus();
            if (Player.state == Player.PLAYING_LIVE) {
                KeyHandler.setFocus(2)
            } else {
                KeyHandler.setFocus(3)
            };
            Display.showplayer();
            hideWeather();
            hideTemp();
            hideScroll()
        } else {
            Main.PlayPrevPlaylist()
        };
        break;
    case 106:
        ;
    case tvKey.KEY_DOWN:
        Main.selectNextChannel();
        if (Main.scrolling == 0) {
            document.getElementById("scroll_cursor").style.top = "80px"
        };
        break;
    case 105:
        ;
    case tvKey.KEY_UP:
        Main.selectPrevChannel();
        if (Main.scrolling == 0) {
            document.getElementById("scroll_cursor").style.top = "80px"
        };
        break;
    case tvKey.KEY_LEFT:
        Main.selectPrevPage();
        break;
    case tvKey.KEY_RIGHT:
        Main.selectNextPage();
        break;
    case 612:
        ;
    case 309:
        ;
    case tvKey.KEY_ENTER:
        if (KeyHandler.NumberEntered != "") {
            clearTimeout(this.ChSelectorTimeout);
            KeyHandler.KanalSelector()
        } else {
            if (Main.help_info) {
                Main.help_step++
            };
            Main.PlayChannel()
        };
        break;
    case tvKey.KEY_RED:
        hideScroll();
        if (!Main.help_info && !Main.FAV && API.categories.length > 2) {
            Main.showCategorySelector()
        } else {
            if (API.XML_URL.indexOf("history.dat") > 0) {
                Main.delHistory(API.XML_URL)
            } else {
                Display.status("Not Available!", 500)
            }
        };
        break;
    case tvKey.KEY_GREEN:
        hideScroll();
        if (!Main.FAV && !Main.block_fav && API.XML_URL.indexOf("Open") < 0) {
            if (API.favorites.length > 1) {
                Main.showFavSelector()
            } else {
                Main.saveFavorites()
            }
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case tvKey.KEY_YELLOW:
        hideScroll();
        if (!Main.block_fav && API.XML_URL.indexOf("Open") < 0) {
            if (API.favorites.length < 2 && !Main.FAV) {
                Main.FAV = true;
                Main.openCommonFile(Main.fav_url)
            } else {
                if (API.favorites.length > 1) {
                    Main.FAV = true;
                    Main.showFavSelector();
                    alert("[[[[[[[[[[[[[[FAV]]]]]]]]]]]]]]]")
                }
            }
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case tvKey.KEY_BLUE:
        if (Main.FAV && !Main.block_fav) {
            Main.RED = true;
            Main.Menu()
        } else {
            if (Player.state == Player.STOPPED) {
                if (Main.ret) {
                    this.bl = true
                };
                Main.PlayPrevPlaylist()
            }
        };
        break;
    case tvKey.KEY_FF:
        widgetAPI.blockNavigation(event);
        if (Main.yandextv_mode) {
            T.delta++;
            if (T.delta > 5) {
                T.delta = 0
            };
            YandexGetUrl(GetYindex())
        } else {
            ListNextPage()
        };
        break;
    case tvKey.KEY_PAUSE:
        widgetAPI.blockNavigation(event);
        if (Player.total_time != 0) {
            if (Player.state == Player.PAUSE_VOD) {
                Player.resumeVideo()
            } else {
                Player.pauseVideo()
            }
        } else {
            if (Main.yandextv_mode) {
                c = (Main.region != "") ? Main.region : API.CODE;
                Main.lost_date = ": <font style='font-size:16px;color:white;'>scroll page</font><font style='font-size:16px;color:cyan;'> P-/P+ </font>: <font style='font-size:16px;color:white;'>region - </font><font style='font-size:16px;color:cyan;'>" + c
				+ "</font> : <font style='font-size:16px;color:white;'>index - </font><font style='font-size:16px;color:cyan;'>"
				+ Main.ch_index
				+ "</font> :";
                Main.Ya_flag_step++;
                YandexGetUrl(GetYindex())
            } else {
                if (API.XML_URL.indexOf("start.xml") == 0) {
                    if (Main.ya_auto && !Main.ya_base_info) {
                        GetYaBaseInfo()
                    } else {
                        if (!Main.ya_base_info) {
                            Display.status("creating Yandex EPG from database")
                        };
                        setTimeout(function() { GetYandexBase(); }, 500)
                    }
                }
            }
        };
        break;
    case tvKey.KEY_RW:
        widgetAPI.blockNavigation(event);
        if (Main.yandextv_mode) {
            T.delta--;
            if (T.delta < -6) {
                T.delta = 0
            };
            YandexGetUrl(GetYindex())
        } else {
            ListPrevPage()
        };
        break;
    case 68:
        ;
    case 1078:
        Scrol("allInfo", 20);
        scrollDown();
        break;
    case 65:
        ;
    case 1080:
        Scrol("allInfo", -20);
        scrollUp();
        break;
    case tvKey.KEY_PLAY:
        widgetAPI.blockNavigation(event);
        if (Player.state == Player.PAUSE_VOD) {
            Player.resumeVideo()
        } else {
            if (Main.yandextv_mode) {
                if (!Main.ya_all_day) {
                    Main.ya_all_day = true
                } else {
                    Main.ya_all_day = false
                };
                YandexGetUrl(GetYindex())
            } else {
                if (Player.state == Player.STOPPED) {
                    Main.PlayChannel()
                } else {
                    if (Player.total_time != 0) {
                        if (!Player.next && !Player.repeat) {
                            Player.next = true;
                            Display.status("Resume playback", 1000)
                        } else {
                            if (Player.next && !Player.repeat) {
                                Player.repeat = true;
                                Display.status("Repeat playback", 1000)
                            } else {
                                if (Player.next && Player.repeat) {
                                    Player.next = false;
                                    Player.repeat = false;
                                    Display.status("All modes are disabled!", 1000)
                                }
                            }
                        }
                    }
                }
            }
        };
        break;
    case tvKey.KEY_STOP:
        widgetAPI.blockNavigation(event);
        showImageSet();
        if (Main.FAV) {
            if (Player.state != Player.STOPPED) {
                Player.stopV()
            };
            setTimeout(function() { getIdn('main'); }, 100);
            Main.LoadTimer(function() { ChannelSetupFormular(); }, 600)
        } else {
            if (!Main.help_info) {
                if (Player.state != Player.STOPPED) {
                    Player.stopV()
                };
                setTimeout(function() { getIdn('main'); }, 100);
                Main.LoadTimer(function() { SearchFormular(); }, 600)
            } else {
                if (Player.state != Player.STOPPED) {
                    Player.ReturnMenu()
                }
            }
        };
        break;
    case 1249:
        ;
    case 192:
        widgetAPI.blockNavigation(event);
        Display.status("MAC = " + Main.MAC + " | Parser = " + Main.Supe_ext, 5000);
        break;
    case 1236:
        ;
    case 1089:
        ;
    case tvKey.KEY_SUBTITLE:
        Player.SEFSetNextAudioStream();
        break;
    default:
        break
    }
};
KeyHandler.LoadingPlayerKeyDown = function () {
    var i = event.keyCode;
    KeyHandler.Keys10(i);
    switch (i) {
    case tvKey.KEY_UP:
        ;
    case 105:
        ;
    case 68:
        ;
    case 1078:
        if (!Main.loading_pl) {
            Main.block_info = true;
            Main.selectNextChannel();
            setTimeout(function(){ Main.PlayChannel(); }, 50)
        };
        break;
    case tvKey.KEY_DOWN:
        ;
    case 106:
        ;
    case 65:
        ;
    case 1080:
        if (!Main.loading_pl) {
            Main.block_info = true;
            Main.selectPrevChannel();
            setTimeout(function(){ Main.PlayChannel(); }, 50)
        };
        break;
    case 78:
        ;
    case 259:
        if (!Main.loading_pl) {
            Main.PlayPrevChannel()
        };
        break;
    case tvKey.KEY_EXIT:
        widgetAPI.blockNavigation(event);
        if (!Main.loading_pl) {
            Player.ReturnMenu()
        } else {
            API.stopRequest()
        };
        break;
    case tvKey.KEY_RETURN:
        widgetAPI.blockNavigation(event);
        if (!Main.loading_pl) {
            Player.ReturnMenu()
        };
        break;
    case tvKey.KEY_STOP:
        widgetAPI.blockNavigation(event);
        if (!Main.loading_pl) {
            Player.ReturnMenu()
        };
        break;
    default:
        break
    }
};
KeyHandler.SelectboxKeyDown = function () {
    var i = event.keyCode;
    switch (i) {
    case tvKey.KEY_DOWN:
        Selectbox.selectNextItem();
        break;
    case tvKey.KEY_UP:
        Selectbox.selectPrevItem();
        break;
    case tvKey.KEY_ENTER:
        if (Selectbox.title == "Select Size") {
            Selectbox.SelectSize()
        } else {
            if (Selectbox.title == "Select Favourites") {
                Selectbox.SelectFav()
            } else {
                Selectbox.SelectCategory()
            }
        };
        break;
    case tvKey.KEY_LEFT:
        Selectbox.selectPrevPage();
        break;
    case tvKey.KEY_RIGHT:
        Selectbox.selectNextPage();
        break;
    case tvKey.KEY_EXIT:
        ;
    case tvKey.KEY_RETURN:
        widgetAPI.blockNavigation(event);
        if (API.XML_URL != Main.fav_url) {
            Main.FAV = false
        };
        getIdn("selectbox");
        getIdb("rightHalf");
        if (Selectbox.title == "Select Size") {
            KeyHandler.setFocus(3)
        } else {
            if (!Main.RED) {
                KeyHandler.setFocus(0)
            } else {
                KeyHandler.setFocus(5)
            }
        };
        break;
    case tvKey.KEY_GREEN:
        if (Selectbox.title == "Select Favourites") {
            Selectbox.SelectFav()
        };
        break;
    case tvKey.KEY_YELLOW:
        if (Selectbox.title == "Select Favourites") {
            Selectbox.SelectFav()
        };
        break;
    case tvKey.KEY_BLUE:
        if (Selectbox.title == "Select Favourites") {
            Selectbox.SelectFav()
        };
        break;
    default:
        break
    }
};
KeyHandler.LivePlayerKeyDown = function () {
    var i = event.keyCode;
    KeyHandler.Keys10(i);
    switch (i) {
    case 1086:
        ;
    case 84:
        if (Player.size == 5) {
            if (Main.SetZoom) {
                Main.SetZoom = false
            } else {
                Main.SetZoom = true;
                Display.status("<table><tr><td><img src=\"img/buttons/move_m.png\"></img></td><td>- Set Zoom</td></tr></table>", 0)
            }
        };
        break;
    case 1057:
        ;
    case 256:
        ;
    case tvKey.KEY_GUIDE:
        widgetAPI.blockNavigation(event);
        if (Main.yandextv_mode) {
            Display.hideplayer();
            Main.Menu()
        } else {
            Display.status("NO EPG!", 500)
        };
        break;
    case tvKey.KEY_TOOLS:
        if (Main.serieC) {
            widgetAPI.blockNavigation(event)
        };
        break;
    case 1118:
        ;
    case tvKey.KEY_PANEL_MENU:
        ;
    case tvKey.KEY_MENU:
        widgetAPI.blockNavigation(event);
        ShowMenuTV();
        break;
    case tvKey.KEY_GREEN:
        if (Main.PlayerMode == "1") {
            Player.SEFSetNextAudioStream()
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case 20:
        if (Main.PlayerMode == "1") {
            Player.SEFSetNextAudioStream()
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case tvKey.KEY_YELLOW:
        Main.registVOLTVKey();
        pluginAPI.ShowTools(1);
        break;
    case 78:
        ;
    case 259:
        Main.PlayPrevChannel();
        break;
    case tvKey.KEY_BLUE:
        ;
    case 653:
        ;
    case 1249:
        ;
    case 1083:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "1") {
            if (Player.size >= 6) {
                Player.setSize(0, 1, 0)
            } else {
                Player.setSize(Player.size + 1, 1, 0)
            };
            Main.SetZoom = false
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case 1219:
        if (Main.PlayerMode == "1") {
            if (Player.get3DMode() >= 2) {
                Player.change3DMode(0)
            } else {
                Player.change3DMode(Player.get3DMode() + 1)
            }
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case tvKey.KEY_UP:
        ;
    case 105:
        ;
    case 68:
        ;
    case 1078:
        if (Main.SetZoom) {
            if (Player.Ph < 150) {
                Player.Ph++;
                Player.setSize(Player.size, 1, 0)
            }
        } else {
            Main.block_info = true;
            Main.selectNextChannel();
            setTimeout(function(){ Main.PlayChannel(); }, 20)
        };
        break;
    case tvKey.KEY_DOWN:
        ;
    case 106:
        ;
    case 65:
        ;
    case 1080:
        if (Main.SetZoom) {
            if (Player.Ph > 50) {
                Player.Ph--;
                Player.setSize(Player.size, 1, 0)
            }
        } else {
            Main.block_info = true;
            Main.selectPrevChannel();
            setTimeout(function(){ Main.PlayChannel(); }, 20)
        };
        break;
    case tvKey.KEY_RIGHT:
        if (Main.SetZoom) {
            if (Player.Pw < 150) {
                Player.Pw++;
                Player.setSize(Player.size, 1, 0)
            }
        } else {
            SetVolume(0)
        };
        break;
    case tvKey.KEY_LEFT:
        if (Main.SetZoom) {
            if (Player.Pw > 50) {
                Player.Pw--;
                Player.setSize(Player.size, 1, 0)
            }
        } else {
            SetVolume(1)
        };
        break;
    case tvKey.KEY_INFO:
        ;
    case tvKey.KEY_ENTER:
        if (KeyHandler.NumberEntered != "") {
            clearTimeout(this.ChSelectorTimeout);
            KeyHandler.KanalSelector()
        } else {
            if (Main.PlayerMode == "0") {
                Main.player.info("Flash player")
            };
            Display.showplayer()
        };
        break;
    case 612:
        ;
    case 309:
        ;
    case tvKey.KEY_STOP:
        ;
    case tvKey.KEY_EXIT:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "0") {
            Main.stopFPlayer();
            Main.Menu()
        } else {
            Player.ReturnMenu()
        };
        break;
    case tvKey.KEY_RETURN:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "0") {
            Main.stopFPlayer()
        } else {
            Display.hideplayer()
        };
        Main.Menu();
        break;
    case tvKey.KEY_PLAY:
        if (Main.Foto) {
            if (Main.SlideShowInterval == null) {
                Main.SlideShowInterval = setInterval(function() { StartSlideShow(); }, 8000);
                Display.status("Start SlideShow", 0)
            } else {
                Display.status("Stop SlideShow", 500);
                StopSlideShow()
            }
        } else {
            if (Main.PlayerMode == "1") {
                Player.play(Player.url, 0)
            } else {
                Display.status("Not Available!", 500)
            }
        };
        break;
    case tvKey.KEY_FF:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "1") {
            if (Main.epg_info_step <= Main.ya_epg_info_arr.length - 1) {
                Main.epg_info_step++;
                GetNextEpgInfo()
            } else {
                Display.status("No data!", 500)
            }
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case tvKey.KEY_PAUSE:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "1") {
            Main.epg_info_step = 0;
            GetNextEpgInfo()
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case tvKey.KEY_RW:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "1") {
            if (Main.epg_info_step > 0) {
                Main.epg_info_step--;
                GetNextEpgInfo()
            } else {
                Display.status("No data!", 500)
            }
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case 192:
        if (this.black_line) {
            getIdn("black_line_top");
            this.black_line = false
        } else {
            getIdb("black_line_top");
            this.black_line = true
        };
        break;
    case 650:
        ;
    case 1089:
        ;
    case tvKey.KEY_SUBTITLE:
        if (Main.PlayerMode == "1") {
            Player.SEFSetNextAudioStream()
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    default:
        break
    }
};
KeyHandler.VODPlayerKeyDown = function () {
    var i = event.keyCode;
    switch (i) {
    case tvKey.KEY_0:
        Player.PercentJump(0);
        Display.status("0%");
        break;
    case tvKey.KEY_1:
        Player.PercentJump(1);
        break;
    case tvKey.KEY_2:
        Player.PercentJump(2);
        break;
    case tvKey.KEY_3:
        Player.PercentJump(3);
        break;
    case tvKey.KEY_4:
        Player.PercentJump(4);
        break;
    case tvKey.KEY_5:
        Player.PercentJump(5);
        break;
    case tvKey.KEY_6:
        Player.PercentJump(6);
        break;
    case tvKey.KEY_7:
        Player.PercentJump(7);
        break;
    case tvKey.KEY_8:
        Player.PercentJump(8);
        break;
    case tvKey.KEY_9:
        Player.PercentJump(9);
        break;
    case 1086:
        ;
    case 84:
        if (Player.size == 5) {
            if (Main.SetZoom) {
                Main.SetZoom = false
            } else {
                Main.SetZoom = true;
                Display.status("<table><tr><td><img src=\"img/buttons/move_m.png\"></img></td><td>- Set Zoom</td></tr></table>", 0)
            }
        };
        break;
    case 78:
        ;
    case 259:
        Main.PlayPrevChannel();
        break;
    case 105:
        ;
    case 68:
        ;
    case 1078:
        Main.block_info = true;
        Main.selectNextChannel();
        setTimeout(function(){ Main.PlayChannel(); }, 20);
        break;
    case 106:
        ;
    case 65:
        ;
    case 1080:
        Main.block_info = true;
        Main.selectPrevChannel();
        setTimeout(function(){ Main.PlayChannel(); }, 20);
        break;
    case tvKey.KEY_TOOLS:
        if (Main.serieC) {
            widgetAPI.blockNavigation(event)
        };
        break;
    case tvKey.KEY_INFO:
        Display.showplayer();
        break;
    case 1118:
        ;
    case tvKey.KEY_PANEL_MENU:
        ;
    case tvKey.KEY_MENU:
        widgetAPI.blockNavigation(event);
        ShowMenuTV();
        break;
    case tvKey.KEY_UP:
        if (Main.SetZoom) {
            if (Player.Ph > 50) {
                Player.Ph++;
                Player.setSize(Player.size, 1, 0)
            }
        } else {
            Player.MinutesJump(2)
        };
        break;
    case tvKey.KEY_DOWN:
        if (Main.SetZoom) {
            if (Player.Ph > 50) {
                Player.Ph--;
                Player.setSize(Player.size, 1, 0)
            }
        } else {
            Player.MinutesJump(-2)
        };
        break;
    case tvKey.KEY_LEFT:
        if (Main.SetZoom) {
            if (Player.Pw > 50) {
                Player.Pw--;
                Player.setSize(Player.size, 1, 0)
            }
        } else {
            SetVolume(1)
        };
        break;
    case tvKey.KEY_RIGHT:
        if (Main.SetZoom) {
            if (Player.Pw < 150) {
                Player.Pw++;
                Player.setSize(Player.size, 1, 0)
            }
        } else {
            SetVolume(0)
        };
        break;
    case tvKey.KEY_BLUE:
        ;
    case 653:
        ;
    case 1249:
        ;
    case 1083:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "1") {
            if (Player.size >= 6) {
                Player.setSize(0, 1, 0)
            } else {
                Player.setSize(Player.size + 1, 1, 0)
            };
            Main.SetZoom = false
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case tvKey.KEY_ENTER:
        if (Player.save_time != 0) {
            Player.PlaySaveTime()
        } else {
            if (Player.state == Player.PAUSE_VOD) {
                Player.resumeVideo()
            } else {
                Player.pauseVideo()
            }
        };
        break;
    case tvKey.KEY_RETURN:
        widgetAPI.blockNavigation(event);
        if (Player.total_time == 0) {
            Player.stopV()
        };
        Main.Menu();
        break;
    case 612:
        ;
    case 309:
        ;
    case tvKey.KEY_STOP:
        ;
    case tvKey.KEY_EXIT:
        widgetAPI.blockNavigation(event);
        Player.ReturnMenu();
        break;
    case tvKey.KEY_RED:
        if (Main.url_arr.length > 1) {
            Main.showSiseSelector();
            Main.LoadTimer(function() {
				getIdn('selectbox');
				getIdb('rightHalf');
				KeyHandler.setFocus(3);
			}, 20000)
        } else {
            Display.status("Not Available!", 500)
        };
        break;
    case tvKey.KEY_GREEN:
        if (Main.hardware_type == 0 || Main.hardware_type == 1) {
            Main.registVOLTVKey();
            pluginAPI.ShowTools(0)
        } else {
            Player.SEFSetNextAudioStream()
        };
        break;
    case tvKey.KEY_YELLOW:
        Main.registVOLTVKey();
        pluginAPI.ShowTools(1);
        break;
    case 1219:
        if (Player.get3DMode() >= 2) {
            Player.change3DMode(0)
        } else {
            Player.change3DMode(Player.get3DMode() + 1)
        };
        break;
    case tvKey.KEY_FF:
        widgetAPI.blockNavigation(event);
        Player.MinutesJump(0.5);
        break;
    case tvKey.KEY_PAUSE:
        widgetAPI.blockNavigation(event);
        if (Player.state == Player.PAUSE_VOD) {
            Player.resumeVideo()
        } else {
            Player.pauseVideo()
        };
        break;
    case tvKey.KEY_RW:
        widgetAPI.blockNavigation(event);
        Player.MinutesJump(-0.5);
        break;
    case 192:
        if (this.black_line) {
            getIdn("black_line_top");
            this.black_line = false
        } else {
            getIdb("black_line_top");
            this.black_line = true
        };
        break;
    case tvKey.KEY_PLAY:
        if (Player.state == Player.PAUSE_VOD) {
            Player.resumeVideo()
        } else {
            if (!Player.next && !Player.repeat) {
                Player.next = true;
                Display.status("Continuous playback", 1000)
            } else {
                if (Player.next && !Player.repeat) {
                    Player.repeat = true;
                    Display.status("Repeat playback", 1000)
                } else {
                    if (Player.next && Player.repeat) {
                        Player.next = false;
                        Player.repeat = false;
                        Display.status("All modes are disabled!", 1000)
                    }
                }
            }
        };
        break;
    case 655:
        ;
    case 1089:
        ;
    case tvKey.KEY_SUBTITLE:
        Player.SEFSetNextAudioStream();
        break;
    default:
        break
    }
};

var Player = {
    plugin: null,
    Screen3Dplugin: null,
    SefPlugin: null,
    buffering_timer: null,
    state: -1,
    w: 0,
    h: 0,
    Pw: 100,
    Ph: 100,
    message: "",
    size: 0,
    STOPPED: 0,
    LOADING: 1,
    PLAYING_LIVE: 2,
    PLAYING_VOD: 3,
    PAUSE_VOD: 4,
    statusmessage: "",
    total_time: 0,
    cur_time: 0,
    save_time: 0,
    delta_time: 0,
    next: false,
    repeat: false,
    Sef: false,
    jump: false,
    long_pause: false,
    mode3D: 0,
    status3D: "",
    tnum: 0,
    url: "",
    h_url: "",
    serr: 0,
    eerr: "",
    ch: false,
    ch_t: 0
};

Player.init = function () {
    var o = true;
    this.state = this.STOPPED;
    var i = getId("pluginObjectNNavi");
    var q = i.GetFirmware();
    alert("d= " + q);
    q = q.split("-");
    if (q[1] && (q[1].indexOf("2011") != -1 || q[1].indexOf("2012") != -1 || q[1].indexOf("2013") != -1 || q[1].indexOf("2014") != -1)) {
        this.SefPlugin = getId("pluginObjectSef")
    };
    if (this.SefPlugin != null) {
        this.Sef = true
    } else {
        this.plugin = getId("pluginPlayer")
    };
    var p = getId("pluginObjectTVMW");
    if ((this.plugin != null || this.Sef) && p != null) {
        this.Screen3Dplugin = getId("pluginObjectScreen3D");
        p.SetMediaSource();
        if (this.plugin) {
            this.plugin.OnConnectionFailed = Player.OnConnectionFailed;
            this.plugin.OnNetworkDisconnected = Player.OnNetworkDisconnected;
            this.plugin.OnStreamNotFound = Player.OnStreamNotFound;
            this.plugin.OnRenderError = Player.OnRenderError;
            this.plugin.OnBufferingStart = Player.OnBufferingStart;
            this.plugin.OnBufferingProgress = Player.OnBufferingProgress;
            this.plugin.OnBufferingComplete = Player.OnBufferingComplete;
            this.plugin.OnCurrentPlayTime = Player.OnCurrentPlayTime
        }
    } else {
        o = false
    };
    return o
};

Player.get3DMode = function () {
    try {
        if (this.Screen3Dplugin != null) {
            if (1 == this.Screen3Dplugin.Flag3DEffectSupport() || this.Screen3Dplugin.Flag3DTVConnect() == 1) {
                return this.mode3D
            } else {
                return 0
            }
        }
    } catch (e) {
        return 0
    }
};

Player.change3DMode = function (i) {
    if (this.Screen3Dplugin != null) {
        this.mode3D = i;
        this.status3D = "";
        if (1 == this.Screen3Dplugin.Flag3DEffectSupport() || this.Screen3Dplugin.Flag3DTVConnect() == 1) {
            switch (i) {
            case 0:
                this.status3D = "3D OFF";
                break;
            case 1:
                this.status3D = "SIDE - BY - SIDE";
                break;
            case 2:
                this.status3D = "TOP - BOTTOM";
                break
            };
            if (Main.seriesC) {
                if (this.Screen3Dplugin.Check3DEffectMode(i) == 1) {
                    this.Screen3Dplugin.Set3DEffectMode(i)
                }
            } else {
                Player.play(Player.url, 0)
            }
        }
    }
};

Player.OnConnectionFailed = function () {
    Player.error(9)
};

Player.OnNetworkDisconnected = function () {
    Player.error(8)
};

Player.OnStreamNotFound = function () {
    Player.error(7)
};

Player.OnRenderError = function (i) {
    Player.error(i)
};

Player.error = function (i) {
    if (this.state != this.STOPPED && i >= 1) {
        this.eerr = (i == 1)
			? "Unsupported container"
			: (i == 2)
				? "Unsupported video codec"
				: (i == 3)
					? "Unsupported audio codec"
					: (i == 4)
						? "Unsupported aspect ratio"
						: (i == 5)
							? "Unsupported refresh rate"
							: (i == 6)
								? "Corrupted stream!"
								: (i == 7)
									? "Missing File"
									: (i == 8)
										? "Disconnected network"
										: (i == 9)
											? "Connection failed"
											: this.eerr;
        if (i < 7 && this.serr < 3) {
            this.serr++;
            if (i < 3 && i != 6) {
                Player.play(this.url, 0)
            }
        } else {
            if (this.eerr != "") {
                Display.status(Player.eerr);
                setTimeout(function() { Player.ReturnMenu(); }, 500)
            }
        }
    }
};

Player.AutoReStart = function () {
    if (this.state != this.LOADING && this.total_time == 0) {
        var i = 10000;
        if (Main.serieC && this.url.indexOf("udp://") >= 0) {
            i = 15000
        };
        Player.BufferingTimer(function() { Player.play(Player.url,0); }, i);
        Display.status("Auto Restart", 3000)
    }
};

Player.OnBufferingStart = function () {
    if (this.state != this.STOPPED) {
        Player.AutoReStart();
        if (!this.jump && !Main.Foto) {
            Display.status("Buffer : 1%")
        }
    }
};

Player.OnBufferingProgress = function (i) {
    if (this.state != this.STOPPED) {
        if (!this.jump && !Main.Foto) {
            Display.status("Buffer : " + i + "%", 5000)
        }
    }
};

Player.OnBufferingComplete = function () {
    clearTimeout(this.buffering_timer);
    if (this.state != this.STOPPED) {
        if (this.state == this.LOADING) {
            Player.message = "";
            getId("progressBar").style.width = "0px";
            try {
                this.total_time = parseInt((this.Sef)
					? this.SefPlugin.Execute("GetDuration")
					: Player.plugin.GetDuration())
            } catch (a) {
                this.total_time = 0
            };
            if (this.total_time > 0 && this.url.indexOf("mms://") != 0 && this.url.indexOf(".m3u8") == -1 || this.url.indexOf(".mp3") > 0) {
                this.state = this.PLAYING_VOD;
                KeyHandler.setFocus(3);
                this.h_url = "vod_history.dat"
            } else {
                this.state = this.PLAYING_LIVE;
                KeyHandler.setFocus(2);
                this.h_url = "live_history.dat"
            };
            Player.GetResolution();
            setTimeout(function() { Player.GetVideoSize(); }, 1000);
            if (!Main.Foto) {
                Player.GetAudioNum()
            };
            if (this.status3D != "") {
                Player.message = this.status3D
            };
            if (Main.url_arr.length > 1) {
                Player.message += "<tr><table><tr><td><img src=\"img/buttons/red_m.png\"></img></td><td>- Set Quality</td></tr></table></tr>"
            };
            Main.LoadTimer(function() {
				if(Player.message != "")
					Display.status("<table>" + Player.message + "</table>", 6000);
				Main.saveHistory(Player.h_url);
				if(Player.state == Player.PLAYING_VOD)
					Player.getSaveTime();
			}, 2000);
            setTimeout(function() { Player.message = ""; }, 3000);
            Display.loadinghide();
            Display.showplayer()
        };
        if (this.jump) {
            Display.showplayer();
            setTimeout(function() { Display.hideplayer(); }, 1500);
            this.jump = false
        };
        Display.hidestatus()
    }
};

Player.BufferingTimer = function (o, i) {
    clearTimeout(this.buffering_timer);
    this.buffering_timer = setTimeout(o, i)
};

Player.SetBuffer = function () {
    if (Main.buffer != "") {
        var i = parseInt((Main.buffer * 1048576), 10);
        var o = (Main.ibuffer > 0) ? parseInt((Main.buffer * i / 100), 10) : parseInt((i / 5), 10);
        if (this.Sef) {
            this.SefPlugin.Execute("SetTotalBufferSize", i);
            this.SefPlugin.Execute("SetInitialBuffer", o);
            this.SefPlugin.Execute("SetInitialTimeOut", 20);
            this.SefPlugin.Execute("SetPendingBuffer", o)
        } else {
            this.plugin.SetTotalBufferSize(i);
            this.plugin.SetInitialBuffer(o);
            this.plugin.SetInitialTimeOut(20);
            this.plugin.SetPendingBuffer(o)
        }
    }
};

Player.ReturnMenu = function () {
    Player.stopV();
    Main.Menu()
};

Player.deinit = function () {
    Player.stop();
    alert("Player deinit")
};

Player.stop = function () {
    clearTimeout(this.buffering_timer);
    this.message = "";
    this.eerr = "";
    this.w = 0;
    this.h = 0;
    this.Pw = parseInt(API.Pw);
    this.Ph = parseInt(API.Ph);
    this.serr = 0;
    this.tnum = 0;
    this.total_time = 0;
    this.cur_time = 0;
    this.save_time = 0;
    this.ch = false;
    this.jump = false;
    this.long_pause = false;
    if (this.state != this.STOPPED) {
        this.state = this.STOPPED;
        Player.SaveUrl();
        if (this.Sef) {
            this.SefPlugin.Execute("Stop");
            this.SefPlugin.Execute("ClearScreen");
            this.SefPlugin.Close()
        } else {
            if (this.plugin != null) {
                this.plugin.Stop();
                this.plugin.ClearScreen()
            }
        }
    }
};

Player.stopV = function () {
    Player.stop();
    this.repeat = false;
    this.ch_t = 0;
    this.mode3D = 0;
    this.status3D = "";
    Selectbox.url_selected = 0;
    Main.ya_epg_info_arr = [];
    StopSlideShow();
    Display.loadinghide();
    Display.hideplayer();
    Display.hidestatus()
};

Player.play = function (i, o) {
    this.url = i;
    Player.stop();
    Player.state = Player.LOADING;
    KeyHandler.setFocus(1);
    if (!Main.Foto) {
        Display.loadingshow()
    };
    if (this.Sef) {
        this.SEFPlay(this.url, o)
    } else {
        if (this.url.indexOf(".mp3") > 0) {
            Main.buffer = 0.5
        };
        Player.SetBuffer();
        Player.setSize(0, 0, 1);
        this.plugin.Play(this.url)
    }
};

Player.SaveUrl = function () {
    if (this.cur_time > 120000) {
        var i = [this.url + "|" + this.cur_time];
        Main.readFile(i, "url.dat");
        if (i.length > 10) {
            i.pop()
        };
        for (var o = 1; o < i.length; o++) {
            if (i[o].indexOf(this.url) == 0) {
                i.splice(o, 1);
                break
            }
        };
        Main.writeFile(i, "url.dat")
    }
};

Player.getSaveTime = function () {
    if (this.state == this.PLAYING_VOD && this.url.indexOf("video/x-flv") < 0 && this.url.indexOf(".flv") < 0) {
        if (this.ch_t > 0 && this.ch) {
            this.save_time = this.ch_t;
            Main.LoadTimer(function() { Display.status(" Resume ?", 5000); }, 7000);
            setTimeout(function() { Player.save_time = 0; }, 15000)
        } else {
            var o = [];
            Main.readFile(o, "url.dat");
            for (var p = 0; p < o.length; p++) {
                if (o[p].indexOf(this.url) == 0) {
                    var i = o[p];
                    i = i.split("|");
                    this.save_time = i[1];
                    Main.LoadTimer(function() { Display.status(" Resume ?", 5000); }, 7000);
                    setTimeout(function() { Player.save_time = 0; }, 20000);
                    break
                }
            }
        }
    }
};

Player.PlaySaveTime = function () {
    if (this.state == this.PLAYING_VOD) {
        var i = (this.save_time - this.cur_time) / 1000;
        this.statusmessage = "resume!";
        if (i > 0 && !this.jump) {
            Player.JumpForward(i - 3)
        };
        Player.save_time = 0;
        Player.BufferingTimer(function() {
			Display.status("resume failed!", 2000);
			Player.play(Player.url, 0);
		}, 10000)
    }
};

Player.GetResolution = function () {
    if (this.state != this.STOPPED) {
        if (this.url.indexOf(".mp3") < 0 && this.w == 0) {
            try {
                if (this.Sef) {
                    var o = this.SefPlugin.Execute("GetVideoResolution");
                    o = o.split("|");
                    if (o.length > 0) {
                        this.w = o[0];
                        this.h = o[1]
                    }
                } else {
                    this.h = this.plugin.GetVideoHeight();
                    this.w = this.plugin.GetVideoWidth()
                }
            } catch (c) {
                this.w = 0;
                this.h = 0
            }
        };
        if (this.w == 5) {
            this.h = 432;
            this.w = 540
        } else {
            if (this.w == 4) {
                this.h = 270;
                this.w = 480
            } else {
                if (this.w == 3) {
                    this.h = 288;
                    this.w = 384
                } else {
                    if (this.w < 128 || this.w == "") {
                        this.h = 0;
                        this.w = 0
                    }
                }
            }
        };
        var i = this.w + "X" + this.h;
        if (this.url.indexOf(".mp3") > 0) {
            i = "- MP3 -"
        };
        widgetAPI.putInnerHTML(getId("resolution"), i)
    }
};

Player.GetVideoSize = function () {
    if (this.state != this.STOPPED) {
        if (this.w == 0 || this.w == "") {
            Player.GetResolution()
        };
        if (Player.mode3D == 0 && !Main.Foto) {
            Player.size = (Main.ssize != "") ? parseInt(Main.ssize) : (API.Size != "") ? parseInt(API.Size) : parseInt(this.size)
        } else {
            Player.size = 0
        };
        if (this.url.indexOf(".mp3") < 0) {
            setTimeout(function() { Player.setSize(Player.size, 1, 1); }, 100)
        }
    }
};

Player.setSize = function (p, o, i) {
    if (this.state != this.STOPPED && this.state != this.PAUSE_VOD) {
        var q = this.w;
        var l = this.h;
        if (o > 0) {
            if (((q / l < 1.35 && API.a_size1 < 6) || (q / l < 1.79 && q / l >= 1.35 && API.a_size2 < 6) || (q / l >= 1.79 && API.a_size3 < 6)) && i == 0) {
                if (p > 5) {
                    p = 0
                }
            };
            this.size = p;
            Main.ssize = p.toString();
            if (this.w == 0 || this.w == "") {
                Player.GetResolution()
            }
        };
        var z, G, E, R, D, u, s, y, j;
        z = 0;
        G = 0;
        E = 960;
        R = 540;
        D = 0;
        u = 0;
        s = q;
        y = l;
        switch (p) {
        case 0:
            if (q / l < 1.79 || this.w == 0) {
                j = "16x9 FULL"
            } else {
                j = "ORIGINAL";
                R = 960 * l / q;
                G = (540 - R) / 2
            };
            break;
        case 1:
            if (q == 0) {
                j = "w/h=1.67";
                z = 30;
                E = 900
            } else {
                j = "14x9";
                u = 0.0625 * l;
                s = q;
                y = 0.875 * l
            };
            break;
        case 2:
            if (q == 0) {
                j = "w/h=1.56";
                z = 60;
                E = 840
            } else {
                if (q / l < 1.35) {
                    j = "4x3 ZOOM 2";
                    u = 0.115 * l;
                    s = q;
                    y = 0.77 * l
                } else {
                    return Player.setSize(5, o, i)
                }
            };
            break;
        case 3:
            if (q == 0) {
                j = "w/h=1.45";
                z = 90;
                E = 780
            } else {
                if (q / l < 1.35) {
                    j = "4x3 ZOOM 1";
                    z = 60;
                    E = 840;
                    u = 0.0625 * l;
                    s = q;
                    y = 0.875 * l
                } else {
                    return Player.setSize(5, o, i)
                }
            };
            break;
        case 4:
            if (q / l < 1.35 || this.w == 0) {
                j = "4x3";
                z = 120;
                E = 720
            } else {
                return Player.setSize(5, o, i)
            };
            break;
        case 5:
            if (q == 0) {
                j = "w/h=2";
                G = 30;
                R = 480
            } else {
                if (Player.Pw <= 100) {
                    E = 9.6 * Player.Pw;
                    z = (960 - E) / 2
                } else {
                    s = q * (2 - Player.Pw / 100);
                    D = q * (Player.Pw / 200 - 0.5)
                };
                if (Player.Ph <= 100) {
                    R = 5.4 * Player.Ph;
                    G = (540 - R) / 2
                } else {
                    y = l * (2 - Player.Ph / 100);
                    u = l * (Player.Ph / 200 - 0.5)
                };
                j = "X-ZOOM - set size: CH LIST";
                if (Main.SetZoom) {
                    j += " _ w=" + Player.Pw + "% _ h=" + Player.Ph + "%"
                }
            };
            break;
        case 6:
            if (q == 0) {
                return Player.setSize(0, 0, i)
            } else {
                if (q / l < 1.35) {
                    return Player.setSize(parseInt(API.a_size1), 0, i)
                } else {
                    if (q / l < 1.79) {
                        return Player.setSize(parseInt(API.a_size2), 0, i)
                    } else {
                        return Player.setSize(parseInt(API.a_size3), 0, i)
                    }
                }
            };
            break;
        case 7:
            if (q / l >= 1.79) {
                j = "ORIGINAL ZOOM 1";
                R = 960 * l / (q * 0.85);
                G = (540 - R) / 2;
                D = 0.075 * q;
                s = 0.85 * q
            } else {
                j = "16x9 ZOOM 1";
                D = 0.0625 * q;
                u = 0.0625 * l;
                s = 0.875 * q;
                y = 0.875 * l
            };
            break;
        case 8:
            if (q / l >= 1.79) {
                j = "ORIGINAL ZOOM 2";
                R = 960 * l / (q * 0.75);
                G = (540 - R) / 2;
                D = 0.125 * q;
                s = 0.75 * q
            } else {
                j = "16x9 ZOOM 2";
                D = 0.125 * q;
                u = 0.125 * l;
                s = 0.75 * q;
                y = 0.75 * l
            };
            break;
        default:
            alert("Not specified");
            j = "Not specified!";
            break
        };
        if ((o == 1 || (this.size == 6 && o == 0)) && i == 1) {
            Player.message = "<tr><table><tr><td><img src=\"img/buttons/blue_m.png\"></img></td><td>- " + j + "</td></tr></table></tr>" + Player.message
        } else {
            if ((o > 0 || (this.size == 6 && o == 0 && i == 0)) && !Main.Foto) {
                Display.status(j)
            }
        };
        if (this.Sef) {
            this.SefPlugin.Execute("SetDisplayArea", z, G, E, R);
            this.SefPlugin.Execute("SetCropArea", D, u, s, y)
        } else {
            this.plugin.SetDisplayArea(z, G, E, R);
            this.plugin.SetCropArea(D, u, s, y)
        }
    }
};

Player.JumpForward = function (i) {
    if (this.state == this.PLAYING_VOD) {
        Display.status(this.statusmessage, 2000);
        this.jump = true;
        if (this.Sef) {
            this.SefPlugin.Execute("JumpForward", i)
        } else {
            this.plugin.JumpForward(i)
        };
        this.statusmessage = ""
    }
};

Player.JumpBackward = function (o) {
    if (this.state == this.PLAYING_VOD) {
        if (o > 3) {
            Display.status(this.statusmessage, 2000)
        };
        this.jump = true;
        if (this.Sef) {
            if (this.url.indexOf(".mp3") > 0) {
                var i = (this.cur_time / 1000) - o;
                Player.play(this.url, i)
            } else {
                this.SefPlugin.Execute("JumpBackward", o)
            }
        } else {
            this.plugin.JumpBackward(o)
        };
        this.statusmessage = ""
    }
};

Player.MinutesJump = function (q) {
    if (this.state == this.PLAYING_VOD && !this.jump) {
        var o = this.cur_time / 60000 * -1;
        var i = this.delta_time / 60000;
        this.statusmessage = q + " min.";
        var p = "";
        if (q >= 0) {
            this.statusmessage = "+" + this.statusmessage;
            if (q < i) {
                Player.JumpForward(q * 60)
            } else {
                this.delta_time = 0;
                Player.TestTime()
            }
        } else {
            if (q > o) {
                Player.JumpBackward(q * 60 * -1)
            } else {
                this.delta_time = 0;
                Player.TestTime()
            }
        }
    }
};

Player.PercentJump = function (o) {
    if (this.state == this.PLAYING_VOD && !this.jump) {
        this.statusmessage = o * 10 + "%";
        var i = (this.total_time * o / 10 - this.cur_time) / 1000;
        if (i > 0) {
            Player.JumpForward(i)
        } else {
            if (i < 0) {
                Player.JumpBackward(i * -1)
            }
        }
    }
};

Player.resumeVideo = function () {
    if (this.state == this.PAUSE_VOD) {
        Display.status(" > > > ", 500);
        if (this.Sef) {
            this.SefPlugin.Execute("Resume")
        } else {
            this.plugin.Resume()
        };
        this.state = this.PLAYING_VOD;
        if (this.url.indexOf("http://") >= 0 && Player.long_pause) {
            setTimeout(function() { Player.MinutesJump(-0.05); }, 100)
        };
        Display.hideplayer();
        clearTimeout(this.buffering_timer);
        this.long_pause = false
    }
};

Player.pauseVideo = function () {
    if (this.state == this.PLAYING_VOD) {
        if (this.Sef) {
            this.SefPlugin.Execute("Pause")
        } else {
            this.plugin.Pause()
        };
        this.state = this.PAUSE_VOD;
        Display.showplayer();
        Display.status("Pause", 0);
        Player.SaveUrl();
        Player.BufferingTimer(function() { Player.long_pause = true; }, 30000)
    }
};

Player.OnCurrentPlayTime = function (i) {
    if (this.total_time > 0) {
        this.cur_time = parseInt(i, 10);
        TimeInfo(this.cur_time, this.total_time);
        this.delta_time = this.total_time - this.cur_time;
        Player.TestTime()
    }
};

Player.TestTime = function () {
    if (this.delta_time == 0 && this.total_time != 0 && this.cur_time != 0) {
        if (this.repeat && this.next) {
            Player.play(this.url)
        } else {
            if (this.next) {
                Main.block_info = true;
                Main.selectNextChannel();
                setTimeout(function(){ Main.PlayChannel(); }, 20)
            } else {
                Player.ReturnMenu()
            }
        }
    } else {
        if (this.delta_time == 0) {
            Player.ReturnMenu();
            Display.status("Connection failed!", 500)
        }
    }
};

Player.SEFPlay = function (i, o) {
    this.SefPlugin.Open("Player", "1.000", "Player");
    this.SefPlugin.Execute("InitPlayer", i);
    this.SefPlugin.OnEvent = Player.SefOnEvent;
    if (Player.get3DMode() != 0) {
        if (Main.buffer > 10) {
            Main.buffer = 10
        };
        this.SefPlugin.Execute("SetPlayerProperty", "2", "3", Player.get3DMode())
    } else {
        if (this.url.indexOf(".mp3") > 0) {
            if (Main.buffer > 0.5) {
                Main.buffer = 0.5
            };
            this.SefPlugin.Execute("SetPlayerProperty", "5", "0", "0")
        }
    };
    Player.SetBuffer();
    Player.setSize(0, 0, 1);
    this.SefPlugin.Execute("StartPlayback", o)
};

Player.SefOnEvent = function (i, o) {
    switch (i) {
    case 1:
        Player.OnConnectionFailed();
        break;
    case 3:
        Player.OnStreamNotFound();
        break;
    case 4:
        Player.OnNetworkDisconnected();
        break;
    case 6:
        Player.OnRenderError(o);
    case 11:
        Player.OnBufferingStart();
        break;
    case 13:
        Player.OnBufferingProgress(o);
        break;
    case 12:
        Player.OnBufferingComplete();
        break;
    case 14:
        Player.OnCurrentPlayTime(o);
        break
    }
};

Player.SEFSetNextAudioStream = function () {
    if (this.state != this.STOPPED) {
        if (!this.Sef) {
            Display.status("Function is Not available!", 500)
        } else {
            if (this.tnum < 2) {
                Display.status("Only one sound track!", 500)
            } else {
                var i = this.SefPlugin.Execute("GetCurrentStreamID", 1);
                if (i >= 0) {
                    i++;
                    if (i > (this.tnum - 1)) {
                        i = 0
                    };
                    Player.SetAudioStream(i, 1)
                }
            }
        }
    }
};

Player.LangCodes = {
    6384738: "Albenian",
    6386285: "Armenian",
    6388325: "Azerbaijan",
    6448492: "Belorussian",
    6452588: "Bulgar",
    6514793: "Chinese",
    6647399: "English",
    6713957: "French",
    6776178: "German",
    6911073: "Italian",
    6975598: "Japanese",
    7037306: "Kazakh",
    7040882: "Korian",
    7368562: "Portuguese",
    7501171: "Russian",
    7564399: "Slovak",
    7564406: "Slovenian",
    7565409: "Spanish",
    7565673: "Albenian",
    7565936: "Serbian",
    7567205: "Swedish",
    7632242: "Turkish",
    7695218: "Ukranian",
    7699042: "Uzbek"
};

Player.SetAudioStream = function (q, o) {
    if (this.tnum > q) {
        Main.a_num = (q + 1).toString();
        this.SefPlugin.Execute("SetStreamID", 1, q);
        var i = this.SefPlugin.Execute("GetStreamLanguageInfo", 1, q);
        var p = Player.LangCodes[i];
        p = (p == null) ? "Unknown" : p;
        if (o > 0) {
            Display.status(p.toString() + " audio track \u2116" + (q + 1).toString())
        } else {
            Player.message += "<tr><td>" + p.toString() + " audio track \u2116" + (q + 1).toString() + "</td></tr>"
        }
    } else {
        Player.message += "<tr><td>Wrong \u2116 of audio track!</td></tr>"
    }
};

Player.GetAudioNum = function () {
    if (this.Sef) {
        try {
            this.tnum = this.SefPlugin.Execute("GetTotalNumOfStreamID", 1)
        } catch (a) {
            this.tnum = 0
        };
        if (this.tnum > 1) {
            if (Main.a_num != "") {
                Player.SetAudioStream((parseInt(Main.a_num) - 1), 0)
            } else {
                if (Main.hardware_type == 2) {
                    Player.message += "<tr><table><tr><td><img src=\"img/buttons/green_m.png\"></img></td><td> - Change audio track</td></tr></table></tr>"
                } else {
                    Player.message += "<tr><td><img src=\"img/buttons/green_m.png\"></img> or \"AD/SUBT\" - Change audio track</td></tr>"
                }
            }
        }
    }
};

function HelpSet() {
    Main.scrolling = 0;
    Display.loadinghide();
    Main.yandextv_mode = false;
    Main.ya_epg_info_arr = [];
    clearTimeout(Main.load_timer);
    getIdb("0_help");
    getIdb("6_help");
    getIdn("1_help");
    getIdn("2_help");
    getIdn("3_help");
    getIdn("3.1_help");
    getIdn("3.2_help");
    getIdn("3.3_help");
    getIdn("3.4_help");
    getIdn("4.1_help");
    getIdn("5_help");
    getIdn("7_help");
    getIdn("8_help");
    getIdn("9_help");
    getIdn("10_help");
    getIdn("10.1_help");
    getIdn("ya_date");
    getIdn("ya_info");
    getIdn("ya_help");
    getIdn("background");
    getIdn("channelList");
    if (Main.seriesE) {
        getIdn("0_help");
        getIdn("6_help")
    };
    getIdb("infoList");
    getIdb("main");
    widgetAPI.putInnerHTML(getId("infoList"), "")
}

SearchFormular = function () {
    showImageSet();
    var l = 7;
    var q = 30;
    var p = 44;
    if (Main.seriesE) {
        l = 6;
        q = 28;
        p = 36
    };
    if (API.search_on != "" && !Main.xxx) {
        Main.search = true
    };
    HelpSet();
    if (!Main.seriesE) {
        getIdb("12_help")
    };
    getIdn("4_help");
    var s = "search";
    if (Main.search || Main.xxx) {
        s = "search_h"
    };
    var o = "<div id=\"allInput\"><form>";
    hideScroll();
    if (Main.xxx) {
        widgetAPI.putInnerHTML(getId("version"), "Enter code.");
        o += "<span id=\"text_form0\">Access code to \"XXX\" (from 0 to 9999) : </span><input id=\"" + s + "\" type=\"text\" size=\"" + l + "\" maxlength=\"4\"></input>"
    } else {
        if (Main.search) {
            widgetAPI.putInnerHTML(getId("version"), "Enter your Search here ");
            o += "<span id=\"psearch\"> Find : </span><input id=\"" + s + "\" type=\"text\" size=\"" + q + "\" maxlength=\"200\"></input>"
        } else {
            widgetAPI.putInnerHTML(getId("version"), "Enter an address ");
            o += "<span id=\"psearch\"> Address : </span><input id=\"" + s + "\" type=\"text\" size=\"" + p + "\" maxlength=\"200\"></input>"
        }
    };
    o += "</form><form><span>\"ENTER\" - confirm input.</span></form><form><span>\"EXIT\" and \"RETURN\" - go back.</span></form>";
    if (!Main.xxx && !Main.search) {
        o += "<h3 style=\"padding-top:150px;text-align:center;\"> Warning !!!<br>If you provide URL of the playlist<br> and file extension doesnt contain \".xml\" or \".m3u\" ,<br>then put \"#\" in the front of URL.</h3>"
    };
    o += "</div>";
    widgetAPI.putInnerHTML(getId("infoList"), o);
    var i = new IMEShell(s, ime_callback);
    if (Main.Keyboard && !Main.seriesE) {
        i.setKeypadPos(110, 75)
    } else {
        i.setKeypadPos(110, 75);
        try {
            i.setQWERTYPos(-1, 53)
        } catch (p) {}
    };
    if (!Main.xxx) {
        var j = (Main.search) ? API.search_string : (Main.url != "") ? Main.url : Main.protocol;
        i.setString(j)
    };
    i.setKeyFunc(tvKey.KEY_RETURN, function (u) {
        widgetAPI.blockNavigation(event);
        if (Main.xxx) {
            Main.prev_pl_array.pop()
        };
        Main.Menu();
        return false
    });
    i.setKeyFunc(tvKey.KEY_EXIT, function (u) {
        widgetAPI.blockNavigation(event);
        if (Main.xxx) {
            Main.prev_pl_array.pop()
        };
        Main.Menu();
        return false
    });
    i.setEnterFunc(Search_ok);
    getId(s).focus()
};

Search_ok = function (o) {
    var o = "search";
    showImageSet();
    if (Main.search || Main.xxx) {
        o = "search_h"
    };
    var i = lrdPr(getId(o).value);
    if (i == "") {
        Main.Menu()
    } else {
        if (Main.xxx && API.Xcode != i) {
            Main.prev_pl_array.pop();
            Main.Menu();
            Display.status("Access denied!", 500)
        } else {
            if (Main.search || Main.xxx) {
                if (Main.pl_url.indexOf("history.dat") > 0) {
                    setTimeout(function() { Main.openCommonFile(Main.pl_url); }, 1000)
                } else {
                    API.XML_URL = Main.pl_url;
                    Main.loading_pl = true;
                    setTimeout(function() { API.Request(API.XML_URL); }, 500)
                };
                if (Main.search && !Main.xxx) {
                    API.search_string = i;
                    Display.status("<b style=\"color:#00ccff\">Please wait! Searching...</b>", 0)
                } else {
                    Main.Kill = API.Xcode;
                    API.Xcode = "0";
                    Display.status("<b style=\"color:#00ccff\">Access granted!</b>", 500)
                };
                KeyHandler.setFocus(0)
            } else {
                if (i.toLowerCase().indexOf(".m3u") > 0 || i.toLowerCase().indexOf(".xml") > 0 || i.toLowerCase().indexOf("#") == 0) {
                    if (i.toLowerCase().indexOf("#") == 0) {
                        i = i.replace("#", "")
                    };
                    Main.pl_url = i;
                    Main.url = ""
                } else {
                    Main.url = i;
                    Main.pl_url = ""
                };
                API.playlist_name = "";
                Main.name = "";
                KeyHandler.setFocus(0);
                Main.PlayChannel()
            }
        }
    }
};

function RunImeS(j, p) {
    var o = (j == "0") ? j : (parseInt(j) - 1).toString();
    var i = (parseInt(j) + 1).toString();
    var q = new IMEShell(j, ime_callback);
    if (Main.Keyboard && !Main.seriesE) {
        q.setKeypadPos(110, 75)
    } else {
        q.setKeypadPos(110, 75);
        try {
            q.setQWERTYPos(-1, 53)
        } catch (p) {}
    };
    getId(j).focus();
    q.setKeyFunc(tvKey.KEY_UP, function (l) {
        if (j != "0") {
            SetStyle1(j);
            Scrol("allInput", p[parseInt(o)]);
            SetStyle2(o);
            getId(o).focus()
        }
    });
    q.setKeyFunc(tvKey.KEY_DOWN, function (l) {
        if (p[parseInt(j)] != 0 || j == "0" || j == "1") {
            SetStyle1(j);
            Scrol("allInput", -p[parseInt(j)]);
            SetStyle2(i);
            RunImeS(i, p)
        }
    });
    q.setKeyFunc(tvKey.KEY_RETURN, function (l) {
        widgetAPI.blockNavigation(event);
        Main.Menu();
        return false
    });
    q.setKeyFunc(tvKey.KEY_EXIT, function (l) {
        widgetAPI.blockNavigation(event);
        Main.Menu();
        return false
    });
    q.setEnterFunc(SaveValue)
}

ChannelSetupFormular = function () {
    showImageSet();
    var u = 52;
    var s = 6;
    if (Main.seriesE) {
        u = 46;
        s = 5
    };
    HelpSet();
    if (!Main.seriesE) {
        getIdb("4_help");
        getIdb("11_help")
    } else {
        getIdn("4_help")
    };
    var l = Ach(3);
    if (l.length >= 1000) {
        l = "Edit impossible! Too big size."
    };
    var q = [];
    var R = parseInt(l.length / 100);
    for (var o = 0; o < R + 1; o++) {
        q[o] = l.substring(0, 100);
        l = l.replace(q[o], "")
    };
    var p = (Main.url == "") ? "playlist" : "stream";
    widgetAPI.putInnerHTML(getId("version"), "Editing options " + p);
    var j = "<div id=\"allInput\"><form><span>Name " + p 
	+ " : </span></form><form><input id=\"0\" type=\"text\" size=\"" + u 
	+ "\" maxlength=\"200\"/></form><form><span>URL address " + p 
	+ " : </span></form><form><input id=\"1\" type=\"text\" size=\"" + u 
	+ "\" maxlength=\"200\"/></form><form><span>Description, additional information : </span></form>";
    for (var o = 2; o < R + 3; o++) {
        j += "<form><input id=\"" + o + "\" type=\"text\" size=\"" + u + "\" maxlength=\"200\"/></form>"
    };
    j += "<form><span>Icons address " + p + " : </span></form><form><input id=\"" + (R + 3) + "\" type=\"text\" size=\"" + u + "\" maxlength=\"200\"/></form>";
    if (Main.url != "") {
        j += "<form><span>Starting aspect ratio :</span></form><form><span>\"0\"- 16X9 FULL or ORIGINAL , \"1\"- 14X9 ,</span></form><form><span>\"2\"- 4X3 ZOOM 2 , \"3\"- 4X3 ZOOM 1 ,\"4\"- 4X3 , </span></form><form><span id=\"text_form0\">\"5\"- X-ZOOM , \"6\"- AUTO . </span><input id=\"" + (R + 4) 
		+ "\" type=\"text\" size=\"" + s + "\" maxlength=\"2\"/></form><form><span id=\"text_form0\">Audio track number ( 1, 2, 3 . . . ) : </span><input id=\"" + (R + 5) 
		+ "\"  type=\"text\" size=\"" + s 
		+ "\" maxlength=\"2\"/></form><form><span id=\"text_form0\">Shift time EPG ( +/-12 h.) : </span><input id=\"" + (R + 6) 
		+ "\" type=\"text\" size=\"" + s 
		+ "\" maxlength=\"4\"/></form><form><span>Total buffer size  0.5 - 20 ( Mb.).</span></form><form><span id=\"text_form0\">If it is not specified - \"auto\" : </span><input id=\"" + (R + 7) + "\"  type=\"text\" size=\"" + s 
		+ "\" maxlength=\"3\"/></form><form><span>Start after buffer is  10 - 50 ( % ) .</span></form><form><span id=\"text_form0\">If it is not specified - \"auto\" : </span><input id=\"" + (R + 8) + "\"  type=\"text\" size=\"" + s 
		+ "\" maxlength=\"3\"/></form><form><span id=\"text_form0\"> Yandex region code ( \"213\"- Moscow ) : </span><input id=\"" + (R + 9) + "\"  type=\"text\" size=\"" + s 
		+ "\" maxlength=\"6\"/></form>"
    };
    j += "<form></form><form></form><form></form><form></form><form></form><form></form><form></form></div>";
    widgetAPI.putInnerHTML(getId("infoList"), j);
    var i = [0, 0];
    SetString("0", Main.name, 1);
    var D = (Main.pl_url != "") ? Main.pl_url : (Main.url != "") ? Main.url : "";
    SetString("1", D, 1);
    if (R == 0) {
        SetString("2", q[0], 1);
        i[2] = 72
    } else {
        SetString("2", q[0], 1);
        i[2] = 36;
        for (var o = 1; o < R; o++) {
            SetString(o + 2, q[o], 1);
            i[o + 2] = 36
        };
        SetString(R + 2, q[R], 1);
        i[R + 2] = 72
    };
    if (Main.url != "") {
        if (R == 0) {
            SetString("3", Main.logo, 1)
        } else {
            SetString(R + 3, Main.logo, 1)
        };
        i[R + 3] = 144;
        SetString(R + 4, Main.ssize, 1);
        i[R + 4] = 36;
        SetString(R + 5, Main.a_num, 1);
        i[R + 5] = 36;
        SetString(R + 6, Main.timeshift, 1);
        i[R + 6] = 72;
        SetString(R + 7, Main.buffer, 1);
        i[R + 7] = 72;
        SetString(R + 8, Main.ibuffer, 1);
        i[R + 8] = 36;
        SetString(R + 9, Main.region, 1);
        i[R + 9] = 0
    } else {
        if (R == 0) {
            SetString("3", Main.logo, 1)
        } else {
            SetString(R + 3, Main.logo, 1)
        };
        i[R + 3] = 0
    };
    RunImeS("0", i);
    SetStyle2("0")
};

SaveValue = function () {
    try {
        var E = lrdPr(getId("0").value);
        if (Main.url != "") {
            var bf = lrdPr(getId("1").value);
            var bd = ""
        } else {
            bd = lrdPr(getId("1").value);
            bf = ""
        };
        if (Ach(3).length < 1000) {
            var bb = parseInt(Ach(3).length / 100);
            var o = "";
            for (var R = 0; R < bb + 1; R++) {
                o += getId(2 + R).value
            };
            o = lrdPr(o)
        } else {
            o = Ach(3);
            bb = 0
        };
        var i = lrdPr(getId(bb + 3).value);
        if (Main.url != "") {
            var Z = dPr(getId(bb + 4).value);
            var s = dPr(getId(bb + 5).value);
            var y = dPr(getId(bb + 6).value);
            var p = dPr(getId(bb + 7).value);
            var D = dPr(getId(bb + 8).value);
            var l = dPr(getId(bb + 9).value)
        } else {
            Z = "";
            s = "";
            y = "";
            p = "";
            D = ""
        };
        var u = Main.ch_num - 1;
        var z = [];
        Main.readFile(z, Main.fav_url);
        if (z.length > 0) {
            var q = dSp(dI(E) + "|" + dI(bf) + "|" + dI(i) + "|" + dI(o) + "||" + dI(bd) + "|" + dI(Z) + "|" + dI(s) + "|" + dI(p) + "|" + dI(D) + "|" + dI(y) + "|" + dI(l) + "|" + Main.parser + "|" + Main.search_on);
            z.splice(u, 1, q);
            Main.writeFile(z, Main.fav_url);
            Main.playlist_prev = false;
            Main.DEL = true;
            Main.FAV = true;
            Main.openCommonFile(Main.fav_url)
        };
        Main.Menu()
    } catch (n) {}
};

Scrol = function (o, i) {
    Main.scrolling = Main.scrolling + i;
    if (Main.scrolling == 0 || Main.scrolling < 0) {
        getId(o).style.margin = Main.scrolling + "px 0px 0px 0px "
    } else {
        Main.scrolling = 0
    }
};

KeyHandler.SetupKeyDown = function () {
    var l = function () {
            var E = getId(Main.setup_id).value;
            for (var R = 0; R < i.length; R++) {
                if (E == i[R]) {
                    return R;
                    break
                }
            }
        };
    var i = [];
    var j = 0;
    var q = 0;
    var p = 0;
    switch (Main.setup_id) {
    case "9":
        i = ["ru", "ua", "by"];
        q = 36;
        j = 36;
        break;
    case "10":
        i = ["-12", "-11", "-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10", "+11", "+12"];
        q = 36;
        j = 36;
        break;
    case "11":
        i = ["auto-sync", "auto-unix", "manual"];
        q = 36;
        j = 36;
        break;
    case "12":
        i = ["-12", "-11", "-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10", "+11", "+12"];
        q = 36;
        j = 36;
        break;
    case "13":
        i = ["16X9", "14X9", "4X3-ZOOM 2", "4X3-ZOOM 1", "4X3", "X-ZOOM", "AUTO", "Not installed"];
        q = 36;
        j = 36;
        break;
    case "14":
        for (var D = 0; D < 101; D++) {
            i[D] = (D + 50).toString()
        };
        q = 36;
        j = 36;
        break;
    case "15":
        for (var D = 0; D < 101; D++) {
            i[D] = (D + 50).toString()
        };
        q = 36;
        j = 36;
        break;
    case "16":
        i = ["4X3", "4X3 ZOOM 1", "4X3 ZOOM 2", "14X9", "X-ZOOM"];
        q = 36;
        j = 36;
        break;
    case "17":
        i = ["16X9", "16X9 ZOOM 1", "16X9 ZOOM 2", "14X9", "X-ZOOM"];
        q = 36;
        j = 36;
        break;
    case "18":
        i = ["ORIGINAL", "ORIG.ZOOM 1", "ORIG.ZOOM 2"];
        q = 36;
        j = 36;
        break;
    case "19":
        i = ["square", "rectangular"];
        q = 36;
        j = 36;
        break;
    case "20":
        i = ["on", "off"];
        q = 72;
        j = 36;
        break;
    case "21":
        i = ["0", "0.5", "0.6", "0.7", "0.8", "0.9", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        q = 108;
        j = 72;
        break;
    case "22":
        i = ["0", "10", "15", "20", "25", "30", "35", "40", "45", "50"];
        q = 36;
        j = 108;
        break;
    case "23":
        i = ["on", "off"];
        q = 36;
        j = 36;
        break;
    case "24":
        i = ["on", "off"];
        q = 36;
        j = 36;
        break;
    case "25":
        i = ["on", "off"];
        q = 36;
        j = 36;
        break;
    case "26":
        i = ["240p", "360p", "480p", "720p", "1080p"];
        q = 36;
        j = 36;
        break;
    case "27":
        i = ["London", "Moscow", "Berlin", "Paris", "Rome", "Dublin", "Madrid", "Lisbon", "Vienna", "Warsaw", "Kiev", "Prague", "Athens", "Ankara"];
        q = 0;
        j = 36;
        break;
    case "28":
        i = ["on", "off"];
        q = 0;
        j = 36;
        break
    };
    var u = (parseInt(Main.setup_id) - 1).toString();
    var s = (Main.setup_id < 28) ? (parseInt(Main.setup_id) + 1).toString() : Main.setup_id;
    event.preventDefault();
    var o = event.keyCode;
    switch (o) {
    case tvKey.KEY_RETURN:
        ;
    case tvKey.KEY_EXIT:
        Return(0);
        break;
    case tvKey.KEY_ENTER:
        onEnter();
        break;
    case tvKey.KEY_RIGHT:
        p = l();
        if (p < i.length - 1) {
            p++
        } else {
            p = 0
        };
        SetString(Main.setup_id, i[p]);
        break;
    case tvKey.KEY_LEFT:
        p = l();
        if (p > 0) {
            p--
        } else {
            p = i.length - 1
        };
        SetString(Main.setup_id, i[p]);
        break;
    case tvKey.KEY_UP:
        SetStyle1(Main.setup_id);
        Scrol("allInput", j);
        SetStyle2(u);
        if (Main.setup_id == 9) {
            getId("8").focus()
        } else {
            Main.setup_id = u
        };
        break;
    case tvKey.KEY_DOWN:
        if (Main.setup_id < 28) {
            SetStyle1(Main.setup_id);
            Scrol("allInput", -q);
            SetStyle2(s)
        };
        Main.setup_id = s;
        break;
    default:
        break
    };
    return false
};

ime_callback = function () {};

RunIme = function (j) {
    var p = [0, 108, 72, 36, 36, 36, 36, 108, 36, 36];
    if (API.star_url == API.XML_URL) {
        p[1] = 72
    };
    if (Main.pl_url == "") {
        p[2] = 36
    };
    var o = (j == "0") ? j : (parseInt(j) - 1).toString();
    var i = (parseInt(j) + 1).toString();
    var q = new IMEShell(j, ime_callback, "en");
    if (Main.Keyboard && !Main.seriesE) {
        q.setKeypadPos(110, 75)
    } else {
        q.setKeypadPos(110, 75);
        try {
            q.setQWERTYPos(-1, 53)
        } catch (p) {}
    };
    getId(j).focus();
    q.setKeyFunc(tvKey.KEY_UP, function (l) {
        if (j != "0") {
            SetStyle1(j);
            Scrol("allInput", p[parseInt(j)]);
            SetStyle2(o);
            getId(o).focus()
        }
    });
    q.setKeyFunc(tvKey.KEY_DOWN, function (l) {
        SetStyle1(j);
        Scrol("allInput", -p[parseInt(i)]);
        SetStyle2(i);
        if (j == "8") {
            Main.setup_id = i;
            KeyHandler.setFocus(7)
        } else {
            RunIme(i)
        }
    });
    q.setKeyFunc(tvKey.KEY_RETURN, function (l) {
        Return(0);
        return false
    });
    q.setKeyFunc(tvKey.KEY_EXIT, function (l) {
        widgetAPI.sendReturnEvent()
    });
    q.setEnterFunc(onEnter)
};

var SSize = {
    0: "16X9",
    1: "14X9",
    2: "4X3-ZOOM 2",
    3: "4X3-ZOOM 1",
    4: "4X3",
    5: "X-ZOOM",
    6: "AUTO",
    7: "Not installed"
};

var ASize1 = {
    1: "14X9",
    5: "X-ZOOM",
    4: "4X3",
    3: "4X3 ZOOM 1",
    2: "4X3 ZOOM 2"
};

var ASize2 = {
    0: "16X9",
    1: "14X9",
    5: "X-ZOOM",
    7: "16X9 ZOOM 1",
    8: "16X9 ZOOM 2"
};

var ASize3 = {
    0: "ORIGINAL",
    7: "ORIG.ZOOM 1",
    8: "ORIG.ZOOM 2"
};

var STimemode = {
    0: "auto-sync",
    1: "auto-unix",
    2: "manual"
};

SetupFormular = function () {
    var G = 43;
    var E = 14;
    var R = 5;
    var q = 48;
    var p = 48;
    if (Main.seriesE) {
        G = 43;
        E = 14;
        R = 5;
        q = 48;
        p = 48
    };
    Main.FirstStart = true;
    showImageSet();
    HelpSet();
    if (!Main.seriesE) {
        getIdb("4_help");
        getIdb("11_help")
    } else {
        getIdn("4_help")
    };
    getIdb("help_set_par");
    widgetAPI.putInnerHTML(getId("version"), " Settings , MAC = " + Main.MAC);
    var l = "</span></form><form style=\"color:#00ccff;font-size:17px;\"><span>";
    if (API.XML_URL.length < 200) {
        var o = API.XML_URL;
        var i = "";
        if (API.XML_URL.length > q) {
            o = API.XML_URL.substr(0, q);
            var D = API.XML_URL.substr(q);
            var z = parseInt(D.length / p);
            for (var s = 0; s < z + 1; s++) {
                var j = D.substring(0, p);
                D = D.replace(j, "");
                i += l + j
            }
        }
    } else {
        o = "";
        i = "</span></form><form style=\"color:#00ccff;font-size:20px;\"><span>Link is too long!"
    };
    var u = "<div id=\"allInput\"><form><span> URL of the current playlist : <font style=\"color:#00ccff;font-size:17px;\">\"" + "hidden link" + "</font>" + "\"</span></form><form><span> URL of the Main playlist : </span></form><form><input id=\"0\" type=\"text\" size=\"" + G + "\" maxlength=\"200\"></input></form>";
    u += "<form><span> URL of the hidden playlist : </span></form><form><input id=\"1\" type=\"text\" size=\"" + G + "\" maxlength=\"200\"></input></form>";
    u += "<form><span id=\"text_form3\"> Login for hidden playlist :</span><input id=\"2\" type=\"text\" size=\"" + E
		+ "\" maxlength=\"40\"></input></form><form><span id=\"text_form3\">Pass for hidden playlist :</span><input id=\"3\" type=\"text\" size=\"" + E
		+ "\" maxlength=\"40\"></input></form><form><span id=\"text_form3\">UDP proxy ( IP : port ) :</span><input id=\"4\" type=\"text\" size=\"" + E
		+ "\" maxlength=\"40\"></input></form><form><span id=\"text_form0\">Access code to \"XXX\" ( 0 - 9999 ) : </span><input id=\"5\" type=\"text\" size=\"" + R
		+ "\" maxlength=\"4\"></input></form><form><span id=\"text_form0\">Code of Fav. name  ( 0 - 9999 ) :</span><input id=\"6\" type=\"text\" size=\"" + R
		+ "\" maxlength=\"4\"></input></form><form><span>Names of Fav. folders, any, order</span></form><form><span>( name 1 | name 2 | name 3 . . . ) : </span></form><form><input id=\"7\" type=\"text\" size=\"" + G
		+ "\" maxlength=\"200\"></input></form><form><span id=\"text_form0\"> Yandex region code ( \"213\"- Moscow ) : </span><input id=\"8\" type=\"text\" size=\"" + R
		+ "\" maxlength=\"7\"></input></form><form><span id=\"text_form1\">EPG from \"m.tv.yandex.</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"9\"></div></form><form><span id=\"text_form1\">EPG Shift time (+/-12 h.)</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"10\"></div></form><form><span id=\"text_form2\">Widget Time : </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"11\"></div></form><form><span id=\"text_form1\">Time zone for \"auto.\" ( +/-12 h.)</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"12\"></div></form><form><span id=\"text_form2\">Starting video size : </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"13\"></div></form><form><span id=\"text_form1\">\"X-ZOOM\" height 50 - 150 ( % )</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"14\"></div></form><form><span id=\"text_form1\">\"X-ZOOM\" width 50 - 150 ( % ) </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"15\"></div></form><form><span id=\"text_form2\">AUTO for w/h<1.35 </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"16\"></div></form><form><span id=\"text_form2\">AUTO for 1.34 < w/h <1.79 </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"17\"></div></form><form><span id=\"text_form2\">AUTO for  w/h > 1.78 </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"18\"></div></form><form><span id=\"text_form2\">Icons shape :</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"19\"></div></form><form><span id=\"text_form1\">External icons :</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"20\"></div></form><form><span>Total buffer size 0.5 - 20 ( Mb.).</span></form><form><span id=\"text_form1\">\"0\"- auto or from the playlist :</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"21\"></div></form><form><span>Start playback after reading </span></form><form><span> from 10 to 50 ( % ) of total buffer size.</span></form><form><span id=\"text_form1\">\"0\"- auto or from the playlist :</span><img src=\"img/buttons/lr_m.png\"></img><div id=\"22\"></div></form><form><span id=\"text_form1\">Bottom help panel  </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"23\"></div></form><form><span id=\"text_form1\">Post MAC address </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"24\"></div></form><form><span id=\"text_form1\">Masking a TV browser </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"25\"></div></form><form><span id=\"text_form1\">Limit the video quality </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"26\"></div></form><form><span id=\"text_form1\">Choose Weather Forecast for </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"27\"></div></form><form><span id=\"text_form1\">Reset to default </span><img src=\"img/buttons/lr_m.png\"></img><div id=\"28\"></div></form><form></form><form></form><form></form><form></form><form></form><form></form><form></form><form></form></div>";
    widgetAPI.putInnerHTML(getId("infoList"), u);
    SetString("0", API.star_url, 1);
    SetString("1", API.Surl, 1);
    SetString("2", API.Login, 1);
    SetString("3", API.Pasword, 1);
    SetString("4", API.Proxy, 1);
    var y = (API.Xcode == 0) ? "0" : (API.Xcode.length == 1) ? "#" : (API.Xcode.length == 2) ? "##" : (API.Xcode.length == 3) ? "###" : "####";
    SetString("5", y, 1);
    SetString("6", API.Scode, 1);
    SetString("7", API.Favname, 1);
    SetString("8", API.CODE, 1);
    SetString("9", API.REG, 2);
    y = (API.Timeshift.indexOf("-") < 0 && API.Timeshift != "0") ? "+" + API.Timeshift : API.Timeshift;
    SetString("10", y, 2);
    SetString("11", STimemode[parseInt(API.Timemode)], 3);
    y = (API.Timefix.indexOf("-") < 0 && API.Timefix != "0") ? "+" + API.Timefix : API.Timefix;
    SetString("12", y, 2);
    y = (API.Size == "") ? "7" : API.Size;
    SetString("13", SSize[parseInt(y)], 3);
    SetString("14", API.Ph, 2);
    SetString("15", API.Pw, 2);
    SetString("16", ASize1[parseInt(API.a_size1)], 3);
    SetString("17", ASize2[parseInt(API.a_size2)], 3);
    SetString("18", ASize3[parseInt(API.a_size3)], 3);
    y = (API.Forma == "0" || API.Forma == "2") ? "square" : "rectangular";
    SetString("19", y, 3);
    y = (API.Forma == "0" || API.Forma == "1") ? "on" : "off";
    SetString("20", y, 2);
    SetString("21", API.Buffer, 2);
    SetString("22", API.Ibuffer, 2);
    y = (API.Pstyle == "1") ? "on" : "off";
    SetString("23", y, 2);
    y = (API.Mac == "1") ? "on" : "off";
    SetString("24", y, 2);
    y = (API.Header == "1") ? "on" : "off";
    SetString("25", y, 2);
    SetString("26", API.Vquality, 2);
    SetString("27", API.Cityname, 1);
    SetString("28", "off", 2);
    RunIme("0");
    SetStyle2("0")
};

SetString = function (p, o, i) {
    if (o == "") {
        o = " "
    };
    widgetAPI.putInnerHTML(getId(p), o);
    getId(p).value = o;
    if (i == 1) {
        SetStyle1(p)
    } else {
        if (i == 2) {
            SetStyle1(p);
            getId(p).style.width = "52px"
        } else {
            if (i == 3) {
                SetStyle1(p);
                getId(p).style.width = "120px"
            }
        }
    }
};

SetStyle1 = function (i) {
    getId(i).style.color = "black";
    getId(i).style.background = "#999999";
    getId(i).style.border = "2px solid #ffffff"
};

SetStyle2 = function (i) {
    getId(i).style.color = "blue";
    getId(i).style.background = "#eeeeee";
    getId(i).style.border = "2px solid #999999"
};

Return = function (i) {
    widgetAPI.blockNavigation(event);
    if (API.channels.length > 0 && API.XML_URL == Main.pre_pl_url && i == 0) {
        Main.Menu()
    } else {
        location.reload(true)
    }
};

/*Iejus i nustatymus?*/
onEnter = function () {
    try {
        var bi = getId("28").value;
        if (bi == "on") {
            var o = ["start.xml", "", "", "", "", "0", "0", "Main|IP-TV|Films|Series", 213, "ru", "0", "0", "0", "", "100", "100", "2", "0", "0", "0", "0", "0", "1", "1", "0", "360p", "London"]
        } else {
            var N = lrdPr(getId("0").value);
            var bh = lrdPr(getId("2").value);
            var bf = lrdPr(getId("3").value);
            var bb = (dPr(bh) != "" && dPr(bf) != "") ? lrdPr(getId("1").value) : bb = "";
            var Z = lrdPr(getId("4").value);
            var y = dPr(getId("5").value);
            y = (API.Xcode != 0 && (y == API.Xcode || y == Main.ver.substr(2))) ? "0" : (API.Xcode != 0) ? API.Xcode : y;
            var E = dPr(getId("6").value);
            var D = lrdPr(getId("7").value);
            var s = dPr(getId("8").value);
            var K = getId("9").value;
            var q = getId("10").value;
            var l = getId("11").value;
            for (var bg in STimemode) {
                if (STimemode[bg] == l) {
                    l = bg.toString();
                    break
                }
            };
            var bd = getId("12").value;
            var p = getId("13").value;
            for (var bg in SSize) {
                if (SSize[bg] == p) {
                    p = bg.toString();
                    break
                }
            };
            p = (p == "7") ? "" : p;
            var z = getId("14").value;
            var G = getId("15").value;
            var R = getId("16").value;
            for (var bg in ASize1) {
                if (ASize1[bg] == R) {
                    R = bg.toString();
                    break
                }
            };
            var u = getId("17").value;
            for (var bg in ASize2) {
                if (ASize2[bg] == u) {
                    u = bg.toString();
                    break
                }
            };
            var br = getId("18").value;
            for (var bg in ASize3) {
                if (ASize3[bg] == br) {
                    br = bg.toString();
                    break
                }
            };
            var M = getId("19").value;
            var J = getId("20").value;
            M = (M == "square" && J == "on")
				? "0"
				: (M == "rectangular" && J == "on")
					? "1"
					: (M == "square" && J == "off")
						? "2"
						: "3";
            var i = getId("21").value;
            var L = getId("22").value;
            var I = getId("23").value;
            I = (I == "on") ? "1" : "0";
            var bm = getId("24").value;
            bm = (bm == "on") ? "1" : "0";
            var bk = getId("25").value;
            bk = (bk == "on") ? "1" : "0";
            var bj = getId("26").value;
            var bs = lrdPr(getId("27").value);
            o = [N, bb, bh, bf, Z, y, E, D, s, K, q, l, bd, p, z, G, R, u, br, M, i, L, I, bm, bk, bj, bs]
        };
        Main.writeFile(o, API.fn);
        API.init();
        if (K != API.REG) {
            Return(1)
        } else {
            Return(0)
        }
    } catch (H) {}
};

function setGen() {
    var i = [];
    if (Main.write) {
        i = [API.GenUrl, API.GenT];
        Main.writeFile(i, "01" + API.fn)
    } else {
        Main.readFile(i, "01" + API.fn);
        if (i.length > 0) {
            API.GenUrl = i[0];
            API.GenT = i[1]
        }
    };
    if (dPr(API.GenUrl) != "" && dPr(API.GenT) != "") {
        AGen()
    }
}

/**
 * Set the element with the specified id display style to 'block'
 * @param {string} i The element id
 * @return {Object}
 */
function getIdb(i) {
    try {
        return getId(i).style.display = "block"
    } catch (b) {
        return ""
    }
}

/**
 * Set the element with the specified id display style to 'none'
 * @param {string} i The element id
 * @return {Object}
 */
function getIdn(i) {
    try {
        return getId(i).style.display = "none"
    } catch (b) {
        return ""
    }
}

/**
 * Get the element with the specified id
 * @param {string} i The element id
 * @return {Object} The document element
 */
function getId(i) {
    try {
        return document.getElementById(i)
    } catch (b) {
        return ""
    }
}

/**
 * Get all elements with the specified tag name
 * @param {string} i The elements tag name
 * @return {Object} The document elements
 */
function getTN(i) {
    try {
        return document.getElementsByTagName(i)
    } catch (b) {
        return ""
    }
}

/**
 * Get all elements with the specified class name
 * @param {string} i The elements class name
 * @return {Object} The document elements
 */
function getCl(i) {
    try {
        return document.getElementsByClassName(i)
    } catch (b) {
        return ""
    }
}

/**
 * Get API channel
 * @param {number} i Channel info number (0 - name, 1 - url, 2 - logo, ...)
 * @return
 */
function Ach(i) {
    try {
        return API.channels[Main.chan_array_index][i]
    } catch (b) {
        return ""
    }
}

/**
 * Remove '|' symbol from string
 * @param {string} o
 * @return {string}
 */
function dI(o) {
    var i = (typeof o == "string" && o != "") ? o.replace(/\|/g, "") : "";
    return i
}

/**
 * Remove '/>' or '>' (close tag's) from string
 * @param {string} o
 * @return {string}
 */
function dTg(o) {
    var i = (typeof o == "string" && o != "") ? o.replace(/<\/?[^>]+>/g, "") : "";
    return i
}

/**
 * Remove '\n', '\r' and '\t' (newlines, tabs) from string
 * @param {string} o
 * @return {string}
 */
function dSp(o) {
    var i = (typeof o == "string" && o != "") ? o.replace(/[\n\r\t]/g, "") : "";
    return i
}

/**
 * Remove whitespaces from string begin and end, then remove '\n', '\r' and '\t' (newlines, tabs)
 * @param {string} o
 * @return {string}
 */
function lrdPr(o) {
    var i = (typeof o == "string" && o != "") ? o.replace(/(^\s*)|(\s*)$/g, "").replace(/[\n\r\t]/g, "") : "";
    return i
}

function dPr(o, p) {
    var i = (typeof o == "string" && o != "") ? o.replace(/\s/g, "") : "";
    if (p == 1) {
        i = (!isNaN(i)) ? i : ""
    };
    return i
}

function xhrAbort() {
    null != API.XHRObj && (API.XHRObj.abort(), API.XHRObj.destroy(), API.XHRObj = null)
}

function decodeURI(i) {
    for (var o = 0; i.indexOf("%") >= 0 && 10 > o; o++) {
        try {
            i = decodeURIComponent(i)
        } catch (c) {
            try {
                i = unescape(i)
            } catch (c) {
                break
            }
        }
    };
    return i
}

function signa(i) {
    i = i.replace("s=", "");
    b = "signature=" + API.Request("http://185.25.119.98/php/youtubesign/youtube.php?sig=" + i);
    return b
}

function PsR(i, o, p) {
    if (dPr(i) && void(0) !== o) {
        if (o) {
            var q = i.indexOf(o)
        }; - 1 != q ? (i = i.substr(q + o.length), p && (q = i.indexOf(p), -1 != q && (i = i.substr(0, q)))) : i = ""
    };
    return i
}

function getYoutubeUrl1(i) {
    var y = "";
    for (var o = 0; o < i.length; o++) {
        var p = PsR(i[o], "itag%3D", "%26");
        if (p) {
            var q = "";
            switch (p) {
            case "121":
                q = "HD 1080p.mp4";
                break;
            case "37":
                q = "HD 1080p.mp4";
                break;
            case "120":
                q = "HD 720p.mp4";
                break;
            case "22":
                q = "HD 720p.mp4";
                break;
            case "84":
                q = "HD 720p.h264";
                break;
            case "35":
                q = "480p.flv";
                break;
            case "18":
                q = "360p.mp4";
                break;
            case "36":
                q = "240p.mp4"
            };
            if (q) {
                var j = i[o].split("%26");
                i[o] = "";
                for (var l = "", s = "", bx = 0; bx < j.length; bx++) {
                    if (j[bx] && (j[bx] = decodeURI(j[bx]), 0 == j[bx].indexOf("url=") ? l = j[bx] : 0 == j[bx].indexOf("sig=") || 0 == j[bx].indexOf("signature=") ? s = j[bx] : 0 == j[bx].indexOf("s=") && (s = signa(j[bx]))), l && (l.indexOf("sig=") > 0 || l.indexOf("signature=") > 0 || l.indexOf("&s=") > 0)) {
                        if (l.indexOf("&s=") >= 0) {
                            var u = l.split("&s=")[1];
                            i[o] = u[0].replace("url=", "") + "&" + DYce(u[1].split("&")[0])
                        } else {
                            i[o] = l.replace("url=", "").replace("sig=", "signature=")
                        };
                        break
                    };
                    if (l && s) {
                        i[o] = l.replace("url=", "") + "&" + s.replace("sig=", "signature=");
                        break
                    }
                };
                if (!i[o]) {
                    continue
                };
                r = [i[o], q];
                Main.url_arr.push(r)
            };
            if (q.indexOf(API.Vquality) > -1) {
                y = i[o];
                Selectbox.url_selected = Main.url_arr.length - 1
            };
            if (Main.url_arr.length > 0 && y == "") {
                y = Main.url_arr[0][0]
            };
            if ("240p.mp4" == q) {
                break
            }
        } else {
            if (o > 3) {
                break
            }
        }
    };
    return y
}

function getYoutubeUrl(G) {
    var D = ["&el=embedded", "&el=detailpage", "&el=vevo", ""];
    var l = "";
    var y = "";
    var ca = false;
    for (var u = 0; u < D.length; u++) {
        var j = D[u];
        var q = "http://www.youtube.com/get_video_info?&video_id=" + G + j + "&ps=default&eurl=&gl=US&hl=en";
        API.AsReqMode = false;
        var l = API.Request(q);
        l = l.match(/url_encoded_fmt_stream_map=(.*?)&/);
        if (l != null) {
            if (l[1].indexOf("itag") >= 0) {
                var i = l[1].split("%2C");
                if (decLongUrl(i[0]).indexOf("itag=43") > -1) {
                    i.splice(0, 1)
                };
                if (decLongUrl(i[1]).indexOf("itag=43") > -1) {
                    i.splice(1, 1)
                };
                for (var s = 0; s < i.length; s++) {
                    i[s] = decLongUrl(i[s]);
                    var E = parser(i[s], "itag=", "&");
                    if (E != "") {
                        var R = "";
                        var o = [];
                        switch (E) {
                        case "22":
                            R = "720p";
                            break;
                        case "18":
                            R = "480p";
                            break;
                        case "5":
                            R = "360p";
                            break;
                        case "36":
                            R = "240p";
                            break
                        };
                        if (R != "") {
                            i[s] = i[s].replace("itag=" + E + "&", "");
                            if (i[s].indexOf("&url=") > 0) {
                                var p = i[s].split("&url=");
                                i[s] = p[1]
                            } else {
                                i[s] = i[s].replace("url=", "")
                            };
                            o = [i[s], R];
                            Main.url_arr.push(o);
                            if (Main.ver > 2.53 && R.indexOf(API.Vquality) > -1) {
                                ca = true;
                                y = i[s];
                                Selectbox.url_selected = Main.url_arr.length - 1
                            };
                            if (ca == false) {
                                if (R.indexOf(API.Vquality) < 0) {
                                    y = i[s];
                                    ca = true
                                }
                            }
                        };
                        if (R == "240p") {
                            break
                        }
                    }
                };
                if (Main.url_arr.length > 0 && y == "") {
                    y = Main.url_arr[1][1]
                }
            };
            break
        }
    };
    return y
}

function getVkUrl(D) {
    var u = "";
    var q = "";
    var i = [];
    D = D.replace("vkontakte.ru", "vk.com");
    q = API.Request(D);
    var l = q.match(/var video_host = [\s\S]*(?=var video_title)/);
    if (l != null) {
        var p = l[0].replace(/[';]/g, "").split("\x0A");
        if (p.length == 6) {
            for (j = 0; j < 5; j++) {
                p[j] = dPr(p[j].split("=")[1])
            };
            if (p[4] == 0 && p[3] == 0 && p[1] == 0) {
                u = "http://" + p[0] + "/assets/video/" + p[2] + parser(q, "vkid=", "&") + ".vk.flv"
            } else {
                if (p[4] == 0 && p[3] == 0) {
                    u = p[0] + "u" + p[1] + "/videos/" + p[2] + ".flv"
                } else {
                    for (var j = parseInt(p[4]); j > -1; j--) {
                        switch (j) {
                        case 3:
                            o = "720.mp4";
                            s = "720p.mp4";
                            break;
                        case 2:
                            o = "480.mp4";
                            s = "480p.mp4";
                            break;
                        case 1:
                            o = "360.mp4";
                            s = "360p.mp4";
                            break;
                        case 0:
                            var o = "240.mp4";
                            var s = "240p.mp4";
                            break
                        };
                        i = [p[0] + "u" + p[1] + "/videos/" + p[2] + "." + o, s];
                        Main.url_arr.push(i);
                        if (s.indexOf(API.Vquality) > -1) {
                            u = i[0];
                            Selectbox.url_selected = Main.url_arr.length - 1
                        }
                    };
                    if (Main.url_arr.length > 0 && u == "") {
                        u = Main.url_arr[0][0]
                    }
                }
            }
        }
    };
    return u
}

function getRuTubeUrl(D) {
    var u = "";
    var q = "";
    var i = [];
    var ca = false;
    q = API.Request("http://rutube.ru/api/oembed/?url=" + D + "&format=xml");
    D = q.match(/embed\/(.*?)"/);
    q = API.Request("http://rutube.ru/play/embed/" + D[1]);
    q = q.split("\"m3u8\":");
    D = q[1].match(/"(.*?)"},/);
    q = API.Request(D[1]);
    f = q.match(/http:\/\/(.*?)\n/g);
    f.reverse();
    for (var j = 0; j < f.length; j++) {
        switch (j) {
        case 0:
            v = f[0];
            g = "720p";
            break;
        case 1:
            v = f[1];
            g = "480p";
            break;
        case 2:
            v = f[2];
            g = "360p";
            break;
        case 3:
            v = f[3];
            g = "240p";
            break
        };
        i = [v + "|COMPONENT=HLS", g];
        Main.url_arr.push(i);
        if (Main.ver > 2.53 && g.indexOf(API.Vquality) > -1) {
            ca = true;
            u = v + "|COMPONENT=HLS";
            Selectbox.url_selected = Main.url_arr.length - 1
        };
        if (ca == false) {
            if (g.indexOf(API.Vquality) < 0) {
                u = v + "|COMPONENT=HLS";
                ca = true
            }
        }
    };
    if (Main.url_arr.length > 0 && u == "") {
        u = Main.url_arr[0][0]
    };
    return u
}

function EUROGetEPG(x) {
    Main.showinfoList("Loading EPG...");
    var i = "";
    var j = "";
    UKAbort();
    Main.Ya_ready_timeout = setTimeout(function() { ukErr(); }, 3000);
    Main.YaHTTP = new XMLHttpRequest();
    Main.YaHTTP.onreadystatechange = function () {
        if (Main.YaHTTP.readyState == 4 && Main.YaHTTP.status == 200) {
            clearTimeout(Main.Ya_ready_timeout);
            i = Main.YaHTTP.responseText;
            if (!Main.guide) {
                Main.showinfoList("Loaded!");
                var Q = i.split("\x0A");
                alert("J = " + Q[1]);
                var bV = "<li><font style=\"color:#00ccff;\">";
                var bG = "<li><font style=\"color:#ffcc00;\">";
                var bW = "<li><font style=\"color:#ffeeee;\">";
                var bF = "</font><font style=\"color:#CCCCCC;\">";
                var bC = "</font></li>";
                var bA;
                var bJ = "<ul>";
                var q = new Date();
                var bx = addZero(q.getHours());
                var bD = addZero(q.getMinutes());
                for (bA = 0; bA < Q.length; bA++) {
                    var bH = Q[bA].split("|");
                    var bU = bH[0].split(" ");
                    var bz = bU[0];
                    var bB = bU[1];
                    bJ += bV + bB + bF + "  " + bH[1] + bC
                };
                bJ += "</ul>";
                Main.showinfoList(bJ)
            }
        }
    };
    Main.YaHTTP.open("GET", x + j, true);
    Main.YaHTTP.setRequestHeader("User-Agent", "Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51");
    Main.YaHTTP.send(null)
}

UKGetUrl = function (i, z) {
    var j = "";
    var bb = z;
    if (bb.indexOf("it-") >= 0) {
        alert("__________This is run");
        b = "http://nebo.ddns.net:8881/epg_ita_temp.php?ch=" + z;
        Main.ch_index = i;
        alert("_________________b: " + b);
        Main.uk_prog_info_arr = [];
        Main.temp_uk_epg_info_arr = [];
        ITAParsing(b, i)
    } else {
        b = "http://bleb.org/tv/channel.html?ch=" + z + "&all";
        Main.ch_index = i;
        alert("_____2____________b: " + b);
        Main.uk_prog_info_arr = [];
        Main.temp_uk_epg_info_arr = [];
        UKParsing(b, i)
    }
};

function UKParsing(o, l) {
    Main.showinfoList("Loading UK EPG...");
    var i = "";
    var j = "";
    if (T.delta < -6) {
        T.delta = 0
    };
    var q = parseInt(T.y_t_days + T.delta);
    if (!Main.guide) {
        o = o + q
    };
    UKAbort();
    Main.Ya_ready_timeout = setTimeout(function() { ukErr(); }, 3000);
    Main.YaHTTP = new XMLHttpRequest();
    Main.YaHTTP.onreadystatechange = function () {
        if (Main.YaHTTP.readyState == 4 && Main.YaHTTP.status == 200) {
            clearTimeout(Main.Ya_ready_timeout);
            i = Main.YaHTTP.responseText;
            if (!Main.guide) {
                Main.showinfoList("Loaded!");
                var S = i.split("<table class=\"listings\">");
                var V = S[1].split("<tr>");
                for (var I = 1; I < V.length; I++) {
                    i = V[I];
                    var br = parser(i, "<b>", "</b>");
                    var O = parser(i, "<b>", "</b>&nbsp;");
                    O = O.substring(5);
                    var W = dSp(br + "|" + O);
                    Main.temp_uk_epg_info_arr.push(W)
                };
                var bV = "<li><font style=\"color:#00ccff;\">";
                var bG = "<li><font style=\"color:#ffcc00;\">";
                var bW = "<li><font style=\"color:#ffeeee;\">";
                var bF = "</font><font style=\"color:#CCCCCC;\">";
                var bC = "</font></li>";
                var bw = Main.temp_uk_epg_info_arr;
                var bA;
                var bJ = "<ul>";
                var q = new Date();
                var bx = addZero(q.getHours());
                var bD = addZero(q.getMinutes());
                for (bA = 0; bA < bw.length; bA++) {
                    var bH = bw[bA].split("|");
                    var bz = bH[0];
                    var bB = bH[1];
                    var bI = bH[0].split(":");
                    var by = bI[0];
                    var bE = bI[1];
                    if (by <= bx) {
                        if (by == bx && bE <= bD) {
                            bJ = bG + bz + bF + "  " + bB + bC
                        } else {
                            bJ += bW + bz + bF + "  " + bB + bC
                        }
                    } else {
                        bJ += bV + bz + bF + "  " + bB + bC
                    }
                };
                bJ += "</ul>";
                Main.showinfoList(bJ)
            }
        }
    };
    Main.YaHTTP.open("GET", o + j, true);
    Main.YaHTTP.setRequestHeader("User-Agent", "Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51");
    Main.YaHTTP.send(null)
}

function ITAParsing(o, l) {
    Main.showinfoList("Loading ITA EPG...");
    var i = "";
    var j = "";
    if (T.delta < -6) {
        T.delta = 0
    };
    var q = parseInt(T.y_t_days + T.delta);
    if (!Main.guide) {
        o = o + q
    };
    UKAbort();
    Main.Ya_ready_timeout = setTimeout(function() { ukErr(); }, 3000);
    Main.YaHTTP = new XMLHttpRequest();
    Main.YaHTTP.onreadystatechange = function () {
        if (Main.YaHTTP.readyState == 4 && Main.YaHTTP.status == 200) {
            clearTimeout(Main.Ya_ready_timeout);
            i = Main.YaHTTP.responseText;
            if (!Main.guide) {
                Main.showinfoList("Loaded!");
                var V = i.split("<div class=\"gen dataz\">");
                for (var I = 0; I < V.length; I++) {
                    i = V[I];
                    alert("Array MA" + i);
                    var O = parser(i, "<b>", "</b>");
                    i = V[I + 1];
                    var br = parser(i, "\">", "</a>");
                    var W = dSp(O + "|" + br);
                    Main.temp_uk_epg_info_arr.push(W)
                };
                var bV = "<li><font style=\"color:#00ccff;\">";
                var bG = "<li><font style=\"color:#ffcc00;\">";
                var bW = "<li><font style=\"color:#ffeeee;\">";
                var bF = "</font><font style=\"color:#CCCCCC;\">";
                var bC = "</font></li>";
                var bw = Main.temp_uk_epg_info_arr;
                var bA;
                var bJ = "<ul>";
                var q = new Date();
                var bx = addZero(q.getHours());
                var bD = addZero(q.getMinutes());
                for (bA = 0; bA < bw.length; bA++) {
                    var bH = bw[bA].split("|");
                    var bz = bH[0];
                    var bB = bH[1];
                    var bI = bH[1].split(":");
                    var by = bI[0];
                    var bE = bI[1];
                    if (by <= bx) {
                        if (by == bx && bE <= bD) {
                            bJ = bG + bz + bF + "  " + bB + bC
                        } else {
                            bJ += bW + bz + bF + "  " + bB + bC
                        }
                    } else {
                        bJ += bV + bz + bF + "  " + bB + bC
                    }
                };
                bJ += "</ul>";
                Main.showinfoList(bJ)
            }
        }
    };
    Main.YaHTTP.open("GET", o + j, true);
    Main.YaHTTP.setRequestHeader("User-Agent", "Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51");
    Main.YaHTTP.send(null)
}

YandexGetUrl = function (i) {
    var bt = new Date();
    var j = "";
    if (Main.Ya_flag_step > 0 && Main.Ya_flag_step < 5) {
        var l = ["", "5", "4", "3", "7"];
        j = "&flag=" + l[Main.Ya_flag_step]
    } else {
        Main.Ya_flag_step = 0
    };
    if (i.indexOf("/m.tv.yandex.") > 0 && i.indexOf("/program/") > 0) {
        var o = i
    } else {
        if (i.indexOf("/m.tv.yandex.") > 0 && i.indexOf("channel=") > 0) {
            i = i.substr(i.indexOf("http:"));
            i = i.substr(22);
            var p = i.substr(0, i.indexOf("/"));
            i = i.substr(i.indexOf("channel="));
            var q = (i.indexOf("&") < 0) ? i.length : i.indexOf("&");
            i = i.substring(8, q)
        } else {
            p = (Main.region != "") ? Main.region : API.CODE
        };
        if (T.delta == 0) {
            o = "https://m.tv.yandex." + API.REG + "/" + p + "/channels/" + i + "?period=all-day";
            Main.lost_date = ": <font style='font-size:16px;color:cyan;'>" + bt.toDateString() + "</font> : <font style='font-size:16px;color:white;'>scroll page</font><font style='font-size:16px;color:cyan;'> P-/P+ </font> :"
        } else {
            if (T.delta > 0) {
                var bu = formatDate(bt.setDate(bt.getDate() + T.delta));
                o = "https://m.tv.yandex." + API.REG + "/" + p + "/channels/" + i + "?" + "date=" + bu + "&period=all-day";
                Main.lost_date = ": <font style='font-size:16px;color:cyan;'>" + bu + "</font> : <font style='font-size:16px;color:white;'>scroll page</font><font style='font-size:16px;color:cyan;'> P-/P+ </font> :"
            };
            if (T.delta < 0) {
                var bv = formatDate(bt.setDate(bt.getDate() + T.delta));
                o = "https://m.tv.yandex." + API.REG + "/" + p + "/channels/" + i + "?" + "date=" + bv + "&period=all-day";
                Main.lost_date = ": <font style='font-size:16px;color:cyan;'>" + bv + "</font> : <font style='font-size:16px;color:white;'>scroll page</font><font style='font-size:16px;color:cyan;'> P-/P+ </font> :"
            }
        };
        Main.ch_index = i;
        alert("_________________b: " + o);
        Main.ya_prog_info_arr = []
    };
    Main.temp_ya_epg_info_arr = [];
    YandexParsing(o, p, i, j)
};

function formatDate(bt) {
    var q = new Date(bt),
        bY = "" + (q.getMonth() + 1),
        bX = "" + q.getDate(),
        bZ = q.getFullYear();
    if (bY.length < 2) {
        bY = "0" + bY
    };
    if (bX.length < 2) {
        bX = "0" + bX
    };
    return [bZ, bY, bX].join("-")
}

function YaAbort() {
    clearTimeout(Main.Ya_ready_timeout);
    if (Main.YaHTTP != null) {
        Main.YaHTTP.abort();
        Main.YaHTTP = null
    }
}

function Err() {
    YaAbort();
    Main.yandextv_mode = false;
    Main.showinfoList("Nothing Found!")
}

function UKAbort() {
    clearTimeout(Main.Ya_ready_timeout);
    if (Main.YaHTTP != null) {
        Main.YaHTTP.abort();
        Main.YaHTTP = null
    }
}

function ukErr() {
    UKAbort();
    Main.yandextv_mode = false;
    Main.showinfoList("Nothing Found!")
}

function addZero(u) {
    if (u < 10) {
        u = "0" + u
    };
    return u
}

function YandexParsing(o, p, l, j) {
    Main.showinfoList("Loading EPG...");
    var i = "";
    if (T.delta < -6) {
        T.delta = 0
    };
    var q = parseInt(T.y_t_days + T.delta);
    if (!Main.guide) {
        o = o + q
    };
    YaAbort();
    Main.Ya_ready_timeout = setTimeout(function() { Err(); }, 3000);
    Main.YaHTTP = new XMLHttpRequest();
    Main.YaHTTP.onreadystatechange = function () {
        if (Main.YaHTTP.readyState == 4 && Main.YaHTTP.status == 200) {
            clearTimeout(Main.Ya_ready_timeout);
            i = Main.YaHTTP.responseText;
            if (!Main.guide) {
                Main.showinfoList("Loaded!");
                var S = i.split("<span class=\"tv-event__time\">");
                for (var I = 1; I < S.length; I++) {
                    i = S[I];
                    var br = parser(i, "<span class=\"tv-event__time-text\">", "</span>");
                    if (br == "") {
                        Err();
                        return
                    };
                    var O = parser(i, "<span class=\"tv-event-title\">", "</span>");
                    if (O == "") {
                        Err();
                        return
                    };
                    var W = dSp(br + "|" + O);
                    Main.temp_ya_epg_info_arr.push(W)
                };
                var bV = "<li><font style=\"color:#00ccff;\">";
                var bG = "<li><font style=\"color:#ffcc00;\">";
                var bW = "<li><font style=\"color:#ffeeee;\">";
                var bF = "</font><font style=\"color:#CCCCCC;\">";
                var bC = "</font></li>";
                var bw = Main.temp_ya_epg_info_arr;
                var bA;
                var bJ = "<ul>";
                var q = new Date();
                var bx = addZero(q.getHours());
                var bD = addZero(q.getMinutes());
                for (bA = 0; bA < bw.length; bA++) {
                    var bH = bw[bA].split("|");
                    var bz = bH[0];
                    var bB = bH[1];
                    var bI = bH[0].split(":");
                    var by = bI[0];
                    var bE = bI[1];
                    if (by <= bx) {
                        if (by == bx && bE <= bD) {
                            bJ = bG + bz + bF + "  " + bB + bC
                        } else {
                            bJ += bW + bz + bF + "  " + bB + bC
                        }
                    } else {
                        bJ += bV + bz + bF + "  " + bB + bC
                    }
                };
                bJ += "</ul>";
                Main.showinfoList(bJ);
                if (Main.temp_ya_epg_info_arr.length > 0) {
                    if (Player.state == Player.STOPPED || (Player.state == Player.PLAYING_LIVE && Main.play_chan_array_index == Main.chan_array_index)) {
                        Main.ya_prog_id = Main.chan_array_index;
                        Main.ya_epg_info_arr = Main.temp_ya_epg_info_arr;
                        GetEpgInfo()
                    }
                }
            }
        }
    };
    Main.YaHTTP.open("GET", o + j, true);
    Main.YaHTTP.setRequestHeader("User-Agent", "Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51");
    Main.YaHTTP.send(null)
}

var Ya_name_index_obj = {};
var Ya_icon_index_url_obj = {};
var Ya_icon_name_url_obj = {};

function GetYandexBase() {
    var o = [];
    Main.readFile(o, API.CODE + "_ya_name_index_url.dat");
    if (o.length > 0) {
        Display.status("Deleting Yandex database");
        o = [];
        Main.writeFile(o, API.CODE + "_ya_name_index_url.dat");
        setTimeout(function() { location.reload(true); }, 3000)
    } else {
        var j = "";
        API.AsReqMode = false;
        j = API.Request("https://tv.yandex." + API.REG + "/" + API.CODE + "/channels");
        API.AsReqMode = true;
        var R = "connection";
        if (j != "") {
            R = "structure";
            var E = "<font style=\"color:#00ccff;font-weight:bolder\">";
            var p = j.indexOf("<img class=\"b-icon\" src=\"");
            j = j.substr(p);
            p = j.indexOf("<td class=\"l-suplayout__rotator\">");
            j = j.substr(0, p);
            var q = j.match(/(http:?[^>]+orig)|(alt="?[^>]+")|(data-id="?[^>]+")/g);
            o = [];
            if (q != null) {
                Main.ya_auto = false;
                var D = q.length - 3;
                var l = 0;
                for (var s = 0; s < D; s = s + 3) {
                    var G = "";
                    var i = "";
                    var u = "";
                    if (q[s].indexOf("https:") >= 0 && q[s + 1].indexOf("alt=") >= 0 && q[s + 2].indexOf("data-id=") >= 0) {
                        G = q[s];
                        u = q[s + 1].replace("alt=", "").replace(/"/g, "");
                        i = q[s + 2].replace("data-id=", "").replace(/"/g, "")
                    } else {
                        if (q[s].indexOf("alt=") >= 0 && q[s + 1].indexOf("data-id=") >= 0) {
                            G = "logos/image.png";
                            u = q[s].replace("alt=", "").replace(/"/g, "");
                            i = q[s + 1].replace("data-id=", "").replace(/"/g, "");
                            s = s - 1;
                            D = D - 1
                        }
                    };
                    if (i != "") {
                        l++;
                        o.push(u + "|" + i + "|" + G);
                        Ya_name_index_obj[u.toLowerCase()] = i;
                        Ya_icon_index_url_obj[i] = G;
                        Ya_icon_name_url_obj[u.toLowerCase()] = G
                    }
                };
                if (o.length > 0) {
                    Main.writeFile(o, API.CODE + "_ya_name_index_url.dat");
                    Main.ya_auto = true
                };
                GetYaBaseInfo()
            }
        };
        if (!Main.ya_auto) {
            Display.status("Error " + R)
        }
    }
}

GetUkEpgInfo = function () {
    alert("___Get-UK-EPGInfo is running");
    if (Main.uk_epg_info_arr.length > 0) {
        var bG = "<li><font style=\"color:#ffcc00;font-size:20px;font-weight:bold;\">";
        var bF = "</font><font style=\"color:#CCCCCC;font-size:20px;font-weight:bold;\">";
        var bC = "</font></li>";
        var bw = Main.uk_epg_info_arr;
        var bA;
        var bJ = "";
        var q = new Date();
        var bx = addZero(q.getHours());
        var bD = addZero(q.getMinutes());
        alert("TIME _ HOURS_ MIN " + bx + ":" + bD);
        for (bA = 0; bA < bw.length; bA++) {
            var bH = bw[bA].split("|");
            var bz = bH[0];
            var bB = bH[1];
            var bI = bH[0].split(":");
            var by = bI[0];
            var bE = bI[1];
            if (by <= bx) {
                if (by == bx && bE <= bD) {
                    bJ += bG + bz + bF + "  " + bB + bC
                }
            }
        };
        widgetAPI.putInnerHTML(getId("epg_info"), bJ)
    }
};

GetEpgInfo = function () {
    if (Main.ya_epg_info_arr.length > 0) {
        var bG = "<li><font style=\"color:#ffcc00;font-size:20px;font-weight:bold;\">";
        var bF = "</font><font style=\"color:#CCCCCC;font-size:20px;font-weight:bold;\">";
        var bC = "</font></li>";
        var bw = Main.ya_epg_info_arr;
        var bA;
        var bJ = "";
        var q = new Date();
        var bx = addZero(q.getHours());
        var bD = addZero(q.getMinutes());
        alert("TIME _ HOURS_ MIN " + bx + ":" + bD);
        for (bA = 0; bA < bw.length; bA++) {
            var bH = bw[bA].split("|");
            var bz = bH[0];
            var bB = bH[1];
            var bI = bH[0].split(":");
            var by = bI[0];
            var bE = bI[1];
            if (by <= bx) {
                if (by == bx && bE <= bD) {
                    bJ += bG + bz + bF + "  " + bB + bC
                }
            }
        };
        widgetAPI.putInnerHTML(getId("epg_info"), bJ);
        Display.showplayer()
    }
};

GetNextEpgInfo = function () {
    if (Main.ya_epg_info_arr.length > 0) {
        if (Main.epg_info_step == 1 && Main.temp_epg_info == "") {
            Main.temp_epg_info = getId("epg_info").innerHTML
        };
        if (Main.epg_info_step > 0 && Main.epg_info_step <= Main.ya_epg_info_arr.length) {
            var i = Main.ya_epg_info_arr[Main.epg_info_step - 1].split("|");
            var q = i[0];
            var p = i[1];
            if (dPr(q) != "" && dPr(p) != "") {
                var o = q + "<font style='color:#00ccff;font-weight:bolder;padding-left:10px;'>" + p + "</font>"
            }
        } else {
            if (Main.temp_epg_info != "") {
                o = Main.temp_epg_info;
                Main.temp_epg_info = ""
            }
        };
        widgetAPI.putInnerHTML(getId("epg_info"), o);
        if (Main.epg_info_step > 0) {
            Display.showplayer()
        }
    }
};

function Super_Send(i) {
    if (i.indexOf("http://nebo.") >= 0 && API.search_string != "" && Main.search) {
        i = i.replace("search=", "q=")
    };
    if (i.indexOf("http://tvqb.ru/") >= 0 && API.search_string != "" && Main.search) {
        i = i.replace("search=", "user=")
    };
    return i
}

function GetHash(p, o, l) {
    var i = "";
    if (l != "") {
        var j = decLongUrl(API.Request(p + "action=get_test_url&s_key=" + l + "&url=" + o))
    } else {
        j = p
    };
    j = j.split("|");
    if (j[0] != "") {
        var q = API.Request(j[0]);
        q = parser(q, j[1], j[2]);
        alert("hash =" + q);
        if (l != "") {
            i = API.Request(p + "action=get_result_url_hash&s_key=" + l + "&hash=" + q + "&url=" + o)
        } else {
            i = o.replace("md5hash", q)
        }
    } else {
        i = o
    };
    return i
}

function parser(j, p, o) {
    var i = "";
    if (dPr(j) != "" && p != undefined) {
        var q = j.indexOf(p);
        if (q >= 0) {
            j = j.substr(q + p.length);
            if (o == undefined) {
                return j
            };
            q = j.indexOf(o);
            if (q >= 0) {
                i = j.substr(0, q)
            }
        }
    };
    return i
}

function decLongUrl(i) {
    if (dPr(i) != "" && i.indexOf("%") >= 0) {
        while (i.indexOf("%") >= 0) {
            i = decodeURIComponent(i)
        }
    };
    return i
}

function Super_parser(j) {
    var p = j;
    if (j.indexOf("vk.com") > 0 || j.indexOf("vk.com/video_ext.php?") > 0 || j.indexOf("/vkontakte.php?video") > 0 || j.indexOf("vkontakte.ru/video_ext.php") > 0 || j.indexOf("/vkontakte/vk_kinohranilishe.php?id=") > 0) {
        p = getVkUrl(j)
    } else {
        if (j.indexOf("youtube.com/watch?v=") > 0) {
            var u = j.substr(j.indexOf("=") + 1);
            p = lrdPr(getYoutubeUrl(u))
        } else {
            if (j.indexOf("youtube.com/embed") >= 0) {
                var q = j.substr(j.indexOf("embed/") + 6);
                p = getYoutubeUrl(q)
            }
        }
    };
    try {
        if (p == j || p.indexOf(".html") > 0 || p.indexOf("md5hash") > 0 || p.indexOf("md4hash") > 0) {
            p = Super_parser_external(j)
        }
    } catch (p) {};
    return p
}

function showImage() {
    var ci = document.getElementById("start_logo");
    ci.style.backgroundImage = "url(http://neb0.no-ip.biz:8881/pic/IPTVxBG.jpg)";
    ci.style.visibility = "visible"
}

function showImageSet() {
    var ci = document.getElementById("start_logo");
    ci.style.backgroundImage = "url(http://neb0.no-ip.biz:8881/pic/set-bg.jpg)";
    ci.style.visibility = "visible"
}

function hideImage() {
    var cb = document.getElementById("start_logo");
    cb.style.visibility = "hidden"
}

function showScroll() {
    var ce = document.getElementById("scroll");
    var cd = document.getElementById("scroll_cursor");
    var cc = document.getElementById("scroll_line");
    ce.style.visibility = "visible";
    cc.style.visibility = "visible";
    cd.style.visibility = "visible";
    document.getElementById("scroll_cursor").style.top = "80px"
}

function hideScroll() {
    var ce = document.getElementById("scroll");
    var cd = document.getElementById("scroll_cursor");
    var cc = document.getElementById("scroll_line");
    cd.style.visibility = "hidden";
    ce.style.visibility = "hidden";
    cc.style.visibility = "hidden"
}

var xmlHttp = null;

function showWeather() {
    var C = "http://nebo.ddns.net:8881/weather_new.php?city=" + API.Cityname;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = ProcessRequest;
    xmlHttp.open("GET", C, true);
    xmlHttp.send(null);
    var cg = document.getElementById("widget_time");
    cg.style.visibility = "visible"
}

function hideWeather() {
    var ch = document.getElementById("weather_icons");
    ch.style.visibility = "hidden";
    var cf = document.getElementById("temp");
    cf.style.visibility = "hidden";
    var cg = document.getElementById("widget_time");
    cg.style.visibility = "hidden"
}

function showTemp() {
    var z = 8800;
    a = Main.protocol;
    var ck = a + Main.hurl + ":" + eval(Main.trp + z) + "/weather_temp_new.php?city=" + API.Cityname;
    xmlHttp1 = new XMLHttpRequest();
    xmlHttp1.onreadystatechange = ProcessRequest1;
    xmlHttp1.open("GET", ck, true);
    xmlHttp1.send(null)
}

function hideTemp() {
    var cf = document.getElementById("temp");
    cf.style.visibility = "hidden"
}

function scrollUp() {
    var bj = document.getElementById("scroll_cursor").style.top;
    var q = parseInt(bj);
    if (q < 460) {
        t = Math.abs(q + 20);
        alert("new top=" + Main.scrolling);
        document.getElementById("scroll_cursor").style.top = t + "px"
    } else {
        document.getElementById("scroll_cursor").style.top = "460px"
    }
}

function scrollDown() {
    var bj = document.getElementById("scroll_cursor").style.top;
    var q = parseInt(bj);
    if (q > 80) {
        t = Math.abs(q - 20);
        alert("new top=" + Main.scrolling);
        document.getElementById("scroll_cursor").style.top = t + "px"
    } else {
        document.getElementById("scroll_cursor").style.top = "80px"
    }
}

/**
 * Processing weather response
 * @return {string} response text
 */
function ProcessRequest() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        if (xmlHttp.responseText == "ACCESS DENIED") {
            Display.status("<b style=\"color:yellow\">" + xmlHttp.responseText + "</b>", 3000)
        } else {
            var ci = document.getElementById("weather_icons");
            var i = xmlHttp.responseText;
            ci.style.backgroundImage = "url(" + i + ")";
            ci.style.visibility = "visible";
            return xmlHttp.responseText
        }
    }
}

/**
 * Processing temperature response
 * @return {string} response text
 */
function ProcessRequest1() {
    if (xmlHttp1.readyState == 4 && xmlHttp1.status == 200) {
        if (xmlHttp1.responseText == "ACCESS DENIED") {
            Display.status("<b style=\"color:yellow\">" + xmlHttp1.responseText + "</b>", 3000)
        } else {
            var cj = document.getElementById("temp");
            var o = xmlHttp1.responseText;
            cj.innerHTML = "<p><b style=\"color:#FFFFFF;font-size:14px;\">" + API.Cityname + "</b> " + o + "</p>";
            cj.style.visibility = "visible";
            return xmlHttp1.responseText
        }
    }
}

function popAlert() {
    alert("Hello! I am an alert box!")
}

var confirm;

confirm.openWindow = function () {
    this.setWindowPosition();
    this.setContents("confirm_text", "<img src=\"http://nebo.ddns.net:8881/pic/bg.jpg\" ></img><br><b style=\"color:EF5C0C;font-size:14px\">Welcome to IPTV<i>x </i>World!!!</b><br><i style=\"font-size:12px\">Courtesy of Multiviewer.TV</i><br><b style=\"color:EF5C0C;\">www.multiviewer.tv</b>");
    this.turnPopup("on");
    this.setFocus("btn_ok")
};

confirm.popWindow = function () {
    this.setWindowPosition1();
    this.setContents("confirm_text", "<img src=\"http://nebo.ddns.net:8881/pic/bg-update.jpg\" ></img>");
    this.turnPopup("on");
    this.setFocus("btn_ok")
};

confirm.setWindowPosition = function () {
    var bN = 445;
    var bK = 360;
    var bL = Math.floor((960 - bN) / 2);
    var bM = Math.floor((540 - bK) / 2);
    if (Main.seriesE) {
        document.getElementById("confirm").style.left = 260;
        document.getElementById("confirm").style.top = 100
    } else {
        document.getElementById("b_ok").style.backgroundColor = "#5fbaff";
        document.getElementById("confirm").style.top = bM
    }
};

confirm.setWindowPosition1 = function () {
    var bN = 445;
    var bK = 360;
    var bL = Math.floor((960 - bN) / 2);
    var bM = Math.floor((540 - bK) / 2);
    if (Main.seriesE) {
        document.getElementById("confirm").style.left = 260;
        document.getElementById("confirm").style.top = 100
    } else {
        document.getElementById("b_ok").style.backgroundColor = "#5fbaff";
        document.getElementById("confirm").style.top = bM
    }
};

confirm.turnPopup = function (bO) {
    if (bO == "on") {
        document.getElementById("confirm").style.visibility = "visible"
    } else {
        if (bO == "off") {
            document.getElementById("confirm").style.visibility = "hidden"
        }
    }
};

confirm.setFocus = function () {
    var bP = document.getElementById("btn_ok");
    if (bP) {
        bP.focus()
    }
};

confirm.setByttonStyleOnFocus = function (bP) {
    if (bP.getAttribute("id") == "btn_ok") {
        document.getElementById("b_ok").style.backgroundColor = "#0866aa"
    } else {
        document.getElementById("b_canc").style.backgroundColor = "#0866aa"
    }
};

confirm.setByttonStyleOnBlur = function (bP) {
    if (bP.getAttribute("id") == "btn_ok") {
        document.getElementById("b_ok").style.backgroundColor = "#5fbaff"
    } else {
        document.getElementById("b_canc").style.backgroundColor = "#5fbaff"
    }
};

confirm.KeyDown = function (bQ) {
    var bR = event.keyCode;
    var widgetAPI = new Common.API.Widget();
    alert("Options Key code : " + bR);
    switch (bR) {
    case (88):
        widgetAPI.blockNavigation(event);
        setTimeout(function(){ Main.Menu(); }, 200);
    case (45):
        this.closeWindow();
        break;
    case (29443):
        if (bQ.getAttribute("id") == "btn_canc") {
            this.turnPopup("off")
        };
        if (bQ.getAttribute("id") == "btn_ok") {
            this.closeWindow()
        };
        break;
    case (5):
        this.selectButton(bQ);
        break;
    case (4):
        this.selectButton(bQ);
        break
    }
};

confirm.closeWindow = function () {
    this.turnPopup("off");
    setTimeout(Main.Menu(), 200)
};

confirm.selectButton = function (bP) {
    if (bP.getAttribute("id") == "btn_ok") {
        this.setFocus("btn_canc")
    } else {
        this.setFocus("btn_ok")
    }
};

confirm.setContents = function (bT, bS) {
    var bP = document.getElementById(bT);
    widgetAPI.putInnerHTML(bP, bS)
}