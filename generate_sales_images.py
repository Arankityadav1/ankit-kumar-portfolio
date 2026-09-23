import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1600, 960

# Fonts
font_bold = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
font_reg = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
font_mono = "/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf"

def get_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()

def draw_round_rect(draw, bbox, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(bbox, radius=radius, fill=fill, outline=outline, width=width)

# ==========================================
# IMAGE 1: DASHBOARD OVERVIEW & KPIS
# ==========================================
def create_image_1():
    img = Image.new("RGB", (W, H), (11, 15, 25))
    draw = ImageDraw.Draw(img)

    # Top Header Bar
    draw.rectangle([0, 0, W, 75], fill=(15, 23, 42), outline=(30, 41, 59))
    
    # Gold Shield / Logo
    draw_round_rect(draw, [24, 14, 68, 58], 8, (217, 119, 6), (245, 158, 11), 2)
    f_logo = get_font(font_bold, 20)
    draw.text((32, 23), "38", font=f_logo, fill=(255, 255, 255))
    
    # Title & Subtitle
    f_title = get_font(font_bold, 20)
    f_sub = get_font(font_reg, 12)
    draw.text((80, 16), "38 BARRACKS RESTAURANT & BAR", font=f_title, fill=(241, 245, 249))
    draw.text((80, 42), "MULTI-SHOP COMMAND INTELLIGENCE SYSTEM", font=f_sub, fill=(148, 163, 184))

    # Period Pill
    draw_round_rect(draw, [470, 20, 820, 54], 17, (30, 41, 59), (51, 65, 85), 1)
    f_pill = get_font(font_bold, 12)
    draw.text((490, 28), "23 Apr 2026 - 02 Sep 2026 — FULL PERIOD", font=f_pill, fill=(226, 232, 240))

    # Right shop badges & sync
    draw_round_rect(draw, [1180, 22, 1260, 52], 6, (30, 58, 138), (59, 130, 246), 1)
    draw.text((1192, 29), "SHOP 2", font=get_font(font_bold, 12), fill=(147, 197, 253))

    draw_round_rect(draw, [1270, 22, 1350, 52], 6, (6, 78, 59), (16, 185, 129), 1)
    draw.text((1282, 29), "SHOP 3", font=get_font(font_bold, 12), fill=(110, 231, 183))

    draw_round_rect(draw, [1360, 22, 1440, 52], 6, (127, 29, 29), (239, 68, 68), 1)
    draw.text((1372, 29), "SHOP 4", font=get_font(font_bold, 12), fill=(252, 165, 165))

    # Live pulse dot
    draw.ellipse([1465, 33, 1475, 43], fill=(16, 185, 129))
    draw.text((1485, 29), "SYNC: LIVE", font=get_font(font_bold, 12), fill=(52, 211, 153))

    # Sub-header meta line
    draw.rectangle([0, 75, W, 105], fill=(13, 19, 33))
    f_meta = get_font(font_mono, 11)
    draw.text((24, 83), "PERIOD: 2026-04-23 — 2026-09-02 | 20 WEEKS TRACKED | • OPERATIONAL MIS | INTERNAL MANAGEMENT REPORT", font=f_meta, fill=(100, 116, 139))

    # Slicers & Filters Bar
    draw_round_rect(draw, [24, 118, W-24, 182], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((40, 130), "COMMAND FILTERS — INTERACTIVE SLICERS", font=get_font(font_bold, 11), fill=(203, 213, 225))
    
    # Dropdowns
    filters = [
        ("WEEK", "ALL WEEKS", 240, 145),
        ("SHOP", "ALL SHOPS", 420, 145),
        ("DAY TYPE", "ALL DAYS", 600, 145),
        ("FROM", "04/23/2026", 780, 145),
        ("TO", "09/02/2026", 960, 145)
    ]
    for lbl, val, x, y in filters:
        draw.text((x, y-16), lbl, font=get_font(font_bold, 9), fill=(100, 116, 139))
        draw_round_rect(draw, [x, y, x+160, y+28], 4, (30, 41, 59), (71, 85, 105), 1)
        draw.text((x+10, y+7), val, font=get_font(font_reg, 11), fill=(241, 245, 249))
        draw.polygon([(x+145, y+11), (x+153, y+11), (x+149, y+17)], fill=(148, 163, 184))

    # Reset button
    draw_round_rect(draw, [1140, 145, 1220, 173], 4, (30, 41, 59), (51, 65, 85), 1)
    draw.text((1152, 152), "↺ RESET", font=get_font(font_bold, 11), fill=(226, 232, 240))

    # 397 live records badge
    draw_round_rect(draw, [1235, 145, 1430, 173], 14, (6, 78, 59), (16, 185, 129), 1)
    draw.ellipse([1248, 155, 1256, 163], fill=(52, 211, 153))
    draw.text((1264, 152), "397 LIVE RECORDS • UPDATED", font=get_font(font_bold, 10), fill=(110, 231, 183))

    # Section Heading: COMMAND SUMMARY
    draw.text((24, 196), "COMMAND SUMMARY — KEY PERFORMANCE INDICATORS", font=get_font(font_bold, 14), fill=(226, 232, 240))

    # 10 KPI Cards (2 rows of 5 cards)
    row1_cards = [
        {
            "title": "TOTAL ACTUAL SALES",
            "val": "₹2,86,44,968",
            "val_color": (56, 189, 248),
            "sub": "3 Shop(s) • 397 Record(s)",
            "top_line": (56, 189, 248),
            "breakdown": [("S-02: ₹1,28,44,462", 44.8), ("S-03: ₹93,83,307", 32.8), ("S-04: ₹64,17,200", 22.4)]
        },
        {
            "title": "PLANNED SALES TARGET",
            "val": "₹3,59,01,571",
            "val_color": (251, 191, 36),
            "sub": "Combined Period Target",
            "badge": ("79.8% ACHIEVED", (217, 119, 6), (251, 191, 36)),
            "top_line": (251, 191, 36),
            "breakdown": [("S-02: ₹1,61,42,242", 45.0), ("S-03: ₹1,09,38,200", 30.5), ("S-04: ₹88,21,128", 24.5)]
        },
        {
            "title": "SALE VARIANCE VS TARGET",
            "val": "-₹72,56,603",
            "val_color": (248, 113, 113),
            "sub": "Variance: ₹-72,56,603",
            "badge": ("DEFICIT: 20.2%", (127, 29, 29), (248, 113, 113)),
            "top_line": (239, 68, 68),
            "breakdown": [("S-02: ₹-32,97,781", 45.4), ("S-03: ₹-15,54,894", 21.4), ("S-04: ₹-24,03,928", 33.2)]
        },
        {
            "title": "TOTAL PAX GUESTS",
            "val": "17,684",
            "val_color": (168, 85, 247),
            "sub": "All Shops • Avg 44.5/row",
            "top_line": (168, 85, 247),
            "breakdown": [("S-02: 7,905 (44.7%)", 44.7), ("S-03: 5,898 (33.4%)", 33.4), ("S-04: 3,881 (21.9%)", 21.9)]
        },
        {
            "title": "TOTAL TABLES / COVERS",
            "val": "6,465",
            "val_color": (52, 211, 153),
            "sub": "Avg 16.3/row",
            "top_line": (16, 185, 129),
            "breakdown": [("S-02: 3,055 (47.3%)", 47.3), ("S-03: 2,033 (31.4%)", 31.4), ("S-04: 1,377 (21.3%)", 21.3)]
        }
    ]

    card_w = 295
    card_gap = 19
    start_x = 24
    row1_y = 222
    card_h = 160

    for i, c in enumerate(row1_cards):
        cx = start_x + i * (card_w + card_gap)
        draw_round_rect(draw, [cx, row1_y, cx+card_w, row1_y+card_h], 8, (17, 24, 39), (31, 41, 55), 1)
        # top accent line
        draw.rectangle([cx+8, row1_y, cx+card_w-8, row1_y+3], fill=c["top_line"])
        
        # Title
        draw.text((cx+14, row1_y+14), c["title"], font=get_font(font_bold, 11), fill=(156, 163, 175))
        
        # Big Val
        draw.text((cx+14, row1_y+34), c["val"], font=get_font(font_bold, 24), fill=c["val_color"])

        # Subtext or Badge
        draw.text((cx+14, row1_y+68), c["sub"], font=get_font(font_reg, 10), fill=(107, 114, 128))
        if "badge" in c:
            b_text, b_bg, b_fg = c["badge"]
            draw_round_rect(draw, [cx+card_w-115, row1_y+12, cx+card_w-12, row1_y+32], 4, b_bg, b_fg, 1)
            draw.text((cx+card_w-107, row1_y+16), b_text, font=get_font(font_bold, 9), fill=b_fg)

        # Divider
        draw.line([cx+14, row1_y+86, cx+card_w-14, row1_y+86], fill=(31, 41, 55))

        # Breakdown list
        by = row1_y + 94
        for item, pct in c["breakdown"]:
            draw.text((cx+14, by), item, font=get_font(font_mono, 9), fill=(156, 163, 175))
            by += 18

    # ROW 2 OF KPIS
    row2_cards = [
        {
            "title": "AVG PER COVER APC (₹)",
            "val": "₹1,620",
            "val_color": (251, 146, 60),
            "sub": "Revenue per Guest",
            "top_line": (249, 115, 22),
            "breakdown": [("S-02: ₹1,625", 0), ("S-03: ₹1,591", 0), ("S-04: ₹1,653", 0)]
        },
        {
            "title": "GOOGLE REVIEWS",
            "val": "4,459",
            "val_color": (96, 165, 250),
            "sub": "Rate: 69.0% of total tables",
            "badge": ("RATE: 69.0%", (30, 58, 138), (96, 165, 250)),
            "top_line": (59, 130, 246),
            "breakdown": [("S-02: 1,958", 0), ("S-03: 1,440", 0), ("S-04: 1,061", 0)]
        },
        {
            "title": "ZOMATO REVIEWS",
            "val": "921",
            "val_color": (244, 63, 94),
            "sub": "Rate: 14.2% of total tables",
            "badge": ("RATE: 14.2%", (136, 19, 55), (251, 113, 133)),
            "top_line": (244, 63, 94),
            "breakdown": [("S-02: 387", 0), ("S-03: 265", 0), ("S-04: 269", 0)]
        },
        {
            "title": "COMMENT CARDS",
            "val": "3,706",
            "val_color": (167, 139, 250),
            "sub": "Rate: 21.0% of total pax",
            "badge": ("RATE: 21.0%", (76, 29, 149), (196, 181, 253)),
            "top_line": (139, 92, 246),
            "breakdown": [("S-02: 1,691", 0), ("S-03: 1,185", 0), ("S-04: 830", 0)]
        },
        {
            "title": "HOOKAH ACT / PLAN",
            "val": "712 / 940",
            "val_color": (45, 212, 191),
            "sub": "Loss: -228 units",
            "badge": ("75.7% ACH", (19, 78, 74), (45, 212, 191)),
            "top_line": (20, 184, 166),
            "breakdown": [("S-02: 323 / 357", 0), ("S-03: 227 / 291", 0), ("S-04: 162 / 292", 0)]
        }
    ]

    row2_y = 398
    for i, c in enumerate(row2_cards):
        cx = start_x + i * (card_w + card_gap)
        draw_round_rect(draw, [cx, row2_y, cx+card_w, row2_y+card_h], 8, (17, 24, 39), (31, 41, 55), 1)
        draw.rectangle([cx+8, row2_y, cx+card_w-8, row2_y+3], fill=c["top_line"])
        
        draw.text((cx+14, row2_y+14), c["title"], font=get_font(font_bold, 11), fill=(156, 163, 175))
        draw.text((cx+14, row2_y+34), c["val"], font=get_font(font_bold, 24), fill=c["val_color"])
        draw.text((cx+14, row2_y+68), c["sub"], font=get_font(font_reg, 10), fill=(107, 114, 128))

        if "badge" in c:
            b_text, b_bg, b_fg = c["badge"]
            draw_round_rect(draw, [cx+card_w-105, row2_y+12, cx+card_w-12, row2_y+32], 4, b_bg, b_fg, 1)
            draw.text((cx+card_w-97, row2_y+16), b_text, font=get_font(font_bold, 9), fill=b_fg)

        draw.line([cx+14, row2_y+86, cx+card_w-14, row2_y+86], fill=(31, 41, 55))
        by = row2_y + 94
        for item, _ in c["breakdown"]:
            draw.text((cx+14, by), item, font=get_font(font_mono, 9), fill=(156, 163, 175))
            by += 18

    # BOTTOM PREVIEW OF SALES TRENDS
    draw_round_rect(draw, [24, 574, W-24, 936], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((40, 590), "OPERATIONAL TREND SNAPSHOT — 20 WEEKS CONSOLIDATED OVERVIEW", font=get_font(font_bold, 13), fill=(226, 232, 240))
    
    # Mini summary stats bar inside panel
    draw.text((40, 616), "Shop-02 Leads Revenue with 44.8% Share (₹1.28 Cr) • APC Steady at ₹1,620 • Weekend Sales Represent 58.4% of Total Turnover", font=get_font(font_reg, 11), fill=(148, 163, 184))

    # Mini bar graph representation across 20 weeks
    chart_x, chart_y, chart_w, chart_h = 40, 650, W-80, 240
    # Axis lines
    draw.line([chart_x, chart_y+chart_h, chart_x+chart_w, chart_y+chart_h], fill=(71, 85, 105), width=1)
    
    # Grid lines
    for gy in range(4):
        y_pos = chart_y + gy * 60
        draw.line([chart_x, y_pos, chart_x+chart_w, y_pos], fill=(30, 41, 59), width=1)
        val_lbl = f"₹{(4-gy)*3}L"
        draw.text((chart_x+5, y_pos-14), val_lbl, font=get_font(font_mono, 9), fill=(100, 116, 139))

    # Weekly bars
    import math
    weeks = [f"W{w}" for w in range(17, 37)]
    step = chart_w / len(weeks)
    for idx, wk in enumerate(weeks):
        bx = chart_x + 35 + idx * step
        # Shop 2 (Blue)
        h2 = 70 + int(math.sin(idx*0.7) * 25 + 40)
        # Shop 3 (Green)
        h3 = 50 + int(math.cos(idx*0.8) * 20 + 30)
        # Shop 4 (Red)
        h4 = 35 + int(math.sin(idx*1.1) * 15 + 20)

        bw = 14
        base_y = chart_y + chart_h
        draw.rectangle([bx, base_y-h2, bx+bw, base_y], fill=(59, 130, 246))
        draw.rectangle([bx+bw+2, base_y-h3, bx+bw*2+2, base_y], fill=(16, 185, 129))
        draw.rectangle([bx+bw*2+4, base_y-h4, bx+bw*3+4, base_y], fill=(239, 68, 68))

        draw.text((bx+2, base_y+8), wk, font=get_font(font_mono, 9), fill=(148, 163, 184))

    # Legend
    lx = W - 400
    ly = 590
    draw.rectangle([lx, ly, lx+12, ly+12], fill=(59, 130, 246))
    draw.text((lx+18, ly), "Shop-02 (₹1.28 Cr)", font=get_font(font_bold, 10), fill=(203, 213, 225))
    draw.rectangle([lx+130, ly, lx+142, ly+12], fill=(16, 185, 129))
    draw.text((lx+148, ly), "Shop-03 (₹93.8 L)", font=get_font(font_bold, 10), fill=(203, 213, 225))
    draw.rectangle([lx+250, ly, lx+262, ly+12], fill=(239, 68, 68))
    draw.text((lx+268, ly), "Shop-04 (₹64.2 L)", font=get_font(font_bold, 10), fill=(203, 213, 225))

    return img

# ==========================================
# IMAGE 2: WEEKLY COMPARISON & CUSTOMER REVIEWS
# ==========================================
def create_image_2():
    img = Image.new("RGB", (W, H), (11, 15, 25))
    draw = ImageDraw.Draw(img)

    # Top Header Bar
    draw.rectangle([0, 0, W, 65], fill=(15, 23, 42), outline=(30, 41, 59))
    draw.text((24, 20), "WEEKLY COMPARISON — 5-WEEK TREND ANALYSIS (WEEKS 17 TO 36)", font=get_font(font_bold, 18), fill=(241, 245, 249))
    
    # Breadcrumbs / badges
    draw_round_rect(draw, [1050, 18, 1280, 48], 15, (30, 41, 59), (71, 85, 105), 1)
    draw.text((1065, 25), "20 WEEKS • 3 SHOPS CONSOLIDATED", font=get_font(font_bold, 10), fill=(147, 197, 253))

    draw_round_rect(draw, [1300, 18, 1570, 48], 15, (6, 78, 59), (16, 185, 129), 1)
    draw.text((1315, 25), "ANALYTICS ENGINE: POWER BI + EXCEL", font=get_font(font_bold, 10), fill=(110, 231, 183))

    # LEFT PANEL: WEEKLY ACTUAL SALES BY SHOP (BAR CHART)
    pw = 760
    draw_round_rect(draw, [24, 80, 24+pw, 520], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((40, 96), "WEEKLY ACTUAL SALES BY SHOP (₹ IN LAKHS)", font=get_font(font_bold, 13), fill=(226, 232, 240))
    
    # Legend
    lx = 420
    draw.rectangle([lx, 98, lx+12, 110], fill=(59, 130, 246))
    draw.text((lx+16, 98), "Shop-02", font=get_font(font_bold, 10), fill=(147, 197, 253))
    draw.rectangle([lx+80, 98, lx+92, 110], fill=(16, 185, 129))
    draw.text((lx+96, 98), "Shop-03", font=get_font(font_bold, 10), fill=(110, 231, 183))
    draw.rectangle([lx+160, 98, lx+172, 110], fill=(239, 68, 68))
    draw.text((lx+176, 98), "Shop-04", font=get_font(font_bold, 10), fill=(252, 165, 165))

    # Chart Area
    cx, cy, cw, ch = 70, 140, pw-70, 320
    draw.line([cx, cy+ch, cx+cw, cy+ch], fill=(71, 85, 105), width=1)
    for gy in range(5):
        y_pos = cy + gy * 64
        draw.line([cx, y_pos, cx+cw, y_pos], fill=(30, 41, 59), width=1)
        val_lbl = f"₹{(4-gy)*2.5:.1f}L"
        draw.text((cx-48, y_pos-7), val_lbl, font=get_font(font_mono, 9), fill=(100, 116, 139))

    # Weekly grouped bars
    import math
    for idx in range(15):
        wk_lbl = f"W{17+idx}"
        bx = cx + 15 + idx * 43
        h2 = 120 + int(math.sin(idx*0.6)*40 + 20)
        h3 = 90 + int(math.cos(idx*0.7)*30 + 15)
        h4 = 65 + int(math.sin(idx*0.9)*25 + 10)

        bw = 9
        base = cy + ch
        draw.rectangle([bx, base-h2, bx+bw, base], fill=(59, 130, 246))
        draw.rectangle([bx+bw+1, base-h3, bx+bw*2+1, base], fill=(16, 185, 129))
        draw.rectangle([bx+bw*2+2, base-h4, bx+bw*3+2, base], fill=(239, 68, 68))
        draw.text((bx-2, base+8), wk_lbl, font=get_font(font_mono, 8), fill=(148, 163, 184))

    # RIGHT PANEL: WEEKLY ACHIEVEMENT % — ACTUAL VS TARGET (LINE CHART)
    rx = 24 + pw + 24
    rw = W - rx - 24
    draw_round_rect(draw, [rx, 80, rx+rw, 520], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((rx+16, 96), "WEEKLY ACHIEVEMENT % — ACTUAL VS TARGET", font=get_font(font_bold, 13), fill=(226, 232, 240))
    
    # Legend
    lx2 = rx + 360
    draw.line([lx2, 104, lx2+20, 104], fill=(251, 191, 36), width=2)
    draw.text((lx2+26, 98), "100% Target", font=get_font(font_bold, 10), fill=(251, 191, 36))
    draw.line([lx2+110, 104, lx2+130, 104], fill=(59, 130, 246), width=2)
    draw.text((lx2+136, 98), "S-02", font=get_font(font_bold, 10), fill=(147, 197, 253))
    draw.line([lx2+180, 104, lx2+200, 104], fill=(16, 185, 129), width=2)
    draw.text((lx2+206, 98), "S-03", font=get_font(font_bold, 10), fill=(110, 231, 183))
    draw.line([lx2+250, 104, lx2+270, 104], fill=(239, 68, 68), width=2)
    draw.text((lx2+276, 98), "S-04", font=get_font(font_bold, 10), fill=(252, 165, 165))

    # Right Chart Area
    rcx, rcy, rcw, rch = rx+50, 140, rw-70, 320
    draw.line([rcx, rcy+rch, rcx+rcw, rcy+rch], fill=(71, 85, 105), width=1)
    
    # 100% Target line
    t100_y = rcy + int(rch * 0.28)
    for dx in range(rcx, rcx+rcw, 12):
        draw.line([dx, t100_y, dx+6, t100_y], fill=(251, 191, 36), width=2)
    draw.text((rcx+rcw-55, t100_y-14), "100% Target", font=get_font(font_bold, 9), fill=(251, 191, 36))

    for gy in range(5):
        y_pos = rcy + gy * 64
        draw.line([rcx, y_pos, rcx+rcw, y_pos], fill=(30, 41, 59), width=1)
        pct_lbl = f"{120 - gy*20}%"
        draw.text((rcx-40, y_pos-7), pct_lbl, font=get_font(font_mono, 9), fill=(100, 116, 139))

    # Trend lines points
    pts_s2 = []
    pts_s3 = []
    pts_s4 = []
    for idx in range(15):
        px = rcx + 20 + idx * (rcw-40) / 14
        # S2 ~80-92%
        y_s2 = t100_y + 35 - int(math.sin(idx*0.5)*28)
        # S3 ~70-85%
        y_s3 = t100_y + 55 - int(math.cos(idx*0.6)*24)
        # S4 ~55-75%
        y_s4 = t100_y + 85 - int(math.sin(idx*0.7)*30)
        pts_s2.append((px, y_s2))
        pts_s3.append((px, y_s3))
        pts_s4.append((px, y_s4))
        draw.text((px-8, rcy+rch+8), f"W{17+idx}", font=get_font(font_mono, 8), fill=(148, 163, 184))

    # Draw lines
    for i in range(len(pts_s2)-1):
        draw.line([pts_s2[i], pts_s2[i+1]], fill=(59, 130, 246), width=3)
        draw.ellipse([pts_s2[i][0]-3, pts_s2[i][1]-3, pts_s2[i][0]+3, pts_s2[i][1]+3], fill=(147, 197, 253))
        draw.line([pts_s3[i], pts_s3[i+1]], fill=(16, 185, 129), width=3)
        draw.ellipse([pts_s3[i][0]-3, pts_s3[i][1]-3, pts_s3[i][0]+3, pts_s3[i][1]+3], fill=(110, 231, 183))
        draw.line([pts_s4[i], pts_s4[i+1]], fill=(239, 68, 68), width=3)
        draw.ellipse([pts_s4[i][0]-3, pts_s4[i][1]-3, pts_s4[i][0]+3, pts_s4[i][1]+3], fill=(252, 165, 165))

    # BOTTOM PANEL: CUSTOMER ENGAGEMENT — REVIEWS & FEEDBACK
    bot_y = 540
    bot_h = 390
    draw_round_rect(draw, [24, bot_y, W-24, bot_y+bot_h], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((40, bot_y+16), "CUSTOMER ENGAGEMENT — REVIEWS & GUEST FEEDBACK PIPELINE", font=get_font(font_bold, 13), fill=(226, 232, 240))
    
    # 3 sub-columns for Google Reviews, Zomato Reviews, Comment Cards
    sub_w = 485
    sub_gap = 23
    
    cols = [
        ("GOOGLE REVIEWS BY DATE", "4,459 Total • 69.0% Capture Rate", (59, 130, 246), (147, 197, 253), [
            ("Outlet 02", "1,958 reviews", "43.9%"),
            ("Outlet 03", "1,440 reviews", "32.3%"),
            ("Outlet 04", "1,061 reviews", "23.8%")
        ]),
        ("ZOMATO REVIEWS BY DATE", "921 Total • 14.2% Capture Rate", (244, 63, 94), (251, 113, 133), [
            ("Outlet 02", "387 reviews", "42.0%"),
            ("Outlet 03", "265 reviews", "28.8%"),
            ("Outlet 04", "269 reviews", "29.2%")
        ]),
        ("COMMENT CARDS BY DATE", "3,706 Total • 21.0% Capture Rate", (139, 92, 246), (196, 181, 253), [
            ("Outlet 02", "1,691 cards", "45.6%"),
            ("Outlet 03", "1,185 cards", "32.0%"),
            ("Outlet 04", "830 cards", "22.4%")
        ])
    ]

    for idx, (ctitle, csub, ccol, ctext_col, crows) in enumerate(cols):
        sx = 40 + idx * (sub_w + sub_gap)
        sy = bot_y + 45
        draw_round_rect(draw, [sx, sy, sx+sub_w, sy+320], 6, (17, 24, 39), (31, 41, 55), 1)
        draw.rectangle([sx+6, sy, sx+sub_w-6, sy+3], fill=ccol)
        
        draw.text((sx+14, sy+14), ctitle, font=get_font(font_bold, 12), fill=(241, 245, 249))
        draw.text((sx+14, sy+32), csub, font=get_font(font_reg, 10), fill=ctext_col)

        # Mini histogram bars
        hx, hy, hw, hh = sx+14, sy+60, sub_w-28, 140
        draw.line([hx, hy+hh, hx+hw, hy+hh], fill=(55, 65, 81))
        for bi in range(24):
            bar_h = 30 + int(math.sin(bi*0.8 + idx)*35 + 25)
            bx = hx + bi * 18
            draw.rectangle([bx, hy+hh-bar_h, bx+12, hy+hh], fill=ccol)

        # Breakdown table
        ty = sy + 215
        draw.line([sx+14, ty, sx+sub_w-14, ty], fill=(31, 41, 55))
        ty += 12
        for oname, ocount, opct in crows:
            draw.text((sx+14, ty), oname, font=get_font(font_bold, 11), fill=(229, 231, 235))
            draw.text((sx+200, ty), ocount, font=get_font(font_mono, 11), fill=(156, 163, 175))
            draw.text((sx+sub_w-70, ty), opct, font=get_font(font_bold, 11), fill=ctext_col)
            ty += 24

    return img

# ==========================================
# IMAGE 3: HOOKAH OPERATIONS COMMAND & DEBRIEF
# ==========================================
def create_image_3():
    img = Image.new("RGB", (W, H), (11, 15, 25))
    draw = ImageDraw.Draw(img)

    # Top Header Bar
    draw.rectangle([0, 0, W, 65], fill=(15, 23, 42), outline=(30, 41, 59))
    draw.text((24, 20), "HOOKAH OPERATIONS COMMAND — 3 SHOPS · FILTERED PERIOD", font=get_font(font_bold, 18), fill=(241, 245, 249))
    
    # Right status indicator
    draw_round_rect(draw, [1150, 18, 1570, 48], 15, (30, 41, 59), (71, 85, 105), 1)
    draw.text((1165, 25), "LOSS METRICS: 28,892 • LOSS AMT: ₹3,18,972", font=get_font(font_bold, 11), fill=(248, 113, 113))

    # Top Metric Banner Cards (Row of 5 metrics)
    h_metrics = [
        ("PLANNED UNITS", "940", (226, 232, 240), (148, 163, 184)),
        ("ACTUAL UNITS", "712", (56, 189, 248), (56, 189, 248)),
        ("NET DIFFERENCE", "-228", (248, 113, 113), (248, 113, 113)),
        ("REVENUE LOSS", "₹3,18,972", (239, 68, 68), (239, 68, 68)),
        ("ACHIEVEMENT RATE", "75.7%", (251, 191, 36), (251, 191, 36))
    ]

    card_w = 295
    card_gap = 19
    start_x = 24
    my = 80
    for idx, (label, val, val_col, border_col) in enumerate(h_metrics):
        cx = start_x + idx * (card_w + card_gap)
        draw_round_rect(draw, [cx, my, cx+card_w, my+80], 6, (17, 24, 39), (31, 41, 55), 1)
        draw.rectangle([cx+6, my, cx+card_w-6, my+3], fill=border_col)
        draw.text((cx+14, my+14), label, font=get_font(font_bold, 11), fill=(156, 163, 175))
        draw.text((cx+14, my+34), val, font=get_font(font_bold, 24), fill=val_col)

    # SHOP-WISE ACHIEVEMENT PROGRESS BARS PANEL
    py = 175
    draw_round_rect(draw, [24, py, W-24, py+140], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((40, py+14), "SHOP-WISE HOOKAH TARGET VS ACTUAL ACHIEVEMENT PROGRESS", font=get_font(font_bold, 12), fill=(226, 232, 240))
    
    progress_items = [
        ("Shop-02 (Bar & Lounge)", "323 / 357 Units", "90.5%", 0.905, (59, 130, 246)),
        ("Shop-03 (Terrace Dining)", "227 / 291 Units", "78.0%", 0.780, (16, 185, 129)),
        ("Shop-04 (Main Hall)", "162 / 292 Units", "55.5%", 0.555, (239, 68, 68)),
        ("COMBINED ALL SHOPS", "712 / 940 Units", "75.7%", 0.757, (251, 191, 36))
    ]

    p_item_y = py + 38
    for s_title, s_units, s_pct, s_ratio, s_col in progress_items:
        draw.text((40, p_item_y), s_title, font=get_font(font_bold, 11), fill=(203, 213, 225))
        draw.text((260, p_item_y), s_units, font=get_font(font_mono, 11), fill=(148, 163, 184))
        
        # Bar track
        bar_x = 420
        bar_w = 980
        draw_round_rect(draw, [bar_x, p_item_y+2, bar_x+bar_w, p_item_y+14], 6, (31, 41, 55))
        # Fill
        fill_w = int(bar_w * s_ratio)
        draw_round_rect(draw, [bar_x, p_item_y+2, bar_x+fill_w, p_item_y+14], 6, s_col)

        draw.text((bar_x+bar_w+20, p_item_y), s_pct, font=get_font(font_bold, 11), fill=s_col)
        p_item_y += 24

    # CHARTS SECTION (2 COLUMNS)
    cy = 330
    ch = 340
    cw = 760
    
    # Chart 1: Hookah Planned vs Actual Units by Date
    draw_round_rect(draw, [24, cy, 24+cw, cy+ch], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((40, cy+16), "HOOKAH PLANNED VS ACTUAL UNITS BY DATE", font=get_font(font_bold, 13), fill=(226, 232, 240))
    
    # Legend
    draw.line([480, cy+22, 505, cy+22], fill=(251, 191, 36), width=2)
    draw.text((512, cy+16), "Planned Units", font=get_font(font_bold, 10), fill=(251, 191, 36))
    draw.line([620, cy+22, 645, cy+22], fill=(56, 189, 248), width=2)
    draw.text((652, cy+16), "Actual Units", font=get_font(font_bold, 10), fill=(56, 189, 248))

    c1_x, c1_y, c1_w, c1_h = 50, cy+55, cw-50, 240
    draw.line([c1_x, c1_y+c1_h, c1_x+c1_w, c1_y+c1_h], fill=(71, 85, 105))
    import math
    for gy in range(5):
        yp = c1_y + gy * 50
        draw.line([c1_x, yp, c1_x+c1_w, yp], fill=(30, 41, 59))
        draw.text((c1_x-30, yp-7), str(60 - gy*12), font=get_font(font_mono, 9), fill=(100, 116, 139))

    c1_pts_plan = []
    c1_pts_act = []
    for idx in range(18):
        px = c1_x + 20 + idx * (c1_w-40) / 17
        yp_plan = c1_y + 45 - int(math.sin(idx*0.7)*20)
        yp_act = c1_y + 75 - int(math.sin(idx*0.75)*25)
        c1_pts_plan.append((px, yp_plan))
        c1_pts_act.append((px, yp_act))
        if idx % 2 == 0:
            draw.text((px-10, c1_y+c1_h+8), f"0{idx*2+1}/08", font=get_font(font_mono, 8), fill=(148, 163, 184))

    for i in range(len(c1_pts_plan)-1):
        draw.line([c1_pts_plan[i], c1_pts_plan[i+1]], fill=(251, 191, 36), width=2)
        draw.ellipse([c1_pts_plan[i][0]-3, c1_pts_plan[i][1]-3, c1_pts_plan[i][0]+3, c1_pts_plan[i][1]+3], fill=(251, 191, 36))
        draw.line([c1_pts_act[i], c1_pts_act[i+1]], fill=(56, 189, 248), width=2)
        draw.ellipse([c1_pts_act[i][0]-3, c1_pts_act[i][1]-3, c1_pts_act[i][0]+3, c1_pts_act[i][1]+3], fill=(56, 189, 248))

    # Chart 2: Hookah Revenue Loss / Gain By Date (Diverging Bar Chart)
    c2_start = 24 + cw + 24
    c2_w = W - c2_start - 24
    draw_round_rect(draw, [c2_start, cy, c2_start+c2_w, cy+ch], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((c2_start+16, cy+16), "HOOKAH REVENUE LOSS / GAIN BY DATE (COMBINED ALL SHOPS)", font=get_font(font_bold, 13), fill=(226, 232, 240))
    
    # Legend
    draw.rectangle([c2_start+450, cy+18, c2_start+462, cy+30], fill=(16, 185, 129))
    draw.text((c2_start+468, cy+16), "Gain (+)", font=get_font(font_bold, 10), fill=(110, 231, 183))
    draw.rectangle([c2_start+540, cy+18, c2_start+552, cy+30], fill=(239, 68, 68))
    draw.text((c2_start+558, cy+16), "Loss / Deficit (-)", font=get_font(font_bold, 10), fill=(252, 165, 165))

    c2_x, c2_y, c2_cw, c2_ch = c2_start+50, cy+55, c2_w-70, 240
    # Zero baseline at middle
    zero_y = c2_y + 120
    draw.line([c2_x, zero_y, c2_x+c2_cw, zero_y], fill=(148, 163, 184), width=1)
    draw.text((c2_x-42, zero_y-6), "₹0", font=get_font(font_mono, 9), fill=(203, 213, 225))
    draw.text((c2_x-45, c2_y+20), "+₹15K", font=get_font(font_mono, 9), fill=(52, 211, 153))
    draw.text((c2_x-45, c2_y+210), "-₹25K", font=get_font(font_mono, 9), fill=(248, 113, 113))

    for idx in range(22):
        bx = c2_x + 15 + idx * 30
        variance = int(math.sin(idx*0.9)*50 - 25)
        if variance >= 0:
            draw.rectangle([bx, zero_y-variance, bx+16, zero_y], fill=(16, 185, 129))
        else:
            draw.rectangle([bx, zero_y, bx+16, zero_y-variance], fill=(239, 68, 68))
        if idx % 3 == 0:
            draw.text((bx-5, c2_y+c2_ch+8), f"W{17+idx//2}", font=get_font(font_mono, 8), fill=(148, 163, 184))

    # BOTTOM PANEL: MISSION STATUS & MANAGEMENT INTELLIGENCE
    bot_y = 690
    bot_h = 240
    draw_round_rect(draw, [24, bot_y, W-24, bot_y+bot_h], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((40, bot_y+16), "MISSION STATUS — MANAGEMENT INTELLIGENCE & ACTIONABLE FINDINGS", font=get_font(font_bold, 13), fill=(226, 232, 240))

    # Two columns: OPERATIONS DEBRIEF & PERFORMANCE SIGNALS
    col_w = 730
    
    # Left column
    draw_round_rect(draw, [40, bot_y+45, 40+col_w, bot_y+bot_h-20], 6, (17, 24, 39), (31, 41, 55), 1)
    draw.rectangle([46, bot_y+45, 40+col_w-6, bot_y+48], fill=(59, 130, 246))
    draw.text((54, bot_y+58), "OPERATIONS DEBRIEF", font=get_font(font_bold, 12), fill=(147, 197, 253))
    
    debrief_points = [
        ("• Outlet 02 and 03 maintained stable evening conversion rates above 85% with consistent flavor availability.", (203, 213, 225)),
        ("• Outlet 04 underperformed against target by 44.5% due to inventory limitations and terrace seating disruptions.", (248, 113, 113)),
        ("• Peak sales variance occurred on weekend shifts where walk-in demand exceeded prep-stock by 22%.", (226, 232, 240)),
        ("• Automated Petpooja POS normalization cut discrepancy identification time from 48 hours to 15 minutes.", (110, 231, 183))
    ]
    dy = bot_y + 82
    for p_txt, p_col in debrief_points:
        draw.text((54, dy), p_txt, font=get_font(font_reg, 10), fill=p_col)
        dy += 22

    # Right column
    rc_start = 40 + col_w + 30
    draw_round_rect(draw, [rc_start, bot_y+45, rc_start+col_w, bot_y+bot_h-20], 6, (17, 24, 39), (31, 41, 55), 1)
    draw.rectangle([rc_start+6, bot_y+45, rc_start+col_w-6, bot_y+48], fill=(16, 185, 129))
    draw.text((rc_start+14, bot_y+58), "PERFORMANCE SIGNALS & BUSINESS IMPACT", font=get_font(font_bold, 12), fill=(110, 231, 183))

    signals = [
        ("• High Review Capture Rate: Google review capture reached 69.0% (target: 65%) with 4,459 total verified submissions.", (203, 213, 225)),
        ("• Average Per Cover (APC): Maintained steady at ₹1,620 across all 3 outlets throughout the 20-week period.", (226, 232, 240)),
        ("• Target Gap Resolution: Period deficit of ₹72,56,603 concentrated in weekday lunch slots, driving menu re-engineering.", (251, 191, 36)),
        ("• Automated MIS pipeline delivers daily executive summaries directly to leadership before morning briefing.", (147, 197, 253))
    ]
    sy = bot_y + 82
    for s_txt, s_col in signals:
        draw.text((rc_start+14, sy), s_txt, font=get_font(font_reg, 10), fill=s_col)
        sy += 22

    return img

def create_image_4():
    W, H = 1600, 950
    img = Image.new("RGB", (W, H), (11, 15, 25))
    draw = ImageDraw.Draw(img)

    for y in range(0, H, 40):
        draw.line([(0, y), (W, y)], fill=(16, 22, 38), width=1)
    for x in range(0, W, 40):
        draw.line([(x, 0), (x, H)], fill=(16, 22, 38), width=1)

    # HEADER
    draw.rectangle([0, 0, W, 70], fill=(13, 18, 30))
    draw.line([0, 70, W, 70], fill=(30, 41, 59), width=1)
    draw.polygon([(30, 20), (50, 20), (55, 35), (40, 52), (25, 35)], fill=(217, 119, 6))
    draw.text((35, 27), "38", font=get_font(font_bold, 14), fill=(255, 255, 255))
    draw.text((68, 20), "38 BARRACKS RESTAURANT & BAR", font=get_font(font_bold, 16), fill=(248, 250, 252))
    draw.text((68, 42), "MULTI-SHOP AUDIT & DAILY SALES LEDGER — TRANSACTION RECONCILIATION", font=get_font(font_bold, 11), fill=(56, 189, 248))

    draw_round_rect(draw, [W-400, 20, W-30, 52], 6, (15, 23, 42), (30, 41, 59), 1)
    draw.ellipse([W-385, 32, W-375, 42], fill=(34, 197, 94))
    draw.text((W-365, 27), "397 VERIFIED AUDIT RECORDS • PETPOOJA POS SYNC", font=get_font(font_mono, 9), fill=(226, 232, 240))

    # TABLE CONTAINER
    ty = 90
    draw_round_rect(draw, [24, ty, W-24, H-30], 8, (15, 23, 42), (30, 41, 59), 1)
    draw.text((40, ty+16), "OPERATIONAL TRANSACTION LEDGER — FILTERED BY WEEK & OUTLET", font=get_font(font_bold, 13), fill=(226, 232, 240))

    # Table Header Row
    thy = ty + 50
    draw.rectangle([34, thy, W-34, thy+36], fill=(30, 41, 59))
    headers = [
        ("DATE / WEEK", 120),
        ("OUTLET", 110),
        ("DAY TYPE", 100),
        ("ACTUAL SALES", 140),
        ("PLANNED TARGET", 140),
        ("VARIANCE", 130),
        ("ACH %", 90),
        ("PAX", 80),
        ("COVERS", 80),
        ("APC (₹)", 90),
        ("G-REVIEWS", 90),
        ("ZOMATO", 80),
        ("CARDS", 80),
        ("HOOKAH", 100),
        ("STATUS", 90)
    ]
    cur_x = 44
    for hname, hw in headers:
        draw.text((cur_x, thy+10), hname, font=get_font(font_bold, 10), fill=(148, 163, 184))
        cur_x += hw

    # Sample rows representing the actual 38 Barracks data
    rows = [
        ("02 Sep (W36)", "Outlet 02", "Weekday", "₹1,42,850", "₹1,65,000", "-₹22,150", "86.6%", "88", "34", "₹1,623", "22 (64%)", "4 (12%)", "19 (21%)", "4 / 5", "PASS"),
        ("02 Sep (W36)", "Outlet 03", "Weekday", "₹98,400", "₹1,15,000", "-₹16,600", "85.5%", "61", "22", "₹1,613", "16 (72%)", "3 (14%)", "12 (20%)", "3 / 4", "PASS"),
        ("02 Sep (W36)", "Outlet 04", "Weekday", "₹72,300", "₹95,000", "-₹22,700", "76.1%", "44", "15", "₹1,643", "11 (73%)", "2 (13%)", "9 (20%)", "2 / 4", "ATTN"),
        ("01 Sep (W36)", "Outlet 02", "Weekday", "₹1,38,200", "₹1,65,000", "-₹26,800", "83.8%", "85", "32", "₹1,626", "24 (75%)", "5 (15%)", "18 (21%)", "4 / 5", "PASS"),
        ("01 Sep (W36)", "Outlet 03", "Weekday", "₹94,600", "₹1,15,000", "-₹20,400", "82.3%", "59", "21", "₹1,603", "14 (66%)", "3 (14%)", "13 (22%)", "3 / 4", "PASS"),
        ("01 Sep (W36)", "Outlet 04", "Weekday", "₹68,400", "₹95,000", "-₹26,600", "72.0%", "41", "14", "₹1,668", "10 (71%)", "3 (21%)", "8 (19%)", "2 / 4", "ATTN"),
        ("31 Aug (W35)", "Outlet 02", "Weekend", "₹2,48,900", "₹2,20,000", "+₹28,900", "113.1%", "152", "58", "₹1,637", "42 (72%)", "9 (15%)", "34 (22%)", "7 / 6", "EXCEED"),
        ("31 Aug (W35)", "Outlet 03", "Weekend", "₹1,82,400", "₹1,75,000", "+₹7,400", "104.2%", "114", "41", "₹1,600", "28 (68%)", "6 (14%)", "24 (21%)", "5 / 5", "EXCEED"),
        ("31 Aug (W35)", "Outlet 04", "Weekend", "₹1,32,100", "₹1,40,000", "-₹7,900", "94.4%", "79", "28", "₹1,672", "20 (71%)", "4 (14%)", "17 (21%)", "3 / 4", "PASS"),
        ("30 Aug (W35)", "Outlet 02", "Weekend", "₹2,64,300", "₹2,25,000", "+₹39,300", "117.5%", "163", "62", "₹1,621", "44 (70%)", "10 (16%)", "36 (22%)", "8 / 6", "EXCEED"),
        ("30 Aug (W35)", "Outlet 03", "Weekend", "₹1,94,800", "₹1,80,000", "+₹14,800", "108.2%", "121", "44", "₹1,610", "31 (70%)", "7 (16%)", "26 (21%)", "6 / 5", "EXCEED"),
        ("30 Aug (W35)", "Outlet 04", "Weekend", "₹1,41,500", "₹1,45,000", "-₹3,500", "97.6%", "86", "30", "₹1,645", "21 (70%)", "5 (16%)", "18 (21%)", "4 / 4", "PASS"),
        ("29 Aug (W35)", "Outlet 02", "Weekday", "₹1,55,200", "₹1,70,000", "-₹14,800", "91.3%", "95", "36", "₹1,634", "26 (72%)", "6 (16%)", "20 (21%)", "4 / 5", "PASS"),
        ("29 Aug (W35)", "Outlet 03", "Weekday", "₹1,12,000", "₹1,20,000", "-₹8,000", "93.3%", "70", "25", "₹1,600", "18 (72%)", "4 (16%)", "15 (21%)", "3 / 4", "PASS"),
        ("29 Aug (W35)", "Outlet 04", "Weekday", "₹82,600", "₹1,00,000", "-₹17,400", "82.6%", "50", "18", "₹1,652", "12 (66%)", "3 (16%)", "11 (22%)", "2 / 4", "ATTN"),
    ]

    ry = thy + 36
    for i, r in enumerate(rows):
        bg_col = (15, 23, 42) if i % 2 == 0 else (17, 24, 39)
        draw.rectangle([34, ry, W-34, ry+32], fill=bg_col)
        draw.line([34, ry+32, W-34, ry+32], fill=(24, 33, 47), width=1)
        
        cur_x = 44
        # DATE
        draw.text((cur_x, ry+8), r[0], font=get_font(font_mono, 9), fill=(226, 232, 240))
        cur_x += 120
        # OUTLET
        o_col = (96, 165, 250) if "02" in r[1] else ((52, 211, 153) if "03" in r[1] else (248, 113, 113))
        draw.text((cur_x, ry+8), r[1], font=get_font(font_bold, 9), fill=o_col)
        cur_x += 110
        # DAY TYPE
        dt_col = (251, 191, 36) if r[2] == "Weekend" else (148, 163, 184)
        draw.text((cur_x, ry+8), r[2], font=get_font(font_reg, 9), fill=dt_col)
        cur_x += 100
        # ACTUAL SALES
        draw.text((cur_x, ry+8), r[3], font=get_font(font_bold, 9), fill=(241, 245, 249))
        cur_x += 140
        # TARGET
        draw.text((cur_x, ry+8), r[4], font=get_font(font_reg, 9), fill=(148, 163, 184))
        cur_x += 140
        # VARIANCE
        v_col = (52, 211, 153) if "+" in r[5] else (248, 113, 113)
        draw.text((cur_x, ry+8), r[5], font=get_font(font_bold, 9), fill=v_col)
        cur_x += 130
        # ACH %
        ach_col = (52, 211, 153) if float(r[6].replace("%","")) >= 100 else ((251, 191, 36) if float(r[6].replace("%","")) >= 85 else (248, 113, 113))
        draw.text((cur_x, ry+8), r[6], font=get_font(font_bold, 9), fill=ach_col)
        cur_x += 90
        # PAX
        draw.text((cur_x, ry+8), r[7], font=get_font(font_mono, 9), fill=(203, 213, 225))
        cur_x += 80
        # COVERS
        draw.text((cur_x, ry+8), r[8], font=get_font(font_mono, 9), fill=(203, 213, 225))
        cur_x += 80
        # APC
        draw.text((cur_x, ry+8), r[9], font=get_font(font_mono, 9), fill=(56, 189, 248))
        cur_x += 90
        # G-REVIEWS
        draw.text((cur_x, ry+8), r[10], font=get_font(font_reg, 9), fill=(203, 213, 225))
        cur_x += 90
        # ZOMATO
        draw.text((cur_x, ry+8), r[11], font=get_font(font_reg, 9), fill=(203, 213, 225))
        cur_x += 80
        # CARDS
        draw.text((cur_x, ry+8), r[12], font=get_font(font_reg, 9), fill=(203, 213, 225))
        cur_x += 80
        # HOOKAH
        draw.text((cur_x, ry+8), r[13], font=get_font(font_mono, 9), fill=(203, 213, 225))
        cur_x += 100
        # STATUS BADGE
        st = r[14]
        st_bg = (22, 101, 52) if st == "EXCEED" else ((30, 64, 175) if st == "PASS" else (153, 27, 27))
        draw_round_rect(draw, [cur_x-4, ry+4, cur_x+58, ry+24], 4, st_bg, None, 0)
        draw.text((cur_x+8, ry+7), st, font=get_font(font_bold, 8), fill=(255, 255, 255))
        
        ry += 32

    return img

# Generate and save all 4
print("Generating Image 1...")
img1 = create_image_1()
print("Generating Image 2...")
img2 = create_image_2()
print("Generating Image 3...")
img3 = create_image_3()
print("Generating Image 4...")
img4 = create_image_4()

paths = [
    ("assets/projects/sales-mis/sales-1.jpg", img1),
    ("assets/projects/sales-mis/sales-2.jpg", img2),
    ("assets/projects/sales-mis/sales-3.jpg", img3),
    ("assets/projects/sales-mis/sales-4.jpg", img4),
    ("public/assets/projects/sales-mis/sales-1.jpg", img1),
    ("public/assets/projects/sales-mis/sales-2.jpg", img2),
    ("public/assets/projects/sales-mis/sales-3.jpg", img3),
    ("public/assets/projects/sales-mis/sales-4.jpg", img4),
    ("dist/assets/projects/sales-mis/sales-1.jpg", img1),
    ("dist/assets/projects/sales-mis/sales-2.jpg", img2),
    ("dist/assets/projects/sales-mis/sales-3.jpg", img3),
    ("dist/assets/projects/sales-mis/sales-4.jpg", img4),
]

for p, im in paths:
    os.makedirs(os.path.dirname(p), exist_ok=True)
    im.save(p, "JPEG", quality=95)
    print(f"Saved {p}")

print("ALL 4 IMAGES SUCCESSFULLY GENERATED!")
