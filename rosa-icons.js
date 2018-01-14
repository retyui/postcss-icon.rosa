module.exports = {
	type: "css",
	styles: new Map([
		[
			"hamburger",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 5px; position: relative; width: 30px; height: 2px; background-color: rgb(255, 255, 255); }",
				'.extend::after, .extend::before { content: ""; position: absolute; left: 0px; width: 30px; height: 2px; background-color: rgb(255, 255, 255); }',
				".extend::before { top: 10px; }",
				".extend::after { top: 20px; }"
			]
		],
		[
			"tick",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 2px; height: 30px; background-color: rgb(255, 255, 255); transform: rotate(35deg); }",
				'.extend::after { content: ""; position: absolute; bottom: 5.5px; left: -13px; width: 2px; height: 15px; background-color: rgb(255, 255, 255); transform: rotate(115deg); transform-origin: center bottom 0px; }'
			]
		],
		[
			"cross",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 2px; height: 30px; background-color: rgb(255, 255, 255); transform: rotate(45deg); transform-origin: center center 0px; }",
				'.extend::after { content: ""; position: absolute; width: 2px; height: 30px; background-color: rgb(255, 255, 255); transform: rotate(90deg); transform-origin: center center 0px; }'
			]
		],
		[
			"plus",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 2px; height: 30px; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; width: 2px; height: 30px; background-color: rgb(255, 255, 255); transform: rotate(90deg); transform-origin: center center 0px; }'
			]
		],
		[
			"up",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 2px; height: 30px; background-color: rgb(255, 255, 255); transform: rotate(45deg); }",
				'.extend::after { content: ""; position: absolute; right: -14px; top: -14px; width: 2px; height: 30px; background-color: rgb(255, 255, 255); transform: rotate(90deg); }'
			]
		],
		[
			"down",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 2px; height: 30px; background-color: rgb(255, 255, 255); transform: rotate(225deg); }",
				'.extend::after { content: ""; position: absolute; right: -14px; top: -14px; width: 2px; height: 30px; background-color: rgb(255, 255, 255); transform: rotate(90deg); }'
			]
		],
		[
			"map",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 25px; height: 25px; border-radius: 50%; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; bottom: -12px; left: 2px; width: 0px; height: 0px; border-top: 20px solid rgb(255, 255, 255); border-left: 10px solid transparent; border-right: 10px solid transparent; }',
				'.extend::before { content: ""; position: absolute; width: 7px; height: 7px; background-color: rgb(44, 62, 80); top: 9px; left: 9px; border-radius: 100%; z-index: 100; }'
			]
		],
		[
			"magnify",
			[
				".extend { margin: 0px auto; }",
				".extend { width: 20px; height: 20px; border: 2px solid rgb(255, 255, 255); border-radius: 100%; position: relative; transform: rotate(-25deg); }",
				'.extend::after { content: ""; position: absolute; left: 9px; bottom: -16px; width: 2px; height: 16px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"magnifyplus",
			[
				".extend { margin: 0px auto; }",
				".extend { width: 20px; height: 20px; border: 2px solid rgb(255, 255, 255); border-radius: 100%; position: relative; transform: rotate(-25deg); }",
				'.extend::after { content: ""; position: absolute; left: 9px; bottom: -16px; width: 2px; height: 16px; background-color: rgb(255, 255, 255); }',
				'.extend::before { content: "+"; line-height: 24px; font-size: 15px; font-family: sans-serif; position: absolute; color: rgb(255, 255, 255); font-weight: bold; left: 5.5px; top: -1px; transform: rotate(25deg); }'
			]
		],
		[
			"magnifyminus",
			[
				".extend { margin: 0px auto; }",
				".extend { width: 20px; height: 20px; border: 2px solid rgb(255, 255, 255); border-radius: 100%; position: relative; transform: rotate(-25deg); }",
				'.extend::after { content: ""; position: absolute; left: 9px; bottom: -16px; width: 2px; height: 16px; background-color: rgb(255, 255, 255); }',
				'.extend::before { content: "-";  line-height: 24px; font-size: 15px; font-family: sans-serif; position: absolute; color: rgb(255, 255, 255); font-weight: bold; left: 8px; top: -2px; transform: rotate(25deg); }'
			]
		],
		[
			"eye",
			[
				".extend { margin: 0px auto; }",
				".extend { width: 30px; height: 30px; border: 2px solid rgb(255, 255, 255); border-radius: 75% 15%; transform: rotate(45deg); }",
				'.extend::before { content: ""; position: absolute; left: 8.5px; top: 8.5px; width: 13px; height: 13px; background-color: rgb(255, 255, 255); border-radius: 100%; }'
			]
		],
		[
			"stop",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 30px; height: 30px; border: 2px solid rgb(255, 255, 255); border-radius: 100%; }",
				'.extend::before { content: ""; position: absolute; left: 0px; top: 14px; width: 30px; height: 2px; background-color: rgb(255, 255, 255); transform: rotate(45deg); }'
			]
		],
		[
			"power",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 30px; height: 30px; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255) rgb(255, 255, 255); border-image: initial; border-radius: 100%; }",
				'.extend::before { content: ""; position: absolute; top: -2px; left: 14px; width: 2px; height: 14px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"clock",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 30px; height: 30px; border: 2px solid rgb(255, 255, 255); border-radius: 100%; }",
				'.extend::before { content: ""; position: absolute; top: 5px; left: 14px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; top: 15px; left: 14px; width: 10px; height: 2px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"tree",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-bottom: 20px solid rgb(255, 255, 255); border-left: 15px solid transparent; border-right: 15px solid transparent; }",
				'.extend::after { content: ""; position: absolute; left: -15px; bottom: -30px; width: 0px; height: 0px; border-bottom: 20px solid rgb(255, 255, 255); border-left: 15px solid transparent; border-right: 15px solid transparent; }',
				'.extend::before { content: ""; position: absolute; left: -2.5px; bottom: -38px; width: 5px; height: 8px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"battery",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 10px; position: relative; width: 30px; height: 15px; border: 2px solid rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; top: 2.5px; left: 2.5px; width: 18px; height: 9px; background-color: rgb(255, 255, 255); }',
				'.extend::before { content: ""; position: absolute; top: 2.5px; right: -5px; width: 5px; height: 10px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"bin",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 20px; height: 30px; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255) rgb(255, 255, 255); border-image: initial; }",
				'.extend::after { content: ""; position: absolute; width: 30px; height: 2px; top: -4px; left: -5px; background-color: rgb(255, 255, 255); }',
				'.extend::before { content: ""; position: absolute; top: -6px; left: 6px; width: 8px; height: 3px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"house",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 30px; height: 30px; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; top: -12px; left: 0px; width: 0px; height: 0px; border-bottom: 12px solid rgb(255, 255, 255); border-left: 15px solid transparent; border-right: 15px solid transparent; }',
				'.extend::before { content: ""; position: absolute; width: 8px; height: 12px; background-color: rgb(44, 62, 80); bottom: 0px; left: 11px; }'
			]
		],
		[
			"message",
			[
				".extend { margin: 0px auto; }",
				".extend { width: 35px; height: 25px; background-color: rgb(255, 255, 255); border-radius: 8px; position: relative; }",
				'.extend::after { content: ""; position: absolute; bottom: -8px; right: 8px; width: 0px; height: 0px; border-top: 8px solid rgb(255, 255, 255); border-left: 5px solid transparent; border-right: 8px solid transparent; }'
			]
		],
		[
			"pin",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 18px; height: 25px; background-color: rgb(255, 255, 255); }",
				'.extend::before { content: ""; position: absolute; bottom: 0px; left: -5px; width: 28px; height: 2px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; bottom: -10px; left: 8px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"crop",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 25px; height: 25px; border-width: 2px; border-style: solid; border-color: transparent transparent rgb(255, 255, 255) rgb(255, 255, 255); border-image: initial; }",
				'.extend::before { content: ""; position: absolute; top: 5px; right: 5px; width: 25px; height: 25px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) transparent transparent; border-image: initial; }',
				'.extend::after { content: ""; position: absolute; bottom: 12.5px; left: -5px; width: 35px; height: 2px; background-color: rgb(255, 255, 255); transform: rotate(-45deg); transform-origin: center center 0px; }'
			]
		],
		[
			"user",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 10px; position: relative; width: 25px; height: 14px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) transparent; border-image: initial; border-radius: 100% 100% 0px 0px; }",
				'.extend::before { content: ""; position: absolute; top: -14px; left: 5.5px; width: 10px; height: 10px; border: 2px solid rgb(255, 255, 255); border-radius: 100%; }'
			]
		],
		[
			"pie",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-radius: 100%; border-width: 15px; border-style: solid; border-color: rgb(255, 255, 255) transparent rgb(255, 255, 255) rgb(255, 255, 255); transform: rotate(-45deg); }",
				'.extend::after { content: ""; position: absolute; top: -15px; left: -12px; width: 0px; height: 0px; border-radius: 100%; border-width: 15px; border-style: solid; border-color: transparent rgb(255, 255, 255) transparent transparent; }'
			]
		],
		[
			"refresh",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 30px; height: 30px; border-radius: 100%; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) transparent; border-image: initial; transform: rotate(30deg); }",
				'.extend::after { content: ""; position: absolute; bottom: -6px; width: 0px; height: 0px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-right: 8px solid rgb(255, 255, 255); transform: rotate(10deg); }'
			]
		],
		[
			"file",
			[
				".extend { margin: 0px auto; }",
				".extend { width: 20px; height: 28px; border: 2px solid rgb(255, 255, 255); position: relative; border-top-right-radius: 10px; }",
				'.extend::after { content: ""; position: absolute; top: 0px; right: -1px; width: 0px; height: 0px; border-left: 6px solid rgb(255, 255, 255); border-top: 6px solid transparent; border-bottom: 0px solid transparent; }'
			]
		],
		[
			"folder",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 10px; width: 28px; height: 18px; border: 2px solid rgb(255, 255, 255); position: relative; }",
				'.extend::after { content: ""; position: absolute; top: -6px; left: -2px; width: 10px; height: 2px; border: 2px solid rgb(255, 255, 255); }'
			]
		],
		[
			"chart",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 32px; height: 28px; border-width: 2px; border-style: solid; border-color: transparent transparent rgb(255, 255, 255) rgb(255, 255, 255); border-image: initial; }",
				'.extend::after { content: ""; position: absolute; bottom: 1px; left: 0px; width: 0px; height: 0px; border-bottom: 13px solid rgb(255, 255, 255); border-left: 10px solid transparent; border-right: 10px solid transparent; }',
				'.extend::before { content: ""; position: absolute; bottom: 1px; left: 9px; width: 0px; height: 0px; border-bottom: 20px solid rgb(255, 255, 255); border-left: 12px solid transparent; border-right: 10px solid transparent; }'
			]
		],
		[
			"barchart",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 32px; height: 28px; border-width: 2px; border-style: solid; border-color: transparent transparent rgb(255, 255, 255) rgb(255, 255, 255); border-image: initial; }",
				'.extend::before { content: ""; position: absolute; bottom: 1px; left: 1px; width: 7px; height: 22px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; bottom: 1px; left: 9px; width: 7px; height: 15px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"cup",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 28px; height: 28px; background-color: rgb(255, 255, 255); border-radius: 0px 0px 5px 5px; }",
				'.extend::after { content: ""; position: absolute; bottom: -4px; left: -3px; width: 36px; height: 2px; background-color: rgb(255, 255, 255); }',
				'.extend::before { content: ""; position: absolute; top: 7px; right: -6px; width: 4px; height: 7px; border-radius: 0px 100% 100% 0px; border: 2px solid rgb(255, 255, 255); background-color: rgb(44, 62, 80); }'
			]
		],
		[
			"microphone",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 10px; height: 20px; background-color: rgb(255, 255, 255); border-radius: 20px; }",
				'.extend::after { content: ""; position: absolute; bottom: -6px; left: -12.5px; width: 30px; height: 30px; border-radius: 30px; border-width: 2px; border-style: solid; border-color: transparent transparent rgb(255, 255, 255); border-image: initial; }',
				'.extend::before { content: ""; position: absolute; bottom: -13.5px; left: 4px; width: 2px; height: 8px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"wifi",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 15px; position: relative; width: 8px; height: 8px; border-radius: 100%; background-color: rgb(255, 255, 255); transform: rotate(-45deg); }",
				'.extend::after { content: ""; position: absolute; left: -13px; top: -9px; width: 22px; height: 22px; border-radius: 100%; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255) transparent transparent; border-image: initial; }',
				'.extend::before { content: ""; position: absolute; left: -18px; top: -14px; width: 32px; height: 32px; border-radius: 100%; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255) transparent transparent; border-image: initial; }'
			]
		],
		[
			"desktop",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 25px; height: 16px; border: 2px solid rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; width: 2px; height: 8px; background-color: rgb(255, 255, 255); bottom: -8px; left: 11.5px; }',
				'.extend::before { content: ""; position: absolute; width: 16px; height: 2px; background-color: rgb(255, 255, 255); bottom: -8px; left: 4.5px; }'
			]
		],
		[
			"phone",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 14px; height: 20px; border-style: solid; border-color: rgb(255, 255, 255); border-image: initial; border-width: 5px 2px; border-radius: 2px; }",
				'.extend::after { content: ""; position: absolute; width: 2px; height: 2px; background-color: rgb(255, 255, 255); border-radius: 100%; left: 6px; bottom: -3.5px; }'
			]
		],
		[
			"laptop",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 28px; height: 16px; border-style: solid; border-color: rgb(255, 255, 255); border-image: initial; border-width: 4px 2px; border-radius: 2px; }",
				'.extend::after { content: ""; position: absolute; left: -7px; bottom: -5px; width: 42px; height: 3px; background-color: rgb(255, 255, 255); border-radius: 0px 0px 3px 3px; }'
			]
		],
		[
			"speaker",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-top: 15px solid transparent; border-bottom: 15px solid transparent; border-right: 20px solid rgb(255, 255, 255); }",
				'.extend::before { content: ""; position: absolute; top: -7.5px; width: 10px; height: 15px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; top: -9.5px; right: -27px; width: 15px; height: 15px; border-radius: 100%; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255) transparent transparent; border-image: initial; }'
			]
		],
		[
			"speakermute",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-top: 15px solid transparent; border-bottom: 15px solid transparent; border-right: 20px solid rgb(255, 255, 255); }",
				'.extend::before { content: ""; position: absolute; top: -7.5px; width: 10px; height: 15px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: "x";  line-height: 24px; font-size: 15px; font-family: sans-serif; position: absolute; top: -14px; right: -31px; color: rgb(255, 255, 255); font-weight: bold; }'
			]
		],
		[
			"volumedown",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-top: 15px solid transparent; border-bottom: 15px solid transparent; border-right: 20px solid rgb(255, 255, 255); }",
				'.extend::before { content: ""; position: absolute; top: -7.5px; width: 10px; height: 15px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: "-"; position: absolute; top: -18px; right: -32px; color: rgb(255, 255, 255); font-weight: bold; font-size: 22px; }'
			]
		],
		[
			"volumeup",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-top: 15px solid transparent; border-bottom: 15px solid transparent; border-right: 20px solid rgb(255, 255, 255); }",
				'.extend::before { content: ""; position: absolute; top: -7.5px; width: 10px; height: 15px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: "+"; position: absolute; top: -11px; right: -31px; color: rgb(255, 255, 255); font-weight: bold; }'
			]
		],
		[
			"lock",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 2px; position: relative; width: 20px; height: 22px; border: 2px solid rgb(255, 255, 255); border-radius: 5px; }",
				'.extend::before { content: ""; position: absolute; top: -10px; left: 3px; width: 10px; height: 6px; border-radius: 100% 100% 0px 0px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) transparent; border-image: initial; }',
				'.extend::after { content: ""; position: absolute; width: 3px; height: 3px; border-radius: 100%; background-color: rgb(255, 255, 255); left: 8.5px; bottom: 6px; }'
			]
		],
		[
			"unlocked",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 2px; position: relative; width: 20px; height: 22px; border: 2px solid rgb(255, 255, 255); border-radius: 5px; }",
				'.extend::before { content: ""; position: absolute; top: -10px; right: 3px; width: 10px; height: 6px; border-radius: 100% 100% 0px 0px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) transparent transparent rgb(255, 255, 255); border-image: initial; }',
				'.extend::after { content: ""; position: absolute; width: 3px; height: 3px; border-radius: 100%; background-color: rgb(255, 255, 255); left: 8.5px; bottom: 6px; }'
			]
		],
		[
			"cloud",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 8px; position: relative; width: 35px; height: 20px; border-radius: 100% 100% 60% 70%; background-color: rgb(255, 255, 255); }",
				'.extend::before { content: ""; position: absolute; left: 4px; top: -4px; width: 12px; height: 8px; background-color: rgb(255, 255, 255); border-radius: 100% 100% 10% 10%; }',
				'.extend::after { content: ""; position: absolute; right: 6px; top: -7px; width: 18px; height: 16px; background-color: rgb(255, 255, 255); border-radius: 100%; }'
			]
		],
		[
			"rain",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 5px; position: relative; width: 25px; height: 25px; background-color: rgb(255, 255, 255); border-radius: 100%; }",
				'.extend::before { content: ""; position: absolute; top: -9px; left: 1.75px; width: 0px; height: 0px; border-bottom: 16px solid rgb(255, 255, 255); border-left: 11px solid transparent; border-right: 11px solid transparent; border-radius: 100%; }'
			]
		],
		[
			"alert",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: -4px; position: relative; width: 22px; height: 25px; border-radius: 100% 100% 0px 0px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) transparent; border-image: initial; }",
				'.extend::after { content: ""; position: absolute; bottom: -4px; left: -6px; width: 34px; height: 2px; background-color: rgb(255, 255, 255); }',
				'.extend::before { content: ""; position: absolute; bottom: -9px; left: 1.5px; width: 15px; height: 15px; border-radius: 100%; border-width: 2px; border-style: solid; border-color: transparent transparent rgb(255, 255, 255); border-image: initial; }'
			]
		],
		[
			"timer",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-top: 15px solid rgb(255, 255, 255); border-left: 15px solid transparent; border-right: 15px solid transparent; }",
				'.extend::after { content: ""; position: absolute; left: -15px; top: -3px; width: 0px; height: 0px; border-bottom: 15px solid rgb(255, 255, 255); border-left: 15px solid transparent; border-right: 15px solid transparent; }',
				'.extend::before { content: ""; position: absolute; left: -6px; top: 3px; width: 0px; height: 0px; border-bottom: 6px solid rgb(44, 62, 80); border-left: 6px solid transparent; border-right: 6px solid transparent; z-index: 400; }'
			]
		],
		[
			"pencil",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 8px; height: 23px; background-color: rgb(255, 255, 255); transform: rotate(-35deg); }",
				'.extend::before { content: ""; position: absolute; left: 0px; bottom: -6px; width: 0px; height: 0px; border-top: 6px solid rgb(255, 255, 255); border-left: 4px solid transparent; border-right: 4px solid transparent; }',
				'.extend::after { content: ""; position: absolute; left: 0px; top: -6px; width: 8px; height: 4px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"calendar",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 28px; height: 18px; border-width: 5px 2px 2px; border-style: solid; border-color: rgb(255, 255, 255); border-image: initial; }",
				'.extend::before { content: ""; position: absolute; top: -9px; left: 3px; width: 18px; height: 8px; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255); border-image: initial; }'
			]
		],
		[
			"calendarnumber",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 28px; height: 18px; border-width: 5px 2px 2px; border-style: solid; border-color: rgb(255, 255, 255); border-image: initial; }",
				'.extend::before { content: ""; position: absolute; top: -9px; left: 3px; width: 18px; height: 8px; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255); border-image: initial; }',
				'.extend::after { content: "23"; position: absolute; top: 1px; left: 7.5px; color: rgb(255, 255, 255); font-weight: bold; font-size: 11px; }'
			]
		],
		[
			"tag",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 12px; height: 25px; background-color: rgb(255, 255, 255); transform: rotate(-30deg); }",
				'.extend::after { content: ""; position: absolute; top: -6px; left: 0px; width: 0px; height: 0px; border-bottom: 6px solid rgb(255, 255, 255); border-left: 6px solid transparent; border-right: 6px solid transparent; }',
				'.extend::before { content: ""; position: absolute; top: -1px; left: 4.5px; width: 3px; height: 3px; background-color: rgb(44, 62, 80); border-radius: 100%; z-index: 500; }'
			]
		],
		[
			"playvideo",
			[
				".extend { margin: 0px auto; }",
				".extend { width: 0px; height: 0px; border-left: 25px solid rgb(255, 255, 255); border-top: 15px solid transparent; border-bottom: 15px solid transparent; }"
			]
		],
		[
			"stopvideo",
			[
				".extend { margin: 0px auto; }",
				".extend { width: 26px; height: 26px; background-color: rgb(255, 255, 255); }"
			]
		],
		[
			"pausevideo",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 10px; height: 25px; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; top: 0px; left: 15px; width: 10px; height: 25px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"backvideo",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-right: 15px solid rgb(255, 255, 255); border-top: 15px solid transparent; border-bottom: 15px solid transparent; }",
				'.extend::after { content: ""; position: absolute; left: -15px; top: -15px; width: 0px; height: 0px; border-right: 15px solid rgb(255, 255, 255); border-top: 15px solid transparent; border-bottom: 15px solid transparent; }'
			]
		],
		[
			"forwardvideo",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-left: 15px solid rgb(255, 255, 255); border-top: 15px solid transparent; border-bottom: 15px solid transparent; }",
				'.extend::after { content: ""; position: absolute; left: -30px; top: -15px; width: 0px; height: 0px; border-left: 15px solid rgb(255, 255, 255); border-top: 15px solid transparent; border-bottom: 15px solid transparent; }'
			]
		],
		[
			"cursor",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 5px; position: relative; width: 0px; height: 0px; border-bottom: 15px solid rgb(255, 255, 255); border-left: 10px solid transparent; border-right: 10px solid transparent; transform: rotate(-30deg); }",
				'.extend::after { content: ""; position: absolute; left: -1.5px; top: 15px; width: 3px; height: 10px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"camera",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 35px; height: 25px; background-color: rgb(255, 255, 255); border-radius: 5px; }",
				'.extend::before { content: ""; position: absolute; top: -2px; left: 5px; width: 8px; height: 2px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; left: 12.5px; top: 7.5px; width: 10px; height: 10px; border-radius: 100%; background-color: rgb(44, 62, 80); }'
			]
		],
		[
			"envelope",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 35px; height: 25px; background-color: rgb(255, 255, 255); border-radius: 5px; }",
				'.extend::after { content: ""; position: absolute; top: 0px; left: 0px; width: 0px; height: 0px; border-top: 17.5px solid rgb(170, 170, 170); border-left: 17.5px solid transparent; border-right: 17.5px solid transparent; border-radius: 15%; }'
			]
		],
		[
			"envelopeoutline",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 31px; height: 21px; border: 2px solid rgb(255, 255, 255); border-radius: 5px; }",
				'.extend::before { content: ""; position: absolute; left: 0px; top: 0px; width: 2px; height: 21px; background-color: rgb(255, 255, 255); transform: rotate(-45deg); transform-origin: left top 0px; }',
				'.extend::after { content: ""; position: absolute; right: 0px; top: 0px; width: 2px; height: 21px; background-color: rgb(255, 255, 255); transform: rotate(45deg); transform-origin: left top 0px; }'
			]
		],
		[
			"clipboard",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 18px; height: 23px; border: 2px solid rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; top: -6px; left: 2px; width: 10px; height: 2px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) transparent; border-image: initial; border-radius: 5px 5px 0px 0px; }'
			]
		],
		[
			"download",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 10px; position: relative; width: 28px; height: 10px; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255) rgb(255, 255, 255); border-image: initial; }",
				'.extend::before { content: ""; position: absolute; top: -10px; left: 13px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; top: 0px; left: 9px; width: 0px; height: 0px; border-top: 5px solid rgb(255, 255, 255); border-left: 5px solid transparent; border-right: 5px solid transparent; }'
			]
		],
		[
			"upload",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 10px; position: relative; width: 28px; height: 10px; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255) rgb(255, 255, 255); border-image: initial; }",
				'.extend::before { content: ""; position: absolute; top: -5px; left: 13px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; top: -10px; left: 9px; width: 0px; height: 0px; border-bottom: 5px solid rgb(255, 255, 255); border-left: 5px solid transparent; border-right: 5px solid transparent; }'
			]
		],
		[
			"toggle",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 30px; height: 15px; border-radius: 10px; border: 2px solid rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; top: 4px; left: 4px; width: 7px; height: 7px; background-color: rgb(255, 255, 255); border-radius: 100%; }'
			]
		],
		[
			"browser",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 30px; height: 18px; border-width: 2px; border-style: solid; border-color: transparent rgb(255, 255, 255) rgb(255, 255, 255); border-image: initial; border-radius: 0px 0px 5px 5px; }",
				'.extend::after { content: ""; position: absolute; top: -10px; left: -2px; width: 30px; height: 6px; border: 2px solid rgb(255, 255, 255); border-radius: 5px 5px 0px 0px; }',
				'.extend::before { content: "..."; position: absolute; top: -21px; left: 1px; color: rgb(255, 255, 255); }'
			]
		],
		[
			"tennis",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: -8px; position: relative; width: 28px; height: 28px; border-radius: 100%; border: 2px solid rgb(255, 255, 255); overflow: hidden; }",
				'.extend::before { content: ""; position: absolute; top: -14px; left: -18px; width: 28px; height: 28px; border-radius: 100%; border: 2px solid rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; bottom: -14px; right: -18px; width: 28px; height: 28px; border-radius: 100%; border: 2px solid rgb(255, 255, 255); }'
			]
		],
		[
			"signalfull",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 6px; height: 15px; border: 2px solid rgb(255, 255, 255); background-color: rgb(255, 255, 255); }",
				'.extend::before { content: ""; position: absolute; bottom: -2px; left: -14px; width: 6px; height: 22px; border: 2px solid rgb(255, 255, 255); background-color: rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; bottom: -2px; left: 10px; width: 6px; height: 6px; border: 2px solid rgb(255, 255, 255); background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"signaltwo",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 6px; height: 15px; border: 2px solid rgb(255, 255, 255); background-color: rgb(255, 255, 255); }",
				'.extend::before { content: ""; position: absolute; bottom: -2px; left: -14px; width: 6px; height: 22px; border: 2px solid rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; bottom: -2px; left: 10px; width: 6px; height: 6px; border: 2px solid rgb(255, 255, 255); background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"signalone",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 6px; height: 15px; border: 2px solid rgb(255, 255, 255); }",
				'.extend::before { content: ""; position: absolute; bottom: -2px; left: -14px; width: 6px; height: 22px; border: 2px solid rgb(255, 255, 255); }',
				'.extend::after { content: ""; position: absolute; bottom: -2px; left: 10px; width: 6px; height: 6px; border: 2px solid rgb(255, 255, 255); background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"flagsquare",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 2px; height: 25px; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; top: 0px; left: 2px; width: 15px; height: 12px; background-color: rgb(255, 255, 255); }'
			]
		],
		[
			"flagtriangle",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 2px; height: 25px; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; top: 0px; left: 2px; width: 0px; height: 0px; border-left: 15px solid rgb(255, 255, 255); border-top: 6px solid transparent; border-bottom: 6px solid transparent; }'
			]
		],
		[
			"warning",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 0px; height: 0px; border-bottom: 25px solid rgb(255, 255, 255); border-left: 15px solid transparent; border-right: 15px solid transparent; }",
				'.extend::after { content: "!"; position: absolute; left: -2.5px; top: 1px; color: rgb(44, 62, 80); font-weight: bold; font-size: 20px; }'
			]
		],
		[
			"copy",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: -2px; position: relative; width: 20px; height: 20px; border: 2px solid rgb(255, 255, 255); border-radius: 2px; }",
				'.extend::after { content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border: 2px solid rgb(255, 255, 255); border-radius: 2px; }'
			]
		],
		[
			"uparrow",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 2px; height: 30px; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; top: 0px; left: 0px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); transform: rotate(45deg); transform-origin: left top 0px; }',
				'.extend::before { content: ""; position: absolute; top: 0px; left: 0px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); transform: rotate(-45deg); transform-origin: right top 0px; }'
			]
		],
		[
			"downarrow",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 2px; height: 30px; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; bottom: 0px; left: 0px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); transform: rotate(45deg); transform-origin: left bottom 0px; }',
				'.extend::before { content: ""; position: absolute; bottom: 0px; left: 0px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); transform: rotate(-45deg); transform-origin: right bottom 0px; }'
			]
		],
		[
			"leftarrow",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 5px; position: relative; width: 30px; height: 2px; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; bottom: 2px; left: 0px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); transform: rotate(45deg); transform-origin: left bottom 0px; }',
				'.extend::before { content: ""; position: absolute; top: 0.5px; left: 0px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); transform: rotate(-45deg); transform-origin: right top 0px; }'
			]
		],
		[
			"rightarrow",
			[
				".extend { margin: 0px auto; }",
				".extend { margin-top: 5px; position: relative; width: 30px; height: 2px; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; bottom: 1px; right: -0.5px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); transform: rotate(-45deg); transform-origin: left bottom 0px; }',
				'.extend::before { content: ""; position: absolute; top: 2px; right: 0px; width: 2px; height: 10px; background-color: rgb(255, 255, 255); transform: rotate(45deg); transform-origin: right top 0px; }'
			]
		],
		[
			"music",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 16px; height: 14px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) transparent; border-image: initial; transform: skew(-5deg); }",
				'.extend::after { content: ""; position: absolute; bottom: -3px; left: -10px; width: 10px; height: 6px; border-radius: 100%; background-color: rgb(255, 255, 255); transform: skew(5deg); }',
				'.extend::before { content: ""; position: absolute; bottom: -3px; right: -3px; width: 10px; height: 6px; border-radius: 100%; background-color: rgb(255, 255, 255); transform: skew(5deg); }'
			]
		],
		[
			"umberella",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 24px; height: 12px; background-color: rgb(255, 255, 255); border-radius: 100% 100% 20% 20%; }",
				'.extend::after { content: ""; position: absolute; bottom: -10px; left: 11px; width: 2px; height: 24px; background-color: rgb(255, 255, 255); }',
				'.extend::before { content: ""; position: absolute; bottom: -12px; right: 5px; width: 6px; height: 10px; border-radius: 100%; border-width: 2px; border-style: solid; border-color: transparent transparent rgb(255, 255, 255); border-image: initial; }'
			]
		],
		[
			"earphones",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 25px; height: 25px; border-radius: 100%; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) transparent; border-image: initial; }",
				'.extend::before { content: ""; position: absolute; left: 1px; bottom: 0px; width: 5px; height: 10px; background-color: rgb(255, 255, 255); border-radius: 5px; }',
				'.extend::after { content: ""; position: absolute; right: 1px; bottom: 0px; width: 5px; height: 10px; background-color: rgb(255, 255, 255); border-radius: 5px; }'
			]
		],
		[
			"lightbulb",
			[
				".extend { margin: 0px auto; }",
				".extend { position: relative; width: 20px; height: 20px; border-radius: 100%; background-color: rgb(255, 255, 255); }",
				'.extend::after { content: ""; position: absolute; left: 4px; bottom: -5px; width: 12px; height: 10px; background-color: rgb(255, 255, 255); }',
				'.extend::before { content: ""; position: absolute; left: 2px; bottom: -11px; width: 12px; height: 10px; border-radius: 100%; border-width: 2px; border-style: solid; border-color: transparent transparent rgb(255, 255, 255); border-image: initial; }'
			]
		]
	])
};
