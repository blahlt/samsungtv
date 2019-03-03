var widgetAPI = new Common.API.Widget();
var pluginAPI = new Common.API.Plugin();
var tvKey = new Common.API.TVKeyValue();

var Egp = {
	scrollTop: 80,
	scrollHeight: 380,
	length: 0,
	topId: 0
};

var EgpCache = [];

var Main = {
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
    //PlayerMode: "",
    yandextv_mode: false,
    ya_all_day: false,
    //Ya_flag_step: 0,
    ya_prog_id: -1,
    temp_epg_info: "",
    epg_info_step: 0,
    epg_t1: 0,
    epg_t2: 0,
    ch_index: "",
    ya_prog_info_arr: [],
    ya_epg_info_arr: [],
    guide: false,
    block_info: false,
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
    number_p: 1,
    step_read_dir: 1,
    FAV: false,
    DEL: false,
    RED: false,
    ret: false,
    search: false,
    start: false,
    Emu: false,
    seriesE: false,
    FirstStart: true,
    Update_Page: false,
    SetZoom: false,
    Network: null,
    St: null,
    Audio: null,
    St_size: null,
    IntervalUpdateTime: null,
    openWindow: null,
    txt: "mac=",
    version: "0.426",
    ver: "2.96"
};

Main.onLoad = function () {
    try {
        this.Network = getId("pluginNetwork");
        this.MAC = this.Network.GetMAC();
        this.St = getId("pluginStorage");
        this.Audio = getId("pluginAudio");
        this.audio_output_device = this.Audio.GetOutputDevice();

        var pluginTv = getId("pluginTV");
        this.hardware_type = pluginTv.GetProductType();
        this.hardware = pluginTv.GetProductCode(1);

        if (this.hardware == "LN40B650_KOR") {
            Main.Emu = true;
        }

		if (API.init() && Player.init()) {
			window.onShow = Main.onShowEventTVKey;
			widgetAPI.sendReadyEvent();
			Display.status("Loading...", 2000);
			Display.loadingshow();
			setTimeout(function(){ Main.InitScript(); }, 2500);
		}
    } catch (b) {
		Display.status('Error onLoad:' + b.message, 2000);
	}
};

Main.InitScript = function () {
	Main.url_arr = [];
	API.XML_URL = API.star_url;
	API.Request(API.star_url);
    showWeather();
    showTemp();
    setTimeout(function(){ showScroll(); }, 800);
};

SetVolume = function (o) {
    if (Main.audio_output_device == 3 || Main.hardware_type == 2) {
        Display.status("Not available !");
    } else {
        Main.Audio.SetVolumeWithKey(o);
        var l = Main.Audio.GetVolume();
        var j = "";
        var q = Math.round(0.44 + l * (1 - l / 360), 10);
        var p = l > 9 ? l : ("0" + l);
        for (var i = 0; i < q; i++) {
            j += "|";
        };
        Display.status("<b style='color:#00ccff;'>VOLUME</b> " + p + " <b style='color:yellow;'>" + j + "</b>");
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
    pluginAPI.registKey(1249);
};

curWidget.onWidgetEvent = function () {
    Main.onShowEventTVKey();
};

Main.registVOLTVKey = function () {
    pluginAPI.registKey(tvKey.KEY_VOL_UP);
    pluginAPI.registKey(tvKey.KEY_VOL_DOWN);
    pluginAPI.registKey(tvKey.KEY_PANEL_VOL_UP);
    pluginAPI.registKey(tvKey.KEY_PANEL_VOL_DOWN);
    pluginAPI.registKey(tvKey.KEY_MUTE);
};

Main.ResetSelectedPosition = function () {
    this.selected_channel = 0;
    this.selected_page = 0;
    this.chan_array_index = 0;
    if (!this.guide && !Main.help_info) {
        this.prev_ch_array = [];
    }
};

Main.SaveSelectedPosition = function () {
    this.play_selected_channel = this.selected_channel;
    this.play_selected_page = this.selected_page;
    this.play_chan_array_index = this.chan_array_index;
};

Main.SetSelectedPosition = function () {
    this.selected_channel = this.play_selected_channel;
    this.selected_page = this.play_selected_page;
    this.chan_array_index = this.play_chan_array_index;
};

Main.SetFavSelectedPosition = function () {
    Main.fav_num = Main.temp_fav_num;
    Main.fav_name = Main.temp_fav_name;
    Main.fav_url = Main.temp_fav_url;
};

Main.Menu = function () {
    if (Main.FirstStart) {
        if ((API.Timemode == 0 || API.Timemode == 1)) {
            setTimeout(function(){ }, 500);
        }
    };
	setTimeout(function(){ Main.FirstStart=false; }, 3000);
    clearTimeout(this.load_timer);
    if (!Main.search) {
        Display.hidestatus();
    }
    getIdAndHide("statusbar1");
    Display.hideplayer();
    Display.loadinghide();
    API.AsReqMode = true;
    this.FAV = false;
    this.help_info = false;
    this.block_info = false;
    this.loading_pl = false;
    this.block_fav = false;
    this.SetZoom = false;
    this.playlist_prev = true;
    this.pre_pl_url = API.XML_URL;
    getIdAndHide("help_set_par");
    getIdAndShow("rightHalf");
    getIdAndHide("infoList");
    getIdAndHide("ya_date");
    getIdAndHide("ya_info");
    getIdAndHide("ya_help");
    Main.UpdateHelpBar();
    KeyHandler.setFocus(0);
    Main.updatePage();
    getIdAndShow("channelList");
    getIdAndShow("main");
};

Main.UpdateHelpBar = function () {
    getIdAndHide("0_help");
    getIdAndHide("1_help");
    getIdAndShow("2_help");
    getIdAndHide("3_help");
    getIdAndHide("3.1_help");
    getIdAndHide("3.1_help");
    getIdAndHide("3.2_help");
    getIdAndHide("3.21_help");
    getIdAndHide("3.3_help");
    getIdAndHide("3.4_help");
    getIdAndShow("4_help");
    getIdAndHide("4.1_help");
    getIdAndShow("5_help");
    getIdAndHide("5.1_help");
    getIdAndShow("6_help");
    getIdAndHide("7_help");
    getIdAndHide("8_help");
    getIdAndHide("9_help");
    getIdAndHide("10_help");
    getIdAndHide("10.1_help");
    getIdAndHide("11_help");
    getIdAndHide("12_help");
	var i = "<b style=\"color:00cbfe;\">IPTV<i>x </i></b><b style=\"font-size:16px;color:cyan;\"> v." + this.ver + "<b style=\"font-size:12px;\">  @</b><b style=\"font-size:16px;\">2016</b>";
    if (Player.state != Player.STOPPED) {
        getIdAndShow("1_help"); // show "Stop"
        getId("background").style.backgroundImage = "url(img/bg.png)";
    } else {
        KeyHandler.guide_step = 0;
        getIdAndShow("0_help"); // show "Exit"
        getId("background").style.backgroundImage = "url(img/us_bg.png)";
        if (this.prev_pl_array.length > 0) {
            if (API.categories.length < 3 && !Main.FAV && !Main.guide && API.XML_URL.indexOf("history.dat") < 0) {
                getIdAndShow("9_help");
            }
            if (API.XML_URL.indexOf("start.xml") == 0) {
                Display.status(API.XML_URL);
            }
        } else {
            if (API.XML_URL.indexOf("start.xml") != 0) {
                getIdAndHide("6_help");
                if (!this.RED) {
                    getIdAndShow("7_help");
                }
                if (API.categories.length < 3 && !Main.FAV && !Main.guide) {
                    getIdAndShow("9_help");
                }
            } else {
                getIdAndHide("6_help");
                getIdAndShow("9_help");
            }
        }
    }
    if (Main.seriesE) {
        getId("widget_date").style.left = "540px";
        getId("widget_time").style.left = "850px";
    }
    getIdAndShow("background");
    if (API.XML_URL.indexOf("OpenFav") == 0 || Main.help_info) {
        Main.block_fav = true;
    }
    widgetAPI.putInnerHTML(getId("version"), i);
    showWeather();
    showTemp();
};

LogoStyle = function (j, q, i) {
    var p, o;
    if (i == 1 && (API.Forma == 1 || API.Forma == 3)) {
        p = "67px";
        o = "54px";
    } else {
        if (i == 1) {
            p = "75px";
            o = "38px";
        } else {
            if (API.Forma == 1 || API.Forma == 3) {
                p = "80px";
                o = "66px";
                if (q != "") {
                    getId("p_bg_num_logo").style.backgroundImage = "url(img/bgn02.png)";
                } else {
                    getId("p_bg_num_logo").style.backgroundImage = "url(img/bgn03.png)";
                }
            } else {
                p = "90px";
                o = "46px";
                if (q != "") {
                    getId("p_bg_num_logo").style.backgroundImage = "url(img/bgn01.png)";
                } else {
                    getId("p_bg_num_logo").style.backgroundImage = "url(img/bgn03.png)";
                }
            }
        }
    }
    getId(j).src = q;
    getId(j).style.left = p;
    getId(j).style.width = o;
};

Main.updatePage = function () {
    try {
        clearTimeout(this.load_timer);
        this.Update_Page = false;
        this.ret = false;
        var p = 10;
        this.selected_page = (this.selected_page > API.chan_pages - 1) ? 0 : (this.selected_page < 0) ? API.chan_pages - 1 : this.selected_page;
        for (var q = 0; q < 10; q++) {
            getIdAndShow("ch" + q);
        }
        if (this.selected_page == API.chan_pages - 1) {
            p = API.last_page_channels_counter;
            for (var q = p; q < 10; q++) {
                getIdAndHide("ch" + q);
            }
            if (this.selected_channel > API.last_page_channels_counter - 1) {
                this.selected_channel = API.last_page_channels_counter - 1;
            }
        }
        Main.UpdateChannelBar();
        //alert("THIS IS RUNNING Update Channel");
        for (var q = 0; q < p; q++) {
            var o = 10 * this.selected_page + q;
            if (Main.guide) {
                widgetAPI.putInnerHTML(getId("number" + q), API.channels[o][10]);
            } else {
                widgetAPI.putInnerHTML(getId("number" + q), o + 1);
            }
            var i = (dPr(API.channels[o][2]) != "") ? getLogo1(dPr(API.channels[o][5]), dPr(API.channels[o][2])) : getLogo2(trimString(API.channels[o][0]), API.channels[o][3], dPr(API.channels[o][5]));
            LogoStyle("img" + q, i, 1);
            var u = (API.channels[o][0].toLowerCase().indexOf("Install the original version") >= 0) ? "Access denied!" : API.channels[o][0];
            widgetAPI.putInnerHTML(getId("title" + q), u);
        }
        if (this.number_p > 0) {
            this.ret = true;
            var s = "";
            if (API.channels.length > 10) {
                s = "<b style=\"font-size:16px;color:white\"> - [  This portal has <font color=#00ccff>" + API.channels.length + "</font> links  ]</b>";
            }
			
            if (API.XML_URL.indexOf(".xml") > 0 || API.XML_URL.indexOf(".m3u") > 0 || API.XML_URL.indexOf("=m3u") > 0) {
                widgetAPI.putInnerHTML(getId("version"), "<b style=\"color:00cbfe;\">IPTV<i>x </i></b><b style=\"font-size:16px;color:cyan;\"> v." + this.ver + "<b style=\"font-size:12px;\">  @</b><b style=\"font-size:16px;\">2016 </b></font>" + s);
            }
        }
        if (KeyHandler.Focus == 0) {
            Main.LoadTimer(function() { Main.updateChannel(); }, 100);
        } else {
            Main.updateChannel();
        }
    } catch (f) {}
};

getLogo1 = function (p, o) {
    var i = "logos/";
    if (o.indexOf(":") >= 0) {
        if (API.Forma == 0 || API.Forma == 1) {
            i = "";
        } else {
            o = (p != "") ? "logos/blue_folder.png" : "logos/image.png";
        }
    }
    o = i + o;
    return o;
};

getLogo2 = function (o, i, q) {
    return "logos/blue_folder.png";
};

Main.UpdateChannelBar = function () {
    getId("chan" + this.pre_selected_channel).style.backgroundImage = "";
    getId("number" + this.pre_selected_channel).style.backgroundImage = "";
    getId("title" + this.pre_selected_channel).style.color = "#CBCBCB";
    getId("number" + this.selected_channel).style.backgroundImage = "url(img/number_bar.png)";
    getId("chan" + this.selected_channel).style.backgroundImage = "url(img/chan_bar.png)";
    getId("title" + this.selected_channel).style.color = "#FFFFFF";
    this.pre_selected_channel = this.selected_channel;
};

Main.updateChannel = function () {
    clearTimeout(this.load_timer);
    if (KeyHandler.Focus == 0) {
        YaAbort();
        getIdAndHide("infoList");
        getIdAndHide("ya_date");
        getIdAndHide("ya_info");
        Main.UpdateChannelBar();
    }
    Main.Update_Page = true;
    if (KeyHandler.Focus == 0 && !this.block_info) {
        Main.LoadTimer(function() { Main.UpdateChannelInfo(); }, 200);
    } else {
        Main.UpdateChannelInfo();
    }
};

// update right side block
Main.UpdateChannelInfo = function () {
    Main.scrolling = 0;
    this.chan_array_index = 10 * this.selected_page + this.selected_channel;
    this.ch_num = this.chan_array_index + 1;
    this.name = GetChannelInfo(0);
    if (!Main.s_url) {
        this.url = GetChannelInfo(1);
        this.pl_url = GetChannelInfo(5);
    }
    this.logo = GetChannelInfo(2);
    if (Player.state == Player.STOPPED) {
        this.ssize = GetChannelInfo(6);
        this.a_num = GetChannelInfo(7);
    }
    this.buffer = GetChannelInfo(8);
    this.ibuffer = GetChannelInfo(9);
    this.timeshift = GetChannelInfo(10);
    this.region = GetChannelInfo(11);
    this.parser = decLongUrl(GetChannelInfo(12));
    this.search_on = GetChannelInfo(13);
    if (!Main.block_info && KeyHandler.Focus != 1) {
        if (this.url != "") {
            var y = this.url.toString();
            //alert("this.url= " + y);
        };
		this.yandextv_mode = false;
		var channelCode = GetChannelInfo(3).toString();
		//alert("GetChannelInfo(3)= " + channelCode);
		if (channelCode != '') {
			GetChannelEgp(channelCode);	
		} else {
			Main.showinfoList(GetChannelInfo(3));
		}
    }
    this.block_info = false;
};

Main.UpdatePlayerStatusbar = function () {
    widgetAPI.putInnerHTML(getId("ch_number"), this.ch_num);
    widgetAPI.putInnerHTML(getId("ch_name"), Main.name);
    var i = (Main.logo != "") ? getLogo1(Main.pl_url, Main.logo) : getLogo2(Main.name, GetChannelInfo(3), Main.pl_url);
    LogoStyle("ch_img", i, 0);
};

Main.LoadTimer = function (o, i) {
    clearTimeout(this.load_timer);
    this.load_timer = setTimeout(o, i);
};

Main.showinfoList = function (channelCode) {
    if (KeyHandler.Focus == 0) {
        getIdAndHide("infoList");
        getIdAndHide("ya_date");
        getIdAndHide("ya_info");
        widgetAPI.putInnerHTML(getId("infoList"), "");
        if (!this.yandextv_mode || Main.guide) {
            getIdAndHide("ya_help");
            var i = "";
            var p = "";
            if (API.playlist_name != "") {
                p = "<table width=\"100%\"><tr><td style=\"text-align:center;font-size:20px;color:#00ccff\">" + API.playlist_name + "</td></tr></table><table width=\"100%\"><tr height=\"2px\" bgcolor=\"#00cdfe\"><td></td></tr></table>";
            }
            if (API.prev_page_text != "" && (API.prev_page_url != "" || (this.url == "" && API.prev_page_text.indexOf("Back to start") == -1))) {
                i += "<td><img src='img/buttons/rew.png'></img></td><td>" + API.prev_page_text + "</td>";
            } else {
                if (API.prev_page_url != "") {
                    i += "<td><img src='img/buttons/rew.png'></img></td><td>Prev</td>";
                }
            }
            if (API.next_page_text != "" && (API.next_page_url != "" || (this.url == "" && API.next_page_text.indexOf("Back to start") == -1))) {
                i += "<td><img src='img/buttons/ff.png'></img></td><td>" + API.next_page_text + "</td>";
            } else {
                if (API.next_page_url != "") {
                    i += "<td><img src='img/buttons/ff.png'></img></td><td>Next</td>";
                }
            }
            if (API.next_page_url != "" || API.prev_page_url != "") {
                i += "<td><img src='img/buttons/blue.png'></img></td><td>Back to start</td>";
            }
            if (i != "") {
                i = "<table><tr>" + i + "</tr></table>";
            }
            if (channelCode == "" || channelCode == 0) {
                i += "no additional information available";
                channelCode = "";
            }
            i = "<div id=\"allInfo\">" + p + i + channelCode + "<div>";
            widgetAPI.putInnerHTML(getId("infoList"), i);
            if (API.playlist_name != "") {
                getId("allInfo").style.top = "5px";
            } else {
                getId("allInfo").style.top = "10px";
            }
            getIdAndShow("infoList");
        } else {
            i = "<div id=\"allInfo\">" + channelCode + "<div>";
            widgetAPI.putInnerHTML(getId("ya_date"), "");
            widgetAPI.putInnerHTML(getId("ya_date"), Main.lost_date);
            widgetAPI.putInnerHTML(getId("ya_info"), "");
            widgetAPI.putInnerHTML(getId("ya_info"), i);
            getId("allInfo").style.top = "0px";
            getIdAndShow("ya_date");
            getIdAndShow("ya_info");
            getIdAndShow("ya_help");
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
        Display.status("Previous channel", 500);
    } else {
        Display.status("Empty prev. channel list", 500);
    }
};

Main.SavePrevChannel = function () {
    if (this.play_prev) {
        var i = [this.selected_channel, this.selected_page, this.chan_array_index];
        this.prev_ch_array.push(i);
    }
};

Main.PlayPrevPlaylist = function () {
    if (KeyHandler.bl && this.prev_pl_array.length > this.number_p) {
        if (this.url != "" && (API.next_page_url == "" || API.prev_page_url == "")) {
            this.number_p++;
        }
        for (var l = 0; l < this.number_p - 1; l++) {
            this.prev_pl_array.pop();
        }
        this.number_p = 1;
    }
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
            this.help_info = false;
        }
        if (this.pl_url.indexOf(".dat") > 0) {
            Main.openCommonFile(this.pl_url);
        } else {
            if (q.length > 0) {
                Main.ReadPlArr(this.pl_url, q, o, p);
                API.playlist_name = j[10];
                API.prev_page_url = j[11];
                API.prev_page_text = j[12];
                API.next_page_url = j[13];
                API.next_page_text = j[14];
            } else {
                if (Main.name.indexOf("-=SEARCH=-") == 0) {
                    Main.name = "";
                }
                this.search_on = "";
                Main.playlist();
            }
        }
    } else {
        if (API.XML_URL.indexOf("start.xml") != 0) {
            this.start = true;
            Main.DEL = false;
            Main.playlist();
        } else {
            Display.status("Main playlist!", 500);
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
                o = API.all_channels;
            }
        }
        var i = [API.XML_URL, this.selected_channel, this.selected_page, this.chan_array_index, this.number_p, this.temp_fav_name, this.temp_fav_num, p, o, API.categories, API.playlist_name, API.prev_page_url, API.prev_page_text, API.next_page_url, API.next_page_text];
        this.prev_pl_array.push(i);
        this.playlist_prev = false;
    }
};

