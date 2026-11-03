# 网站内容说明

## 草稿规则（全站统一）

**名字以 `_` 开头 = 草稿**：本地 `npm run dev` 能看到（带黄色 Draft 标记），线上网站完全不包含。准备好了把 `_` 去掉就上线。

| 内容 | 草稿写法 | 上线写法 |
|---|---|---|
| 论文 | `publications/_my-paper.md` | `publications/my-paper.md` |
| 教学经历 | `teaching/_my-course.md` | `teaching/my-course.md` |
| Design 作品 | `design/_my-project/`（整个文件夹） | `design/my-project/` |
| Home / About 页 | `src/app/pages/_home.tsx` | `src/app/pages/home.tsx` |

除此之外，名字里的 `_` 没有特殊含义。改完保存即可，`npm run dev` 会热更新；push 到 main 后自动部署。

---

# Research 页

Research 页（`/research`）从这些文件自动生成，论文 / 教学的字段与 [academicpages](https://github.com/academicpages/academicpages.github.io) 兼容，可以直接从模版复制条目过来。

- `profile.yml` — 左侧个人信息栏：头像、姓名、简介、所在地、学校、链接。`author_name` 是论文作者列表里要加粗的名字
- `research-about.md` — About Me 正文（支持 markdown 链接）
- `publications/*.md` — 每篇论文一个文件，按 `order` 排序
- `teaching/*.md` — 每段教学经历一个文件，按 `date` 倒序
- `education.yml`、`honors.yml` — 按文件里的顺序显示

## 新增论文

`content/publications/2026-my-paper.md`：

```yaml
---
title: "Paper Title"
category: conferences            # conferences → [C]，manuscripts / journals → [J]
date: 2026-05-01
order: 1                         # 数字小的排前面
authors: "Shengyang Luo, Co-author A, and Co-author B"
venue: "Proceedings of ..., pp. 1-15, 2026"
status: "Under review"           # 可选；有的话显示成 "venue, 年份 (status)"
venue_short: "CHI'26"            # 可选，右侧蓝色标签
image: "/images/publications/my-paper.png"   # 可选，缩略图放 public/images/publications/
url: "https://..."               # 可选，标题链接（没有就用 paperurl）
paperurl: "https://..."          # 可选，PDF
slidesurl: "https://..."         # 可选，Slides
videourl: "https://..."          # 可选，Video
bibtexurl: "https://..."         # 可选，BibTeX
---
```

academicpages 的其他字段（`collection`、`permalink`、`citation` 等）可以保留，页面会忽略。

## 新增教学经历

`content/teaching/2026-fall-course.md`：

```yaml
---
title: "Course Name"
date: 2026-08-01
term: "Fall 2026"                # 左边显示的学期
role: "Teaching Assistant"       # 没有则显示 type
url: "https://..."               # 可选，课程名链接
---

一句课程描述，支持 markdown。
```

---

# Design 页

每个作品是 `content/design/` 下的一个文件夹：`index.md` + 这个作品用到的图片 / GIF / 视频，都放在同一个文件夹里，用文件名直接引用。

- 文件夹名就是网址：`content/design/Motion_Particle/` → `/design/3d-motion/Motion_Particle`
- 分类在 `design-categories.yml` 里：`label` 是显示的名字，`order` 调版块顺序（数字小的在前）。`id` 不要改（是网址的一部分，也是作品 `category` 对应的值）
- **完整示例和所有排版写法**：`design/_template/index.md`，新建作品时复制整个文件夹再改名

## 排版速查

```html
![](hero.png)                      <!-- 整宽图片，GIF 同理 -->

<div class="row">                  <!-- 并排，2 张、3 张都行；手机上自动竖排 -->
  <img src="a.png">
  <img src="b.png">
</div>

<figure>                           <!-- 带说明文字 -->
  <img src="c.png">
  <figcaption>说明文字</figcaption>
</figure>

<video src="demo.mp4" autoplay muted loop playsinline></video>   <!-- 像 GIF 一样静音循环 -->
<video src="talk.mp4" controls></video>                          <!-- 带播放按钮 -->
<iframe src="https://www.youtube.com/embed/视频ID" allowfullscreen></iframe>
```

注意：`<div>`、`<figure>` 这类块里面不要留空行。

## 视频大小

视频文件会和网站一起放进 GitHub，单个文件超过 100MB 会推送失败，网站也会变慢。建议：
- 短的 UI 演示：导出成 mp4（比 GIF 小很多），控制在 10MB 以内，用 `autoplay muted loop`
- 长视频：传到 YouTube / Bilibili，用 `<iframe>` 嵌入

---

# Home 和 About 页

这两页是代码文件，在 `src/app/pages/` 里。现在是草稿（`_home.tsx` / `_about.tsx`）：本地导航栏上有个小橙点，线上访问 `/` 和 `/about` 会跳到 Research。改好后去掉文件名的 `_` 就上线。