Main.selectNextChannel = function () {
    if (Main.Update_Page) {
        this.selected_channel++;
        if (this.selected_channel >= 10 || (this.selected_page == API.chan_pages - 1 && this.selected_channel == API.last_page_channels_counter)) {
            this.selected_channel = 0;
            this.selected_page++;
            Main.updatePage();
        } else {
            Main.updateChannel();
        }
    }
};

Main.selectPrevChannel = function () {
    if (Main.Update_Page) {
        this.selected_channel--;
        if (this.selected_page == 0 && this.selected_channel < 0) {
            this.selected_channel = API.last_page_channels_counter - 1;
            this.selected_page = API.chan_pages - 1;
            Main.updatePage();
        } else {
            if (this.selected_channel < 0) {
                this.selected_channel = 9;
                this.selected_page--;
                Main.updatePage();
            } else {
                Main.updateChannel();
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
            Main.PlayChannel();
        }
    } else {
        Display.status("Not Available!");
    }
}

Main.selectNextPage = function () {
    if (API.next_page_url != "" && this.selected_page == API.chan_pages - 1) {
        ListNextPage();
    } else {
        if (Main.Update_Page) {
            this.selected_page++;
            Main.updatePage();
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
        }
        if (Main.pl_url != "") {
            Main.PlayChannel();
        }
    } else {
        Display.status("Not Available!", 500);
    }
}

Main.selectPrevPage = function () {
    if (API.prev_page_url != "" && this.selected_page == 0) {
        ListPrevPage();
    } else {
        if (Main.Update_Page) {
            this.selected_page--;
            Main.updatePage();
        }
    }
};

Main.PlayChannel = function () {
    try {
        clearTimeout(this.load_timer);
        if (this.pl_url != "" && this.pl_url.indexOf("stop") != 0) {
			if (this.pl_url.indexOf("=m3u") >= 0) {
				a = this.pl_url;
				var o = a.replace("%3F", "?");
				var p = o.replace("%26", "&");
				var q = p.replace("%26", "&");
				var C = q;
				this.pl_url = C;
			}
            Main.playlist();
        } else {
            if (this.url != "" && this.url.indexOf("stop") != 0) {
                if (Player.state != Player.STOPPED) {
                    if (Main.PlayerMode == "0") {
                        Main.stopFPlayer();
                    } else {
                        Player.stopV();
                    }
                }
                Main.UpdatePlayerStatusbar();
                Display.status1(this.ch_num);
                Main.url_arr = [];
                Main.url_selected = 0;
                Main.ssize = GetChannelInfo(6);
                Main.a_num = GetChannelInfo(7);
                Main.SavePrevChannel();
                Main.SaveSelectedPosition();
                Main.XML_URL = API.XML_URL;
                widgetAPI.putInnerHTML(getId("resolution"), "");
                getIdAndHide("main");
                if (this.url.indexOf("rtmp://") >= 0 || this.url.indexOf("rtsp://") >= 0 || this.url.indexOf("mms://") >= 0 || this.url.indexOf(".flv") >= 0) {
                    Main.PlayerMode = "0";
                    hideWeather();
                    hideTemp();
                    hideScroll();
                    Main.PlayFlashStream();
                } else {
                    Main.PlayerMode = "1";
                    setTimeout(function() { Main.PlayNoFlashStream(); }, 50);
                    hideWeather();
                    hideTemp();
                    hideScroll();
                };
                pluginAPI.setOffScreenSaver();
            } else {
                if (this.url.indexOf("stop") == 0 || this.pl_url.indexOf("stop") == 0) {
                    alert("stop!");
                } else {
                    Display.status("Missing address!");
                };
                setTimeout(function() { Main.Menu(); }, 500);
            }
        }
    } catch (a) {}
};

Main.playlist = function () {
	alert('Main.playlist');
    setTimeout(function(){ showScroll(); }, 500);
    try {
        this.pl_url = decLongUrl(this.pl_url);
        this.pre_pl_url = API.XML_URL;
        this.playlist_name = Main.name;
        if (Main.start) {
            this.pl_url = "start.xml"
        }
        if (!this.DEL && !Main.guide && this.playlist_prev && Main.pl_url.indexOf("history.dat") < 0) {
            if (API.XML_URL.indexOf("fav.dat") > 0) {
                Main.temp_fav_num = Main.fav_num;
                Main.temp_fav_name = Main.fav_name;
            }
            Main.SavePrevPlaylist();
        }
        this.start = false;
        this.search = false;

		if (Main.name.indexOf("-=SEARCH=-") == 0 || this.pl_url.indexOf("ytv3/3.php") >= 0 || this.pl_url.indexOf("search.php") >= 0 || this.search_on != "") {
			Main.search = true;
		} else {
			alert('reading branch');
			API.XML_URL = this.pl_url;
			this.loading_pl = true;
			Display.status("Reading... ", 0);
			if (Main.pl_url.indexOf("=m3u") >= 0) {
				API.AsReqMode = true;
				if (this.pl_url.indexOf("=m3u") >= 0) {
					setTimeout(function() { API.Request(Main.pl_url); }, 3000);
				} else {
					API.Request(Main.pl_url);
				}
			} else {
				setTimeout(function() { API.Request(Main.pl_url); }, 50);
			}
		}
    } catch (d) {}
};

Main.PlayNoFlashStream = function () {
    if (API.Ibuffer > 0 && API.Buffer == 0) {
        Main.buffer = "";
    } else {
		if (Main.buffer != "") {
			Main.buffer = (Main.buffer > 20) ? 20 : (Main.buffer < 0.5) ? 0.5 : Main.buffer;
			if (Main.ibuffer > 0) {
				Main.ibuffer = (Main.ibuffer > 50) ? 50 : (Main.ibuffer < 10) ? 10 : Main.ibuffer;
			}
		} else {
			if (API.Buffer > 0) {
				Main.buffer = API.Buffer;
				if (API.Ibuffer > 0) {
					Main.ibuffer = API.Ibuffer;
				}
			}
		}
    }
    getIdAndShow("screen_size");
    var i = this.url;
    i = i.replace("rtp://", "udp://");
    if (i.indexOf("udp://") >= 0) {
        if (dPr(API.Proxy) != "" && API.Proxy.indexOf(":") > 0) {
            i = "http://" + API.Proxy + "/udp/" + i.substr(7);
        }
    } else {
		API.AsReqMode = false;
		try {
			// removed : i = Super_parser(i);
		} catch (b) {
			i = this.url;
		}
		API.AsReqMode = true;
    }
    if (dPr(i) != "") {
        if (i.indexOf(".m3u8") >= 0) {
            i = i + "|COMPONENT=HLS";
        }
        Player.play(i, 0);
    } else {
        Player.stopV();
        Display.status("Empty link!");
        this.prev_ch_array.pop();
        setTimeout(function() { Main.Menu(); }, 500);
    }
};

Main.PlayFlashStream = function () {
    Player.next = false;
    Player.state = Player.LOADING;
    KeyHandler.setFocus(2);
    getIdAndHide("screen_size");
    getIdAndShow("flashplayer");
    widgetAPI.putInnerHTML(getId("flashplayer"), "");
    var i = (this.url.indexOf(".flv") >= 0) ? ("flv=" + this.url) : ("file=" + this.url);
    var o = "<object type=\"application/x-shockwave-flash\" id=\"rmtpplayerHD\" width=\"960\" height=\"540\">";
    o += "<param name=\"movie\" value=\"nflashplayer.swf\" />";
    o += "<param name=\"FlashVars\" value=\"" + i + "\" /></object>";
    widgetAPI.putInnerHTML(getId("flashplayer"), o);
    Player.state = Player.PLAYING_LIVE;
    setTimeout(function() { Main.setPlayer(); }, 500);
};

Main.setPlayer = function () {
    Main.player = window.rmtpplayerHD;
};

Main.stopFPlayer = function () {
    delete Main.player;
    getIdAndHide("flashplayer");
    Display.hidestatus();
    widgetAPI.putInnerHTML(getId("flashplayer"), "");
    Player.state = Player.STOPPED;
};

Main.readFile = function (q, j) {
    var p = new FileSystem();
    var o = p.openCommonFile(curWidget.id + "/" + j, "r");
    if (!o) {
        o = p.openCommonFile(j, "r");
    }
    if (o) {
        while (1) {
            var i = o.readLine();
            if (i == null) {
                break;
            }
            q.push(i);
        }
        p.closeCommonFile(o);
    }
};

Main.writeFile = function (q, j) {
    var p = new FileSystem();
    if (!p.isValidCommonPath(curWidget.id)) {
        p.createCommonDir(curWidget.id);
    }
    var o = p.openCommonFile(curWidget.id + "/" + j, "w");
    if (o) {
        for (var i = 0; i < q.length; i++) {
            o.writeLine(q[i]);
        }
        p.closeCommonFile(o);
    }
};

Main.openCommonFile = function (p) {
    var l = [];
    Main.readFile(l, p);
    if (l.length == 0) {
		Display.status("Empty!", 500);
    } else {
        var q = [];
        for (var o = 0; o < l.length; o++) {
            var i = l[o];
            i = i.split("|");
            for (var j = 0; j < 14; j++) {
                if (i[j] == undefined) {
                    i[j] = "";
                }
            }
            q.push(i);
        }
        Main.ReadPlArr(p, q);
    }
};

Main.ReadPlArr = function (o, i, q, p) {
    Main.SavePrevPlaylist();
    API.ResetAll();
    API.channels = i;
    if (p != undefined && p.length > 2) {
        API.categories = p;
        if (q != undefined && q.length > 0) {
            API.all_channels = q;
        } else {
            API.all_channels = i;
        }
    }
    API.XML_URL = o;
    API.countPages();
    setTimeout(function(){ Main.Menu(); }, 500);
};

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
    return i;
}

Main.onUnload = function () {
    if (Main.PlayerMode == "0") {
        Main.stopFPlayer();
    }
    Player.deinit();
    alert("DEINIT");
};

function StartTime() {
	alert('executed StartTime()');
    clearInterval(Main.IntervalUpdateTime);
    Main.IntervalUpdateTime = setInterval(function() { SetTimeDate(); }, 1000);
    if (API.Timemode == 0) {
        SyncInetTime();
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
    /*
	var i = null;
    i = new XMLHttpRequest();
    i.onreadystatechange = function () {
        if (i.readyState == 4) {
            var o = Math.round(Number(i.responseText));
            if (!isNaN(o) && o > 0) {
                T.inetTime = o;
                clearInterval(Main.IntervalUpdateTime);
                Main.IntervalUpdateTime = setInterval(function() { SetTimeDate(); }, 1000);
            } else {
                if (T.Sync_step < 3) {
                    T.Sync_step++;
                    setTimeout(function() { SyncInetTime(); }, 60000);
                } else {
                    if (T.Sync_step == 3) {
                        T.Sync_step = 0;
                        setTimeout(function() { SyncInetTime(); }, 30 * 60000);
                        Display.status("Connection Error with NTP server!", 500);
                    }
                }
            }
        }
    }
    i.open("GET", "http://wwp.greenwichmeantime.com/time/scripts/clock-8/x.php", true);
    i.setRequestHeader("User-Agent", "Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51");
    i.send();
	*/
}

function getDT(o) {
    var i = new Date(o);
    T.year = i.getFullYear();
    T.date = i.getDate();
    T.month = i.getMonth();
    T.day = i.getDay();
    T.h = i.getHours();
    T.m = i.getMinutes();
    T.s = i.getSeconds();
}

function to(q, p, o, i) {
    return (q > 9 ? q : ("0" + q)) + ":" + (p > 9 ? p : ("0" + p)) + ((Player.state != Player.PLAYING_LIVE || i == 0) ? (":" + (o > 9 ? o : ("0" + o))) : "");
}

function SetTimeDate() {
    if (API.Timemode == 0 && T.inetTime > 0) {
        T.inetTime += 1000;
        var s = T.inetTime + API.Timefix * 3600000;
        T.y_t_days = parseInt(T.inetTime / 86400000);
        getDT(s);
    } else {
        if (API.Timemode == 0 || API.Timemode == 1) {
            s = Number(new Date()) + API.Timefix * 3600000;
            T.y_t_days = parseInt(new Date() / 86400000);
            getDT(s);
        } else {
            //if (!Main.Emu) {
                var R = getId("pluginTime");
                s = parseInt(R.GetEpochTime() * 1000);
                T.y_t_days = parseInt(s / 86400000);
                getDT(s);
            //}
        }
    }
    if (Main.ya_epg_info_arr.length > 0 && Main.epg_t1 <= Main.epg_t2) {
        var D = parseInt((T.h * 3600 + T.m * 60 + T.s) * 1000);
        if (Main.epg_t1 < 24 * 3600000 && Main.epg_t1 > D) {
            D += 24 * 3600000;
        }
        if (Main.epg_t1 < D && D <= Main.epg_t2) {
            if (D == Main.epg_t2) {
                Main.epg_t2 = 0;
                Main.epg_t1 = 0;
                GetEpgInfo();
            } else {
                var u = D - Main.epg_t1;
                var l = Main.epg_t2 - Main.epg_t1;
                TimeInfo(u, l);
            }
        } else {
            if (D == Main.epg_t2 + 1000) {
                Main.epg_t2 = 0;
                Main.epg_t1 = 0;
                GetEpgInfo();
            } else {
                if (Main.epg_t2 < D) {
                    TimeInfo(1, 1);
                } else {
                    TimeInfo(0, 0);
                }
            }
        }
    }
    var s = to(T.h, T.m, T.s, 0);
    getId("widget_time").innerHTML = s;
    getId("time").innerHTML = s;
    var weekDays = ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis'];
    var months = ['Sausio', 'Vasario', 'Kovo', 'Balandžio', 'Gegužės', 'Biržėlio', 'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'];
    var weekDay = weekDays[T.day];
    var month = months[T.month];
	var dateText = month + ' ' + T.date + 'd., ' + weekDay;
    getId("widget_date").innerHTML = dateText;
}

function TimeInfo(j, q) {
    if (j >= 0 && q >= j) {
        var p = (j > 0) ? parseInt((100 * j) / q) : 0;
        var o = Math.floor(p * 5.45);
        var i = "";
        getId("progressBar").style.width = o + "px";
        i = (p > 9 ? p : ("0" + p)) + "% " + msecToStr(j);
        i += "/" + msecToStr(q);
        getId("timeInfo").innerHTML = i;
    }
}

msecToStr = function (i, o) {
    i = Math.floor(i / 1000);
    m = Math.floor(i / 60);
    i = i % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    return to(h, m, i);
};

var API = {
    XML_URL: 'start.xml',
    star_url: 'https://raw.githubusercontent.com/blahlt/samsungtv/master/data/skynet20161003.m3u',
	//star_url: 'http://190.2.144.79:25461/get.php?username=mejoradaa&password=cambio&type=m3u',
	//star_url: 'https://raw.githubusercontent.com/blahlt/samsungtv/master/data/de-m3uplaylist-2018-03-10-1.m3u',
    Proxy: '',
    Timefix: '0',
    Timemode: '0',
    Size: '',
    Ph: "100",
    Pw: "100",
    a_size1: "2",
    a_size2: "0",
    a_size3: "0",
    Forma: "0",
    CODE: 213,
    REG: "ru",
    Scode: "0",
    Buffer: "0",
    Ibuffer: "0",
    Timeshift: "0",
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
    search_string: "",
    next_page_url: "",
    prev_page_url: "",
    playlist_name: "",
    search_on: "",
    next_page_text: "",
    prev_page_text: ""
};

API.init = function () {
    try {
        Main.MAC = Main.Network.GetMAC();
        setTimeout(function() { StartTime(); }, 50);
    } catch (k) {
        return false;
    }
    return true;
};

API.loadComplete = function () {
    if (API.channels.length == 0) {
        Display.status("<b style=\"color:yellow\">ERROR IN THE PLAYLIST!</b>");
        if (Main.prev_pl_array.length == 0 && API.XML_URL == "start.xml") {
            setTimeout(function() {
				getIdAndShow('main');
			}, 2000);
        } else {
            setTimeout(function() { Main.PlayPrevPlaylist(); }, 500);
        }
    } else {
        Display.hidestatus();
        Main.Menu();
    }
};

API.Request = function (url) {
    try {
        Main.guide = false;
		if (API.XHRObj != null) {
			API.XHRObj.destroy();
			API.XHRObj = null;
		}
		API.XHRObj = new XMLHttpRequest();
		if (API.AsReqMode) {
			KeyHandler.setFocus(1);
			API.stReq_timeout = setTimeout(function() { API.stopRequest(); }, API.stReq_time);
			API.XHRObj.onreadystatechange = function () {
				if (API.XHRObj.readyState == 4) {
					API.recieveMenuData(url);
				}
			}
			if (Main.seriesE && API.XHRObj.overrideMimeType) {
				API.XHRObj.overrideMimeType("text/xml");
			}
		}
		API.XHRObj.open("GET", url, API.AsReqMode);
		if (!API.AsReqMode || API.Header == "1") {
			API.XHRObj.setRequestHeader("Accept-Encoding", "identity");
			API.XHRObj.setRequestHeader("Accept-Language", "en-us,en;q=0.5");
			API.XHRObj.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
			API.XHRObj.setRequestHeader("User-Agent", "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.6) Gecko/20100627 Firefox/3.6.6");
			API.XHRObj.setRequestHeader("Accept-Charset", "ISO-8859-1,utf-8;q=0.7,*;q=0.7");
			API.XHRObj.setRequestHeader("Connection", "close");
		}
		API.XHRObj.send(null);
		if (!API.AsReqMode) {
			if ((API.XHRObj.status == 302 || API.XHRObj.status == 303) && API.XHRObj.getResponseHeader("Location") != null) {
				url = API.XHRObj.getResponseHeader("Location");
				return API.Request(url);
			} else {
				if (API.XHRObj.readyState == 4 && API.XHRObj.status == 200) {
					return API.XHRObj.responseText;
				} else {
					return "";
				}
			}
		}
    } catch (c) {}
};

API.recieveMenuData = function (url) {
    clearTimeout(API.stReq_timeout);
    if (API.XHRObj.status == 200) {
        if (url.toLowerCase().indexOf("=m3u") >= 0 || url.toLowerCase().indexOf(".m3u") >= 0 && API.XHRObj.responseText != null && API.XHRObj.responseText != "") {
            API.getChannel_list(API.XHRObj.responseText);
        } else {
            if (API.XHRObj.responseXML != null && API.XHRObj.responseXML != "") {
                //alert("GETTING XML SOURCE!!!");
                API.getChannel_list(API.XHRObj.responseXML);
            } else {
                API.channels = [];
                API.loadComplete();
            }
        }
    } else {
        Display.status("<b style=\"color:yellow\">Wrong address or an Error in the playlist! </b>");
        if (Main.FirstStart) {
            if (API.XML_URL.indexOf("start.xml") < 0) {
                API.XML_URL = "start.xml";
                setTimeout(function() { API.Request(API.XML_URL); }, 3000);
            } else {
                setTimeout(function() {
					getIdAndShow('main');
				}, 3000);
            }
        } else {
            setTimeout(function() { API.stopRequest(); }, 500);
        }
    }
};

API.stopRequest = function () {
    clearTimeout(API.stReq_timeout);
    if (API.XHRObj != null) {
        API.XHRObj.abort();
        API.XML_URL = Main.pre_pl_url;
        Main.prev_pl_array.pop();
        API.loadComplete();
    }
};

API.ResetAll = function () {
    API.chan_counter = 0;
    API.channels = [];
    API.all_channels = [];
    API.categories = [];
    API.playlist_name = "";
    API.next_page_url = "";
    API.prev_page_url = "";
    API.search_on = "";
    API.next_page_text = "";
    API.prev_page_text = "";
    if (!Main.DEL) {
        Main.ResetSelectedPosition();
    }
    Main.DEL = false;
};

API.getChannel_list = function (bk) {
    var bj = function (bq, bp, bo) {
            try {
                var bn = bq.getElementsByTagName(bp)[0].childNodes[0].nodeValue;
                if (bn == null) {
                    bn = "";
                }
                if (bo == 1) {
                    return dPr(bn, 1);
                } else {
                    return trimString(bn);
                }
            } catch (Y) {
                return "";
            }
        };
    var bi = function (bq, bp, bn) {
            try {
                var bo = bq.getElementsByTagName(bp)[0].getAttributeNode(bn).nodeValue;
                if (bo == null) {
                    bo = "";
                }
                return trimString(bo);
            } catch (Y) {
                return "";
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
			// m3u parser
            if (API.XML_URL.toLowerCase().indexOf(".m3u") >= 0 || API.XML_URL.toLowerCase().indexOf("=m3u") >= 0) {
                var W = {};
                var channelGroupIndex = 1;
                var lines = bh.split("\x0A"); // new line, (LF, 0x0A, \n)
                for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
                    if ((lines[lineIndex].indexOf("#EXTINF:") >= 0 && (lines[lineIndex + 1].indexOf("://") > 0 || lines[lineIndex + 2].indexOf("://") > 0
						|| lines[lineIndex + 1].indexOf("/dtv") > -1 || lines[lineIndex + 2].indexOf("/dtv") > -1)) || lines[lineIndex].indexOf("#EXTM3U") >= 0) {
                        var E = "";
                        var channelName = "";
                        var u = "";
						
						var channelCache = "";
						var channelCode = "";
						var channelTimeShift = "";
						var channelLogo = "";
						var channelAspectRatio = "";
						var channelAudioTrack = "";
						var channelGroup = "";
						
                        lines[lineIndex] = lines[lineIndex].replace(/'/g, "\"");
						
                        channelCache = parser(lines[lineIndex], "cache=", " ").replace(/"/g, "");
                        channelCache = (channelCache >= 0.5 && channelCache <= 20) ? channelCache : (channelCache >= 50 && channelCache <= 2000) ? channelCache / 100 : "";
						
                        channelCode = trimString(parser(lines[lineIndex], "tvg-name=\"", "\"").replace(/"/g, ""));
						
                        channelTimeShift = parser(lines[lineIndex], "tvg-shift=", " ").replace(/["\+]/g, "");
						
                        channelLogo = trimString(parser(lines[lineIndex], "tvg-logo=\"", "\"").replace(/"/g, "")).replace(/_/g, " ");
						
                        channelAspectRatio = parser(lines[lineIndex], "aspect-ratio=", " ").replace(/"/g, "");
                        channelAspectRatio = (channelAspectRatio.indexOf("16:9") >= 0 || channelAspectRatio.toLowerCase().indexOf("16x9") >= 0 || channelAspectRatio.indexOf("0") == 0)
							? "0"
							: (channelAspectRatio.indexOf("14:9") >= 0 || channelAspectRatio.toLowerCase().indexOf("14x9") >= 0 || channelAspectRatio.indexOf("1") == 0)
								? "1"
								: (channelAspectRatio.toLowerCase().indexOf("4:3z2") >= 0 || channelAspectRatio.toLowerCase().indexOf("4x3z2") >= 0 || channelAspectRatio.indexOf("2") == 0)
									? "2"
									: (channelAspectRatio.toLowerCase().indexOf("4:3z1") >= 0 || channelAspectRatio.toLowerCase().indexOf("4x3z1") >= 0 || channelAspectRatio.indexOf("3") == 0)
										? "3"
										: (channelAspectRatio.indexOf("4:3") >= 0 || channelAspectRatio.toLowerCase().indexOf("4x3") >= 0 || channelAspectRatio.indexOf("4") == 0)
											? "4"
											: (channelAspectRatio.toLowerCase().indexOf("x-zoom") >= 0 || channelAspectRatio.indexOf("5") == 0)
												? "5"
												: (channelAspectRatio.toLowerCase().indexOf("auto") >= 0 || channelAspectRatio.indexOf("6") == 0)
													? "6"
													: "";

                        channelAudioTrack = parser(lines[lineIndex], "audio-track=", " ").replace(/"/g, "");
                        channelAudioTrack = (channelAudioTrack != "") ? (parseInt(channelAudioTrack) + 1).toString() : "";
						
                        if (lineIndex == 0) {
                            p = (channelLogo != "") ? channelLogo : "";
                            o = (channelAspectRatio != "") ? channelAspectRatio : "";
                            i = (channelAudioTrack != "") ? channelAudioTrack : "";
                            be = (channelCache != "") ? channelCache : "";
                            bg = (channelTimeShift != "") ? channelTimeShift : "";
                        } else {
                            channelGroup = trimString(parser(lines[lineIndex], "group-title=\"", "\"").replace(/"/g, ""));
                            channelName = trimString(parser(lines[lineIndex], ","));
                            var channelUrl = (lines[lineIndex + 1].indexOf("://") > 0 || lines[lineIndex + 1].indexOf("/dtv") > -1) ? lines[lineIndex + 1] : lines[lineIndex + 2];
                            channelUrl = trimString(channelUrl);
                            channelLogo = (channelLogo != "") ? channelLogo : p;
                            if (channelUrl.indexOf(".m3u8") < 0) {
                                if (channelUrl.indexOf(".m3u") > -1 || channelUrl.indexOf(".xml") > -1) {
                                    channelLogo = (channelLogo == "") ? "blue_folder.png" : channelLogo;
                                    if (channelGroup != "") {
                                        channelCode = "Category : " + channelGroup;
                                    }
                                    u = channelUrl;
                                    channelUrl = "";
                                }
                            }
                            if (channelUrl != "") {
                                channelAspectRatio = (channelAspectRatio != "") ? channelAspectRatio : o;
                                channelAudioTrack = (channelAudioTrack != "") ? channelAudioTrack : i;
                                channelTimeShift = (channelTimeShift != "") ? channelTimeShift : bg;
                                channelCache = (channelCache != "") ? channelCache : be;
                            }
                            if (channelGroup != "") {
                                E = W[channelGroup];
                                if (E == undefined) {
                                    W[channelGroup] = channelGroupIndex;
                                    E = channelGroupIndex;
                                    var V = [channelGroupIndex, channelGroup];
                                    API.categories.push(V);
                                    channelGroupIndex++;
                                }
                            }
                            var Z = [channelName, channelUrl, channelLogo, channelCode, E, u, channelAspectRatio, channelAudioTrack, channelCache, "", channelTimeShift, "", "", ""];
                            API.channels.push(Z);
                            lineIndex++;
                        }
                    }
                }
            }
        }
    } catch (F) {
        API.channels = [];
    }
    API.countPages();
    if (API.categories.length > 2) {
        API.all_channels = API.channels;
    }
    API.loadComplete();
};

API.setCategory = function (p) {
    API.channels = [];
    Main.ResetSelectedPosition();
    for (var i = 0; i < API.all_channels.length; i++) {
        if (API.all_channels[i][4] == p && p != "") {
            API.channels.push(API.all_channels[i]);
        } else {
            if (p == "") {
                API.channels.push(API.all_channels[i]);
            }
        }
    }
    if (API.channels.length == 0) {
        var o = ["This category is empty!", "stop", "", "This category is empty!", "", "", "", "", "", "", "", "", "", ""];
        API.channels.push(o);
    }
    API.countPages();
};

API.countPages = function () {
    if (API.channels.length > 0) {
        API.chan_pages = API.channels.length;
        API.last_page_channels_counter = API.channels.length % 10;
        if (API.last_page_channels_counter == 0) {
            API.last_page_channels_counter = 10;
        }
        API.chan_pages = (API.last_page_channels_counter > 0 && API.last_page_channels_counter < 5) ? Math.round(API.chan_pages / 10) + 1 : Math.round(API.chan_pages / 10);
    }
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
        getIdAndShow("loading");
        Display.loadingshowTimer();
        this.run = true;
        Display.loadingstep();
    }
};

Display.loadinghide = function () {
    this.run = false;
    clearTimeout(this.loadingshow_timer);
    getIdAndHide("loading");
};

Display.loadingstep = function () {
    if (this.index < 10) {
        getId("imgAnim").src = "img/loading/loading_0" + this.index + ".png";
    } else {
        getId("imgAnim").src = "img/loading/loading_" + this.index + ".png";
    }
    this.index++;
    if (this.index > 8) {
        this.index = 1;
    }
    if (this.run) {
        setTimeout(function() { Display.loadingstep(); }, 200);
    }
};

Display.loadingshowTimer = function () {
    this.loadingshow_timer = setTimeout(function() { Player.ReturnMenu(); }, 60000);
};

Display.showplayer = function () {
    if (KeyHandler.Focus != 0) {
		if (Player.state == Player.PLAYING_LIVE) {
			getIdAndHide("p_info_line");
			getIdAndHide("p_epg_line");
			if (Main.seriesE) {
				if (Main.PlayerMode == "1") {
					getId("help_navi_l_player").style.left = "70px";
				} else {
					getId("help_navi_l_player").style.left = "130px";
				}
				getId("progressBarBG").style.left = "10px";
				getId("timeInfo").style.left = "595px";
				getId("resolution").style.left = "740px";
				getId("time").style.left = "850px";
			} else {
				if (Main.PlayerMode == "1") {
					getId("help_navi_l_player").style.left = "80px";
				} else {
					getId("help_navi_l_player").style.left = "140px";
				}
				getId("progressBarBG").style.left = "20px";
				getId("timeInfo").style.left = "605px";
				getId("resolution").style.left = "750px";
				getId("time").style.left = "860px";
			}
			getIdAndShow("help_navi_l_player");
			if (Main.PlayerMode == "1") {
				if (Main.ya_epg_info_arr.length > 0 && Main.ya_prog_id == Main.chan_array_index) {
					getIdAndShow("p_info_line");
					getIdAndShow("p_epg_line");
					var i = 302;
					if (Main.seriesE) {
						i = 280;
					}
					if (getId("epg_info").innerHTML.length > i) {
						getId("statusbar").style.top = "120px";
					} else {
						getId("statusbar").style.top = "100px";
					}
				} else {
					getId("statusbar").style.top = "70px";
					setTimeout(function() { Main.UpdateChannelInfo(); }, 400);
				}
			}
		}
        if (Main.PlayerMode == "1") {
            getIdAndShow("resolution");
        } else {
            getIdAndHide("resolution");
        }
        if (API.Pstyle == "1") {
            getIdAndShow("p_second_line");
        } else {
            getIdAndHide("p_second_line");
        }
        getIdAndHide("statusbar1");
        getIdAndShow("player");
        clearTimeout(this.infobar_timer);
		Display.infobarTimer();
    }
};

Display.hideplayer = function () {
    getIdAndHide("player");
    getId("statusbar").style.top = "10px";
    if (Main.epg_info_step != 0) {
        Main.epg_info_step = 0;
        GetNextEpgInfo();
    }
};

Display.infobarTimer = function () {
    this.infobar_timer = setTimeout(function() { Display.hideplayer(); }, 5000);
};

Display.status = function (o, i) {
    getIdAndHide("version");
    getIdAndShow("statusbar");
    widgetAPI.putInnerHTML(getId("status"), o);
    clearTimeout(this.status_timer);
    if (i == undefined) {
        Display.statusTimer(3000);
    } else {
        if (i != 0) {
            Display.statusTimer(i);
        }
    }
};

Display.status1 = function (i) {
    getIdAndShow("statusbar1");
    widgetAPI.putInnerHTML(getId("status1"), i);
    clearTimeout(this.status1_timer);
    Display.status1Timer();
};

Display.hidestatus = function () {
    getIdAndHide("statusbar");
    getIdAndShow("version");
};

Display.statusTimer = function (i) {
    this.status_timer = setTimeout(function() { Display.hidestatus(); }, i);
};

Display.status1Timer = function () {
    this.status1_timer = setTimeout(function() { getIdAndHide("statusbar1"); }, 3000);
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
            KeyHandler.Menu = 1;
        }
    } else {
        Main.registVOLTVKey();
        pluginAPI.ShowTools(0);
        KeyHandler.Menu = 0;
    }
}

function SmartExit() {
    widgetAPI.blockNavigation(event);
    if (Player.state == Player.STOPPED) {
        if (KeyHandler.send_Return) {
            widgetAPI.sendReturnEvent();
        }
        KeyHandler.send_Return = true;
        Display.status("<b style=\"color:yellow\">To quit - press \"EXIT\" again!</b>", 2000);
        setTimeout(function() { KeyHandler.send_Return=false; }, 2000);
    } else {
        Player.ReturnMenu();
    }
}

KeyHandler.setFocus = function (i) {
    KeyHandler.Focus = i;
    switch (i) {
    case 0:
		alert('setFocus:' + i + ' | MainMenu_Anchor');
        getId("MainMenu_Anchor").focus();
        pluginAPI.registKey(tvKey.KEY_TOOLS);
        break;
    case 1:
		alert('setFocus:' + i + ' | LoadingPlayer_Anchor');
        getId("LoadingPlayer_Anchor").focus();
        break;
    case 2:
		alert('setFocus:' + i + ' | LivePlayer_Anchor');
        getId("LivePlayer_Anchor").focus();
        pluginAPI.unregistKey(tvKey.KEY_TOOLS);
        break;
    default:
		alert('setFocus:' + i + ' | Unknown');
        break;
    }
};

// Handle channel selector (- or --)
KeyHandler.KanalSelector = function () {
    if (KeyHandler.NumberEntered > API.channels.length) {
        Display.status("Input error", 500);
    } else {
        if (KeyHandler.NumberEntered > 0) {
            Main.selected_channel = (KeyHandler.NumberEntered < 11) ? KeyHandler.NumberEntered - 1 : ((KeyHandler.NumberEntered % 10) > 0) ? (KeyHandler.NumberEntered % 10) - 1 : 9;
            Main.selected_page = Math.round(KeyHandler.NumberEntered / 10);
            if (Main.selected_channel > 3) {
                Main.selected_page--;
            }
            Main.chan_array_index = parseInt(KeyHandler.NumberEntered - 1);
            if (Main.loading_pl) {
                Player.ReturnMenu();
            } else {
                Main.block_info = true;
                Main.UpdateChannelInfo();
                setTimeout(function(){ Main.PlayChannel(); }, 20);
            }
        }
    }
    KeyHandler.NumberEntered = "";
};

// Choose number with more than one digit
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
        break;
    }
    KeyHandler.NumberEntered = KeyHandler.NumberEntered + i;
    if (KeyHandler.NumberEntered != "") {
        Display.hideplayer();
        if (Main.PlayerMode == "0" && Player.state != Player.STOPPED) {
            Main.player.info(KeyHandler.NumberEntered);
        } else {
            Display.status1(KeyHandler.NumberEntered);
        }
        clearTimeout(this.ChSelectorTimeout);
        this.ChSelectorTimeout = setTimeout(function() { KeyHandler.KanalSelector(); }, 2000);
    }
};

KeyHandler.MainMenuKeyDown = function () {
    var o = event.keyCode;
    KeyHandler.Keys10(o);
    switch (o) {
    case tvKey.KEY_SOURCE:
        if (!Main.FirstStart) {
            Main.pl_url = "ScanUSB";
            Main.playlist();
        }
        break;
    case 1086:
    case 84:
        if (API.XML_URL.indexOf("start.xml") != 0) {
            Main.start = true;
            Main.playlist();
        } else {
            Main.PlayPrevPlaylist();
        }
        break;
    case 256:
    case 1057:
    case tvKey.KEY_GUIDE:
        widgetAPI.blockNavigation(event);
        if (Main.play_chan_array_index != Main.chan_array_index) {
            this.guide_step = 0;
        }
        if (Main.yandextv_mode && this.guide_step == 0 && Main.ya_prog_info_arr.length > 0) {
            Main.guide = true;
            Main.ReadPlArr(API.XML_URL, Main.ya_prog_info_arr);
        } else {
            if (Player.state == Player.PLAYING_LIVE && this.guide_step == 1) {
                this.guide_step = 0;
                Main.SetSelectedPosition();
                getIdAndHide("main");
                Display.hidestatus();
                KeyHandler.setFocus(2);
                Display.showplayer();
            } else {
                Display.status("There is no EPG!", 500);
            }
        }
        break;
    case tvKey.KEY_INFO:
        Display.status("MAC = " + Main.MAC, 5000);
		AlertInfo();
        break;
    case tvKey.KEY_TOOLS:
        break;
    case 1118:
    case tvKey.KEY_PANEL_MENU:
    case tvKey.KEY_MENU:
        widgetAPI.blockNavigation(event);
        ShowMenuTV();
        break;
    case 78:
    case 259:
        if (!Main.help_info) {
            Main.PlayPrevChannel();
        }
        break;
    case tvKey.KEY_EXIT:
        SmartExit();
        break;
    case tvKey.KEY_RETURN:
        widgetAPI.blockNavigation(event);
        if (Player.state != Player.STOPPED && Main.XML_URL == API.XML_URL) {
            this.guide_step = 0;
            Main.SetSelectedPosition();
            getIdAndHide("main");
            Display.hidestatus();
            if (Player.state == Player.PLAYING_LIVE) {
                KeyHandler.setFocus(2);
            } else {
                KeyHandler.setFocus(3);
            }
            Display.showplayer();
            hideWeather();
            hideTemp();
            hideScroll();
        } else {
            Main.PlayPrevPlaylist();
        }
        break;
    case 106:
    case tvKey.KEY_DOWN:
        Main.selectNextChannel();
        break;
    case 105:
    case tvKey.KEY_UP:
        Main.selectPrevChannel();
        break;
    case tvKey.KEY_LEFT:
        Main.selectPrevPage();
        break;
    case tvKey.KEY_RIGHT:
        Main.selectNextPage();
        break;
    case 612:
    case 309:
    case tvKey.KEY_ENTER:
        if (KeyHandler.NumberEntered != "") {
            clearTimeout(this.ChSelectorTimeout);
            KeyHandler.KanalSelector();
        } else {
            if (Main.help_info) {
                Main.help_step++;
            }
            Main.PlayChannel();
        }
        break;
    case tvKey.KEY_RED:
        break;
    case tvKey.KEY_GREEN:
        break;
    case tvKey.KEY_YELLOW:
        break;
    case tvKey.KEY_BLUE:
        if (Main.FAV && !Main.block_fav) {
            Main.RED = true;
            Main.Menu();
        } else {
            if (Player.state == Player.STOPPED) {
                if (Main.ret) {
                    this.bl = true;
                }
                Main.PlayPrevPlaylist();
            }
        }
        break;
    case tvKey.KEY_FF:
        widgetAPI.blockNavigation(event);
        if (Main.yandextv_mode) {
            T.delta++;
            if (T.delta > 5) {
                T.delta = 0;
            }
        } else {
            ListNextPage();
        }
        break;
    case tvKey.KEY_PAUSE:
        widgetAPI.blockNavigation(event);
        if (Player.total_time != 0) {
            /*if (Player.state == Player.PAUSE_VOD) {
                Player.resumeVideo();
            } else {
                Player.pauseVideo();
            }*/
        } else {
            if (Main.yandextv_mode) {
                c = (Main.region != "") ? Main.region : API.CODE;
                Main.lost_date = ": <font style='font-size:16px;color:white;'>scroll page</font><font style='font-size:16px;color:cyan;'> P-/P+ </font>: <font style='font-size:16px;color:white;'>region - </font><font style='font-size:16px;color:cyan;'>" + c
				+ "</font> : <font style='font-size:16px;color:white;'>index - </font><font style='font-size:16px;color:cyan;'>"
				+ Main.ch_index
				+ "</font> :";
            }
        }
        break;
    case tvKey.KEY_RW:
        widgetAPI.blockNavigation(event);
        if (Main.yandextv_mode) {
            T.delta--;
            if (T.delta < -6) {
                T.delta = 0;
            }
        } else {
            ListPrevPage();
        }
        break;
    case 68:
        ;
    case 1078:
        scrollDown();
        break;
    case 65:
        ;
    case 1080:
        scrollUp();
        break;
    case tvKey.KEY_PLAY:
        widgetAPI.blockNavigation(event);
		if (Main.yandextv_mode) {
			if (!Main.ya_all_day) {
				Main.ya_all_day = true;
			} else {
				Main.ya_all_day = false;
			}
		} else {
			if (Player.state == Player.STOPPED) {
				Main.PlayChannel();
			} else {
				if (Player.total_time != 0) {
					if (!Player.next && !Player.repeat) {
						Player.next = true;
						Display.status("Resume playback", 1000);
					} else {
						if (Player.next && !Player.repeat) {
							Player.repeat = true;
							Display.status("Repeat playback", 1000);
						} else {
							if (Player.next && Player.repeat) {
								Player.next = false;
								Player.repeat = false;
								Display.status("All modes are disabled!", 1000);
							}
						}
					}
				}
			}
		}
        break;
    case tvKey.KEY_STOP:
        widgetAPI.blockNavigation(event);
        if (Main.FAV) {
            if (Player.state != Player.STOPPED) {
                Player.stopV();
            }
            setTimeout(function() { getIdAndHide('main'); }, 100);
        } else {
            if (!Main.help_info) {
                if (Player.state != Player.STOPPED) {
                    Player.stopV();
                }
                setTimeout(function() { getIdAndHide('main'); }, 100);
            } else {
                if (Player.state != Player.STOPPED) {
                    Player.ReturnMenu();
                }
            }
        }
        break;
    case 1249:
    case 192:
        widgetAPI.blockNavigation(event);
        Display.status("MAC = " + Main.MAC, 5000);
        break;
    case 1236:
    case 1089:
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
    case 105:
    case 68:
    case 1078:
        if (!Main.loading_pl) {
            Main.block_info = true;
            Main.selectNextChannel();
            setTimeout(function(){ Main.PlayChannel(); }, 50);
        }
        break;
    case tvKey.KEY_DOWN:
    case 106:
    case 65:
    case 1080:
        if (!Main.loading_pl) {
            Main.block_info = true;
            Main.selectPrevChannel();
            setTimeout(function(){ Main.PlayChannel(); }, 50);
        }
        break;
    case 78:
    case 259:
        if (!Main.loading_pl) {
            Main.PlayPrevChannel();
        }
        break;
    case tvKey.KEY_EXIT:
        widgetAPI.blockNavigation(event);
        if (!Main.loading_pl) {
            Player.ReturnMenu();
        } else {
            API.stopRequest();
        }
        break;
    case tvKey.KEY_RETURN:
        widgetAPI.blockNavigation(event);
        if (!Main.loading_pl) {
            Player.ReturnMenu();
        }
        break;
    case tvKey.KEY_STOP:
        widgetAPI.blockNavigation(event);
        if (!Main.loading_pl) {
            Player.ReturnMenu();
        }
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
    case 84:
        if (Player.size == 5) {
            if (Main.SetZoom) {
                Main.SetZoom = false;
            } else {
                Main.SetZoom = true;
                Display.status("<table><tr><td><img src=\"img/buttons/move_m.png\"></img></td><td>- Set Zoom</td></tr></table>", 0);
            }
        }
        break;
    case 1057:
    case 256:
    case tvKey.KEY_GUIDE:
        widgetAPI.blockNavigation(event);
        if (Main.yandextv_mode) {
            Display.hideplayer();
            Main.Menu();
        } else {
            Display.status("NO EPG!", 500);
        }
        break;
    case tvKey.KEY_TOOLS:
        if (Main.serieC) {
            widgetAPI.blockNavigation(event);
        }
        break;
    case 1118:
    case tvKey.KEY_PANEL_MENU:
    case tvKey.KEY_MENU:
        widgetAPI.blockNavigation(event);
        ShowMenuTV();
        break;
    case tvKey.KEY_GREEN:
        if (Main.PlayerMode == "1") {
            Player.SEFSetNextAudioStream();
        } else {
            Display.status("Not Available!", 500);
        }
        break;
    case 20:
        if (Main.PlayerMode == "1") {
            Player.SEFSetNextAudioStream();
        } else {
            Display.status("Not Available!", 500);
        }
        break;
    case tvKey.KEY_YELLOW:
        Main.registVOLTVKey();
        pluginAPI.ShowTools(1);
        break;
    case 78:
    case 259:
        Main.PlayPrevChannel();
        break;
    case tvKey.KEY_BLUE:
    case 653:
    case 1249:
    case 1083:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "1") {
            if (Player.size >= 6) {
                Player.setSize(0, 1, 0);
            } else {
                Player.setSize(Player.size + 1, 1, 0);
            }
            Main.SetZoom = false;
        } else {
            Display.status("Not Available!", 500);
        }
        break;
    case 1219:
        if (Main.PlayerMode == "1") {
            if (Player.get3DMode() >= 2) {
                Player.change3DMode(0);
            } else {
                Player.change3DMode(Player.get3DMode() + 1);
            }
        } else {
            Display.status("Not Available!", 500);
        }
        break;
    case tvKey.KEY_UP:
    case 105:
    case 68:
    case 1078:
        if (Main.SetZoom) {
            if (Player.Ph < 150) {
                Player.Ph++;
                Player.setSize(Player.size, 1, 0);
            }
        } else {
            Main.block_info = true;
            Main.selectNextChannel();
            setTimeout(function(){ Main.PlayChannel(); }, 20);
        }
        break;
    case tvKey.KEY_DOWN:
    case 106:
    case 65:
    case 1080:
        if (Main.SetZoom) {
            if (Player.Ph > 50) {
                Player.Ph--;
                Player.setSize(Player.size, 1, 0);
            }
        } else {
            Main.block_info = true;
            Main.selectPrevChannel();
            setTimeout(function(){ Main.PlayChannel(); }, 20);
        }
        break;
    case tvKey.KEY_RIGHT:
        if (Main.SetZoom) {
            if (Player.Pw < 150) {
                Player.Pw++;
                Player.setSize(Player.size, 1, 0);
            }
        } else {
            SetVolume(0);
        }
        break;
    case tvKey.KEY_LEFT:
        if (Main.SetZoom) {
            if (Player.Pw > 50) {
                Player.Pw--;
                Player.setSize(Player.size, 1, 0);
            }
        } else {
            SetVolume(1);
        }
        break;
    case tvKey.KEY_INFO:
    case tvKey.KEY_ENTER:
        if (KeyHandler.NumberEntered != "") {
            clearTimeout(this.ChSelectorTimeout);
            KeyHandler.KanalSelector();
        } else {
            if (Main.PlayerMode == "0") {
                Main.player.info("Flash player");
            }
            Display.showplayer();
        }
        break;
    case 612:
    case 309:
    case tvKey.KEY_STOP:
    case tvKey.KEY_EXIT:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "0") {
            Main.stopFPlayer();
            Main.Menu();
        } else {
            Player.ReturnMenu();
        }
        break;
    case tvKey.KEY_RETURN:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "0") {
            Main.stopFPlayer();
        } else {
            Display.hideplayer();
        }
        Main.Menu();
        break;
    case tvKey.KEY_PLAY:
		if (Main.PlayerMode == "1") {
			Player.play(Player.url, 0);
		} else {
			Display.status("Not Available!", 500);
		}
        break;
    case tvKey.KEY_FF:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "1") {
            if (Main.epg_info_step <= Main.ya_epg_info_arr.length - 1) {
                Main.epg_info_step++;
                GetNextEpgInfo();
            } else {
                Display.status("No data!", 500);
            }
        } else {
            Display.status("Not Available!", 500);
        }
        break;
    case tvKey.KEY_PAUSE:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "1") {
            Main.epg_info_step = 0;
            GetNextEpgInfo();
        } else {
            Display.status("Not Available!", 500);
        }
        break;
    case tvKey.KEY_RW:
        widgetAPI.blockNavigation(event);
        if (Main.PlayerMode == "1") {
            if (Main.epg_info_step > 0) {
                Main.epg_info_step--;
                GetNextEpgInfo();
            } else {
                Display.status("No data!", 500);
            }
        } else {
            Display.status("Not Available!", 500);
        }
        break;
    case 192:
        if (this.black_line) {
            getIdAndHide("black_line_top");
            this.black_line = false;
        } else {
            getIdAndShow("black_line_top");
            this.black_line = true;
        }
        break;
    case 650:
    case 1089:
    case tvKey.KEY_SUBTITLE:
        if (Main.PlayerMode == "1") {
            Player.SEFSetNextAudioStream();
        } else {
            Display.status("Not Available!", 500);
        }
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
    statusmessage: "",
    total_time: 0,
    cur_time: 0,
    save_time: 0,
    delta_time: 0,
    next: false,
    repeat: false,
    jump: false,
    mode3D: 0,
    status3D: "",
    tnum: 0,
    url: "",
    serr: 0
};

Player.init = function () {
    var playerInitStatus = true;
    this.state = this.STOPPED;
    var i = getId("pluginObjectNNavi");
    var firmware = i.GetFirmware();
    alert("firmware= " + firmware);
    
	this.SefPlugin = getId("pluginObjectSef");
    var p = getId("pluginObjectTVMW");
    if (p != null) {
        this.Screen3Dplugin = getId("pluginObjectScreen3D");
        p.SetMediaSource();
    } else {
        playerInitStatus = false;
    }
    return playerInitStatus;
};

Player.get3DMode = function () {
    try {
        if (this.Screen3Dplugin != null) {
            if (1 == this.Screen3Dplugin.Flag3DEffectSupport() || this.Screen3Dplugin.Flag3DTVConnect() == 1) {
                return this.mode3D;
            } else {
                return 0;
            }
        }
    } catch (e) {
        return 0;
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
            Player.play(Player.url, 0);
        }
    }
};

Player.OnConnectionFailed = function () {
    Player.error(9);
};

Player.OnNetworkDisconnected = function () {
    Player.error(8);
};

Player.OnStreamNotFound = function () {
    Player.error(7);
};

Player.OnRenderError = function (i) {
    Player.error(i);
};

Player.error = function (i) {
    if (this.state != this.STOPPED && i >= 1) {
        var eerr = (i == 1)
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
											: eerr;
        if (i < 7 && this.serr < 3) {
            this.serr++;
            if (i < 3 && i != 6) {
                Player.play(this.url, 0);
            }
        } else {
            if (eerr != "") {
                Display.status(eerr);
                setTimeout(function() { Player.ReturnMenu(); }, 500);
            }
        }
    }
};

Player.AutoReStart = function () {
    if (this.state != this.LOADING && this.total_time == 0) {
        var i = 10000;
        if (Main.serieC && this.url.indexOf("udp://") >= 0) {
            i = 15000;
        };
        Player.BufferingTimer(function() { Player.play(Player.url,0); }, i);
        Display.status("Auto Restart", 3000);
    }
};

Player.OnBufferingStart = function () {
    if (this.state != this.STOPPED) {
        Player.AutoReStart();
        if (!this.jump) {
            Display.status("Buffer : 1%");
        }
    }
};

Player.OnBufferingProgress = function (i) {
    if (this.state != this.STOPPED) {
        if (!this.jump) {
            Display.status("Buffer : " + i + "%", 5000);
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
                this.total_time = this.SefPlugin.Execute("GetDuration");
            } catch (a) {
                this.total_time = 0;
            }

			this.state = this.PLAYING_LIVE;
			KeyHandler.setFocus(2);
			
            Player.GetResolution();
            setTimeout(function() { Player.GetVideoSize(); }, 1000);
			Player.GetAudioNum();
            if (this.status3D != "") {
                Player.message = this.status3D;
            }
            if (Main.url_arr.length > 1) {
                Player.message += "<tr><table><tr><td><img src=\"img/buttons/red_m.png\"></img></td><td>- Set Quality</td></tr></table></tr>";
            }
            Main.LoadTimer(function() {
				if (Player.message != "") {
					Display.status("<table>" + Player.message + "</table>", 6000);
				}
			}, 2000);
            setTimeout(function() { Player.message = ""; }, 3000);
            Display.loadinghide();
            Display.showplayer();
        }
        if (this.jump) {
            Display.showplayer();
            setTimeout(function() { Display.hideplayer(); }, 1500);
            this.jump = false;
        }
        Display.hidestatus();
    }
};

Player.BufferingTimer = function (o, i) {
    clearTimeout(this.buffering_timer);
    this.buffering_timer = setTimeout(o, i);
};

Player.SetBuffer = function () {
    if (Main.buffer != "") {
        var i = parseInt((Main.buffer * 1048576), 10);
        var o = (Main.ibuffer > 0) ? parseInt((Main.buffer * i / 100), 10) : parseInt((i / 5), 10);
		this.SefPlugin.Execute("SetTotalBufferSize", i);
		this.SefPlugin.Execute("SetInitialBuffer", o);
		this.SefPlugin.Execute("SetInitialTimeOut", 20);
		this.SefPlugin.Execute("SetPendingBuffer", o);
    }
};

Player.ReturnMenu = function () {
    Player.stopV();
    Main.Menu();
};

Player.deinit = function () {
    Player.stop();
    alert("Player deinit");
};

Player.stop = function () {
    clearTimeout(this.buffering_timer);
    this.message = "";
    this.w = 0;
    this.h = 0;
    this.Pw = parseInt(API.Pw);
    this.Ph = parseInt(API.Ph);
    this.serr = 0;
    this.tnum = 0;
    this.total_time = 0;
    this.cur_time = 0;
    this.save_time = 0;
    this.jump = false;
    if (this.state != this.STOPPED) {
        this.state = this.STOPPED;
        Player.SaveUrl();
		this.SefPlugin.Execute("Stop");
		this.SefPlugin.Execute("ClearScreen");
		this.SefPlugin.Close();
    }
};

Player.stopV = function () {
    Player.stop();
    this.repeat = false;
    this.mode3D = 0;
    this.status3D = "";
    Main.ya_epg_info_arr = [];
    Display.loadinghide();
    Display.hideplayer();
    Display.hidestatus();
};

Player.play = function (i, o) {
    this.url = i;
    Player.stop();
    Player.state = Player.LOADING;
    KeyHandler.setFocus(1);
	Display.loadingshow();
	this.SEFPlay(this.url, o);
};

Player.SaveUrl = function () {
    if (this.cur_time > 120000) {
        var i = [this.url + "|" + this.cur_time];
        Main.readFile(i, "url.dat");
        if (i.length > 10) {
            i.pop();
        }
        for (var o = 1; o < i.length; o++) {
            if (i[o].indexOf(this.url) == 0) {
                i.splice(o, 1);
                break;
            }
        }
        Main.writeFile(i, "url.dat");
    }
};

Player.GetResolution = function () {
    if (this.state != this.STOPPED) {
        if (this.url.indexOf(".mp3") < 0 && this.w == 0) {
            try {
				var o = this.SefPlugin.Execute("GetVideoResolution");
				o = o.split("|");
				if (o.length > 0) {
					this.w = o[0];
					this.h = o[1];
				}
            } catch (c) {
                this.w = 0;
                this.h = 0;
            }
        }
        if (this.w == 5) {
            this.h = 432;
            this.w = 540;
        } else {
            if (this.w == 4) {
                this.h = 270;
                this.w = 480;
            } else {
                if (this.w == 3) {
                    this.h = 288;
                    this.w = 384;
                } else {
                    if (this.w < 128 || this.w == "") {
                        this.h = 0;
                        this.w = 0;
                    }
                }
            }
        }
        var i = this.w + "X" + this.h;
        if (this.url.indexOf(".mp3") > 0) {
            i = "- MP3 -";
        }
        widgetAPI.putInnerHTML(getId("resolution"), i);
    }
};

Player.GetVideoSize = function () {
    if (this.state != this.STOPPED) {
        if (this.w == 0 || this.w == "") {
            Player.GetResolution();
        }
        if (Player.mode3D == 0) {
            Player.size = (Main.ssize != "") ? parseInt(Main.ssize) : (API.Size != "") ? parseInt(API.Size) : parseInt(this.size);
        } else {
            Player.size = 0;
        }
        if (this.url.indexOf(".mp3") < 0) {
            setTimeout(function() { Player.setSize(Player.size, 1, 1); }, 100);
        }
    }
};

Player.setSize = function (p, o, i) {
    if (this.state != this.STOPPED) {
        var q = this.w;
        var l = this.h;
        if (o > 0) {
            if (((q / l < 1.35 && API.a_size1 < 6) || (q / l < 1.79 && q / l >= 1.35 && API.a_size2 < 6) || (q / l >= 1.79 && API.a_size3 < 6)) && i == 0) {
                if (p > 5) {
                    p = 0;
                }
            }
            this.size = p;
            Main.ssize = p.toString();
            if (this.w == 0 || this.w == "") {
                Player.GetResolution();
            }
        }
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
                j = "16x9 FULL";
            } else {
                j = "ORIGINAL";
                R = 960 * l / q;
                G = (540 - R) / 2;
            }
            break;
        case 1:
            if (q == 0) {
                j = "w/h=1.67";
                z = 30;
                E = 900;
            } else {
                j = "14x9";
                u = 0.0625 * l;
                s = q;
                y = 0.875 * l;
            }
            break;
        case 2:
            if (q == 0) {
                j = "w/h=1.56";
                z = 60;
                E = 840;
            } else {
                if (q / l < 1.35) {
                    j = "4x3 ZOOM 2";
                    u = 0.115 * l;
                    s = q;
                    y = 0.77 * l;
                } else {
                    return Player.setSize(5, o, i);
                }
            }
            break;
        case 3:
            if (q == 0) {
                j = "w/h=1.45";
                z = 90;
                E = 780;
            } else {
                if (q / l < 1.35) {
                    j = "4x3 ZOOM 1";
                    z = 60;
                    E = 840;
                    u = 0.0625 * l;
                    s = q;
                    y = 0.875 * l;
                } else {
                    return Player.setSize(5, o, i);
                }
            }
            break;
        case 4:
            if (q / l < 1.35 || this.w == 0) {
                j = "4x3";
                z = 120;
                E = 720;
            } else {
                return Player.setSize(5, o, i);
            }
            break;
        case 5:
            if (q == 0) {
                j = "w/h=2";
                G = 30;
                R = 480;
            } else {
                if (Player.Pw <= 100) {
                    E = 9.6 * Player.Pw;
                    z = (960 - E) / 2;
                } else {
                    s = q * (2 - Player.Pw / 100);
                    D = q * (Player.Pw / 200 - 0.5);
                }
                if (Player.Ph <= 100) {
                    R = 5.4 * Player.Ph;
                    G = (540 - R) / 2;
                } else {
                    y = l * (2 - Player.Ph / 100);
                    u = l * (Player.Ph / 200 - 0.5);
                }
                j = "X-ZOOM - set size: CH LIST";
                if (Main.SetZoom) {
                    j += " _ w=" + Player.Pw + "% _ h=" + Player.Ph + "%";
                }
            }
            break;
        case 6:
            if (q == 0) {
                return Player.setSize(0, 0, i);
            } else {
                if (q / l < 1.35) {
                    return Player.setSize(parseInt(API.a_size1), 0, i);
                } else {
                    if (q / l < 1.79) {
                        return Player.setSize(parseInt(API.a_size2), 0, i);
                    } else {
                        return Player.setSize(parseInt(API.a_size3), 0, i);
                    }
                }
            }
            break;
        case 7:
            if (q / l >= 1.79) {
                j = "ORIGINAL ZOOM 1";
                R = 960 * l / (q * 0.85);
                G = (540 - R) / 2;
                D = 0.075 * q;
                s = 0.85 * q;
            } else {
                j = "16x9 ZOOM 1";
                D = 0.0625 * q;
                u = 0.0625 * l;
                s = 0.875 * q;
                y = 0.875 * l;
            }
            break;
        case 8:
            if (q / l >= 1.79) {
                j = "ORIGINAL ZOOM 2";
                R = 960 * l / (q * 0.75);
                G = (540 - R) / 2;
                D = 0.125 * q;
                s = 0.75 * q;
            } else {
                j = "16x9 ZOOM 2";
                D = 0.125 * q;
                u = 0.125 * l;
                s = 0.75 * q;
                y = 0.75 * l;
            }
            break;
        default:
            alert("Not specified");
            j = "Not specified!";
            break;
        };
        if ((o == 1 || (this.size == 6 && o == 0)) && i == 1) {
            Player.message = "<tr><table><tr><td><img src=\"img/buttons/blue_m.png\"></img></td><td>- " + j + "</td></tr></table></tr>" + Player.message;
        } else {
            if ((o > 0 || (this.size == 6 && o == 0 && i == 0))) {
                Display.status(j);
            }
        }
		this.SefPlugin.Execute("SetDisplayArea", z, G, E, R);
		this.SefPlugin.Execute("SetCropArea", D, u, s, y);
    }
};

Player.OnCurrentPlayTime = function (i) {
    if (this.total_time > 0) {
        this.cur_time = parseInt(i, 10);
        TimeInfo(this.cur_time, this.total_time);
        this.delta_time = this.total_time - this.cur_time;
        Player.TestTime();
    }
};

Player.TestTime = function () {
    if (this.delta_time == 0 && this.total_time != 0 && this.cur_time != 0) {
        if (this.repeat && this.next) {
            Player.play(this.url);
        } else {
            if (this.next) {
                Main.block_info = true;
                Main.selectNextChannel();
                setTimeout(function(){ Main.PlayChannel(); }, 20);
            } else {
                Player.ReturnMenu();
            }
        }
    } else {
        if (this.delta_time == 0) {
            Player.ReturnMenu();
            Display.status("Connection failed!", 500);
        }
    }
};

Player.SEFPlay = function (i, o) {
    this.SefPlugin.Open("Player", "1.000", "Player");
    this.SefPlugin.Execute("InitPlayer", i);
    this.SefPlugin.OnEvent = Player.SefOnEvent;
    if (Player.get3DMode() != 0) {
        if (Main.buffer > 10) {
            Main.buffer = 10;
        }
        this.SefPlugin.Execute("SetPlayerProperty", "2", "3", Player.get3DMode());
    } else {
        if (this.url.indexOf(".mp3") > 0) {
            if (Main.buffer > 0.5) {
                Main.buffer = 0.5;
            }
            this.SefPlugin.Execute("SetPlayerProperty", "5", "0", "0");
        }
    }
    Player.SetBuffer();
    Player.setSize(0, 0, 1);
    this.SefPlugin.Execute("StartPlayback", o);
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
		if (this.tnum < 2) {
			Display.status("Only one sound track!", 500);
		} else {
			var i = this.SefPlugin.Execute("GetCurrentStreamID", 1);
			if (i >= 0) {
				i++;
				if (i > (this.tnum - 1)) {
					i = 0;
				}
				Player.SetAudioStream(i, 1);
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
        p = (p == null) ? 'Unknown (' + i + ')' : p;
        if (o > 0) {
            Display.status(p.toString() + ' audio track \u2116' + (q + 1).toString());
        } else {
            Player.message += "<tr><td>" + p.toString() + " audio track \u2116" + (q + 1).toString() + "</td></tr>";
        }
    } else {
        Player.message += "<tr><td>Wrong \u2116 of audio track!</td></tr>";
    }
};

Player.GetAudioNum = function () {
	try {
		this.tnum = this.SefPlugin.Execute("GetTotalNumOfStreamID", 1);
	} catch (a) {
		this.tnum = 0;
	}
	if (this.tnum > 1) {
		if (Main.a_num != "") {
			Player.SetAudioStream((parseInt(Main.a_num) - 1), 0);
		} else {
			if (Main.hardware_type == 2) {
				Player.message += "<tr><table><tr><td><img src=\"img/buttons/green_m.png\"></img></td><td> - Change audio track</td></tr></table></tr>";
			} else {
				Player.message += "<tr><td><img src=\"img/buttons/green_m.png\"></img> or \"AD/SUBT\" - Change audio track</td></tr>";
			}
		}
	}
};

ime_callback = function () {};

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

/**
 * Set the element with the specified id display style to 'block'
 * @param {string} i The element id
 * @return {Object}
 */
function getIdAndShow(i) {
    try {
        return getId(i).style.display = "block";
    } catch (b) {
        return "";
    }
}

/**
 * Set the element with the specified id display style to 'none'
 * @param {string} i The element id
 * @return {Object}
 */
function getIdAndHide(i) {
    try {
        return getId(i).style.display = "none";
    } catch (b) {
        return "";
    }
}

/**
 * Get the element with the specified id
 * @param {string} i The element id
 * @return {Object} The document element
 */
function getId(i) {
    try {
        return document.getElementById(i);
    } catch (b) {
        return "";
    }
}

/**
 * Get API channel (filled by API.getChannel_list)
 * @param {number} i Channel info number (0 - name, 1 - url, 2 - logo, 3 - channelCode, 4 - ?, 5 - ? , 6 - channelAspectRatio, 7 - channelAudioTrack, 8 - channelCache, 9 - '', 10 - channelTimeShift, ...)
 * @return
 */
function GetChannelInfo(i) {
    try {
        return API.channels[Main.chan_array_index][i];
    } catch (b) {
        return "";
    }
}

/**
 * Remove '|' symbol from string
 * @param {string} o
 * @return {string}
 */
function dI(o) {
    var i = (typeof o == "string" && o != "") ? o.replace(/\|/g, "") : "";
    return i;
}


/**
 * Remove '\n', '\r' and '\t' (newlines, tabs) from string
 * @param {string} o
 * @return {string}
 */
function deleteSpaces(o) {
    var i = (typeof o == "string" && o != "") ? o.replace(/[\n\r\t]/g, "") : "";
    return i;
}

/**
 * Remove whitespaces from string begin and end, then remove '\n', '\r' and '\t' (newlines, tabs)
 * @param {string} o
 * @return {string}
 */
function trimString(o) {
    var i = (typeof o == "string" && o != "") ? o.replace(/(^\s*)|(\s*)$/g, "").replace(/[\n\r\t]/g, "") : "";
    return i;
}

/**
 * Remove spaces
 */
function dPr(o, p) {
    var i = (typeof o == "string" && o != "") ? o.replace(/\s/g, "") : "";
    if (p == 1) {
        i = (!isNaN(i)) ? i : "";
    }
    return i;
}

function decodeURI(i) {
    for (var o = 0; i.indexOf("%") >= 0 && 10 > o; o++) {
        try {
            i = decodeURIComponent(i);
        } catch (c) {
            try {
                i = unescape(i);
            } catch (c) {
                break;
            }
        }
    }
    return i;
}

function GetChannelEgp(channelCode) {
	/*EgpCache[channelCode] = {
			programme:[
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo double line double line double line", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551292598, stop:"00:10", stop_unix:1561292598
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				},
				{
					title:"LRT radijo \u017einios", start:"00:00", start_unix:1551218400, stop:"00:10", stop_unix:1551219000
				}
			]
	};*/
	if (EgpCache[channelCode] == null)
	{
		var now = new Date();
		var day = now.getDate();
		var month = now.getMonth() + 1;
		var year = now.getFullYear();
		var egpDate = (day > 9 ? day : ('0' + day)) + '-' + (month > 9 ? month : ('0' + month)) + '-' + year;
		var url = 'https://www.tv24.lt/programme/listing/none/' + egpDate + '?filter=channel&subslug=' + channelCode;
		//alert('EGP url: ' + url);
		Main.showinfoList("Loading EPG...");
		YaAbort();
		Main.Ya_ready_timeout = setTimeout(function() { Err(); }, 3000);
		Main.YaHTTP = new XMLHttpRequest();
		Main.YaHTTP.onreadystatechange = function () {
			if (Main.YaHTTP.readyState == 4 && Main.YaHTTP.status == 200) {
				clearTimeout(Main.Ya_ready_timeout);
				var responseText = Main.YaHTTP.responseText;
				if (!Main.guide) {
					alert('EGP (' + channelCode + ') from web');
					var egp = JSON.parse(responseText);
					EgpCache[channelCode] = egp.schedule;
					ShowEgp(EgpCache[channelCode]);
				}
			}
		}
		Main.YaHTTP.open("GET", url, true);
		Main.YaHTTP.setRequestHeader("User-Agent", "Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51");
		Main.YaHTTP.send(null);
	} else {
		//alert('EGP (' + channelCode + ') from cache');
		ShowEgp(EgpCache[channelCode]);
	}
}

function ShowEgp(schedule) {
	Egp.length = schedule.programme.length;
	
	var egpList = '<ul id="egp-ul">';
	for (var index = 0; index < schedule.programme.length; index++)
	{
		var program = schedule.programme[index];
		var nowTime = new Date().getTime();
		var startTime = program.start_unix * 1000;
		var stopTime = program.stop_unix * 1000;
		
		var currentProgram = false;
		if (startTime <= nowTime && nowTime <= stopTime)
		{
			currentProgram = true;
		}
		
		var color = currentProgram ? '#ffcc00' : '#cccccc';
		
		egpList += '<li id="egp-' + index + '"';
		if (currentProgram) {
			egpList += ' class="current-program"';
		}
		egpList += '>';

		egpList += '<font style="color:#00ccff;">' + program.start + '</font>';
		egpList += '<font style="color:' + color + ';"> ' + program.title;
		if (program.movie_id && (program.title_original || program.year || program.country))
		{
			egpList += ' (';
			egpList += [program.title_original, program.year, program.country].filter(Boolean).join(', ');
			egpList += ')';
		}
		else if (program.season || program.ep_nr)
		{
			egpList += ' (';
			egpList += [program.season, program.ep_nr].filter(Boolean).join(', ');
			egpList += ')';
		}
		egpList += '</font>';
		egpList += '</li>';
	}
	
	egpList += "</ul>";
	Main.showinfoList(egpList);
	ScrollEgpToCurrentProgram();
}

function AlertInfo() {
	alert('Egp.length:' + Egp.length + ', Egp.topId:' + Egp.topId);
}

function ScrollEgpToCurrentProgram() {
	var elCurrentProgram = document.getElementsByClassName('current-program');
	if (elCurrentProgram.length > 0)
	{
		Egp.topId = parseInt(elCurrentProgram[0].id.replace('egp-', ''));
		Main.scrolling = elCurrentProgram[0].offsetTop;
		var elEgp = document.getElementById('allInfo');
		elEgp.style.margin = '-' + Main.scrolling + 'px 0px 0px 0px';
		
		var cursorPos = Math.abs(Egp.scrollTop + (Egp.scrollHeight*(Egp.topId/(Egp.length-1))));
		document.getElementById('scroll_cursor').style.top = cursorPos + 'px';
	} else {
		document.getElementById('scroll_cursor').style.top = Egp.scrollTop + 'px';
	}
}

function scrollUp() {
	if (Egp.length - 1 <= Egp.topId)
	{
		return;
	}
	Egp.topId = Egp.topId + 1;
	var elEgpProgram = document.getElementById('egp-' + Egp.topId);
	Scrol(elEgpProgram.offsetTop);
	
	var cursorPos = Math.abs(Egp.scrollTop + (Egp.scrollHeight*(Egp.topId/(Egp.length-1))));
	document.getElementById('scroll_cursor').style.top = cursorPos + 'px';
}

function scrollDown() {
	if (Egp.topId <= 0)
	{
		return;
	}
	
	Egp.topId = Egp.topId - 1;
	var elEgpProgram = document.getElementById('egp-' + Egp.topId);
	Scrol(elEgpProgram.offsetTop);
	
	var cursorPos = Math.abs(Egp.scrollTop + (Egp.scrollHeight*(Egp.topId/(Egp.length-1))));
	document.getElementById('scroll_cursor').style.top = cursorPos + 'px';
}

// Scrolling egp (channel info)
Scrol = function (i) {
    Main.scrolling = -i;
    if (Main.scrolling === 0 || Main.scrolling < 0) {
        getId('allInfo').style.margin = Main.scrolling + "px 0px 0px 0px ";
    } else {
        Main.scrolling = 0;
    }
};

function YaAbort() {
    clearTimeout(Main.Ya_ready_timeout);
    if (Main.YaHTTP != null) {
        Main.YaHTTP.abort();
        Main.YaHTTP = null;
    }
}

function Err() {
    YaAbort();
    Main.yandextv_mode = false;
    Main.showinfoList("Nothing Found!");
}

function addZero(u) {
    if (u < 10) {
        u = "0" + u;
    }
    return u;
}

var Ya_name_index_obj = {};
var Ya_icon_index_url_obj = {};
var Ya_icon_name_url_obj = {};

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
                    bJ += bG + bz + bF + "  " + bB + bC;
                }
            }
        }
        widgetAPI.putInnerHTML(getId("epg_info"), bJ);
        Display.showplayer();
    }
};

GetNextEpgInfo = function () {
    if (Main.ya_epg_info_arr.length > 0) {
        if (Main.epg_info_step == 1 && Main.temp_epg_info == "") {
            Main.temp_epg_info = getId("epg_info").innerHTML;
        }
        if (Main.epg_info_step > 0 && Main.epg_info_step <= Main.ya_epg_info_arr.length) {
            var i = Main.ya_epg_info_arr[Main.epg_info_step - 1].split("|");
            var q = i[0];
            var p = i[1];
            if (dPr(q) != "" && dPr(p) != "") {
                var o = q + "<font style='color:#00ccff;font-weight:bolder;padding-left:10px;'>" + p + "</font>";
            }
        } else {
            if (Main.temp_epg_info != "") {
                o = Main.temp_epg_info;
                Main.temp_epg_info = "";
            }
        }
        widgetAPI.putInnerHTML(getId("epg_info"), o);
        if (Main.epg_info_step > 0) {
            Display.showplayer();
        }
    }
};

function GetHash(p, o, l) {
    var i = "";
    if (l != "") {
        var j = decLongUrl(API.Request(p + "action=get_test_url&s_key=" + l + "&url=" + o));
    } else {
        j = p;
    }
    j = j.split("|");
    if (j[0] != "") {
        var q = API.Request(j[0]);
        q = parser(q, j[1], j[2]);
        alert("hash =" + q);
        if (l != "") {
            i = API.Request(p + "action=get_result_url_hash&s_key=" + l + "&hash=" + q + "&url=" + o);
        } else {
            i = o.replace("md5hash", q);
        }
    } else {
        i = o;
    }
    return i;
}

function parser(j, p, o) {
    var i = "";
    if (dPr(j) != "" && p != undefined) {
        var q = j.indexOf(p);
        if (q >= 0) {
            j = j.substr(q + p.length);
            if (o == undefined) {
                return j;
            }
            q = j.indexOf(o);
            if (q >= 0) {
                i = j.substr(0, q);
            }
        }
    }
    return i;
}

function decLongUrl(i) {
    if (dPr(i) != "" && i.indexOf("%") >= 0) {
        while (i.indexOf("%") >= 0) {
            i = decodeURIComponent(i);
        }
    }
    return i;
}

function showScroll() {
    var ce = document.getElementById("scroll");
    var cd = document.getElementById("scroll_cursor");
    var cc = document.getElementById("scroll_line");
    ce.style.visibility = "visible";
    cc.style.visibility = "visible";
    cd.style.visibility = "visible";
}

function hideScroll() {
    var ce = document.getElementById("scroll");
    var cd = document.getElementById("scroll_cursor");
    var cc = document.getElementById("scroll_line");
    cd.style.visibility = "hidden";
    ce.style.visibility = "hidden";
    cc.style.visibility = "hidden";
}

function showWeather() {
    var elTime = document.getElementById("widget_time");
    elTime.style.visibility = "visible";
}

function hideWeather() {
    var elTemp = document.getElementById('temp');
    elTemp.style.visibility = 'hidden';
    var elTime = document.getElementById('widget_time');
    elTime.style.visibility = 'hidden';
}

function showTemp() {
	var temperatureUrl = 'http://www.meteo.lt/lt/miestas?placeCode=Vilnius';
    xmlHttp1 = new XMLHttpRequest();
    xmlHttp1.onreadystatechange = ProcessTemperatureResponse;
    xmlHttp1.open("GET", temperatureUrl, true);
    xmlHttp1.send(null);
}

function hideTemp() {
    var cf = document.getElementById('temp');
    cf.style.visibility = 'hidden';
}

/**
 * Processing temperature response
 * @return {string} response text
 */
function ProcessTemperatureResponse() {
    if (xmlHttp1.readyState == 4 && xmlHttp1.status == 200) {	
		var html = xmlHttp1.responseText.replace(/(\r\n|\n|\r)/gm, '');
		
		var htmlWeatherPattern = /<div class="weather_info type_1">(.+?)<div class="tab_block big">/;
		var htmlWeather = html.match(htmlWeatherPattern)[1].trim();
		
		var htmlLeftPattern = /<div class="left">(.+?)<\/div>/;
		var htmlLeft = html.match(htmlLeftPattern)[1].trim();

		var htmlRightPattern = /<div class="right">(.+?)<\/div>/;
		var htmlRight = html.match(htmlRightPattern)[1].trim();

		var cityPattern = /<p class="large">(.+?)</;
		var city = htmlLeft.match(cityPattern)[1].trim();
		//alert('city: ' + city);

		var tempPattern = /temperature">(.+?)</;
		var temp = htmlLeft.match(tempPattern)[1] + '&deg;C';
		//alert('temp: ' + temp);

		var conditionPattern = /<p class="large">(.+?)</;
		var condition = htmlRight.match(conditionPattern)[1];
		//alert('condition: ' + condition);

		var feelLikePattern = /feelLike">(.+?)</;
		var feelLike = htmlRight.match(feelLikePattern)[1] + '&deg;C';;
		//alert('feelLike: ' + feelLike);
		
		var elTemp = document.getElementById('temp');
		elTemp.innerHTML = '<p><b style="color:#FFFFFF;font-size:14px;">' + city + '</b> ' + temp + ' (' + feelLike + ')</p>';
		elTemp.style.visibility = "visible";
    }
}
