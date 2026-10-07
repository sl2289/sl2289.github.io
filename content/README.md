# Research 页内容

Research 页（`/research`）从这里的 markdown 文件自动生成，格式与 [academicpages](https://github.com/academicpages/academicpages.github.io) 的 `_publications/`、`_teaching/` 兼容，可以直接从模版复制条目过来。

- `profile.yml` — 左侧个人信息栏：头像、姓名、简介、所在地、学校、链接（Email / Google Scholar / ORCID / GitHub / LinkedIn）。头像放到 `public/images/` 后把 `avatar` 改成 `"/images/文件名.jpg"`；留空显示默认头像
- `research-about.md` — About Me 正文
- `_publications/*.md` — 每篇论文一个文件，按 `date` 倒序排列
- `honors.yml` — Honors & Awards，按文件里的顺序显示
- `education.yml` — Education，按文件里的顺序显示
- `_teaching/*.md` — 每段教学经历一个文件，按 `date` 倒序排列（目前隐藏：`src/app/components/ResearchPage.tsx` 顶部 `SHOW_TEACHING` 改成 `true` 即可恢复）

改完保存即可，`npm run dev` 会热更新；push 到 main 后自动部署。

想暂时隐藏某篇论文或某段教学经历、又不想删文件：在它的 front matter 里加 `published: false`（academicpages 的标准写法），删掉这行或改成 `true` 即可恢复显示。

## 新增论文

`content/_publications/2026-my-paper.md`：

```yaml
---
title: "Paper Title"
date: 2026-05-01                 # 决定排序，年份显示在徽章上
venue: "CHI 2026"
authors: "Shengyang Liu, Co-author A"   # 本站扩展字段
status: "Under Review at CHI 2026"      # 本站扩展字段，可选；有则替代 venue 显示
image: "/images/publications/my-paper.png"  # 本站扩展字段，可选；图片放 public/images/publications/
excerpt: "一句话简介（可选）"
paperurl: "https://..."          # 可选，显示 PDF 链接
slidesurl: "https://..."         # 可选，显示 Slides 链接
bibtexurl: "https://..."         # 可选，显示 BibTeX 链接
---
```

academicpages 的其他字段（`collection`、`permalink`、`category`、`citation`）可以保留，页面会忽略。

## 新增教学经历

`content/_teaching/2026-fall-course.md`：

```yaml
---
title: "Course Name"
date: 2026-08-01
term: "Fall 2026"                # 本站扩展字段，显示在徽章上
role: "Teaching Assistant"       # 本站扩展字段；没有则显示 type
type: "Undergraduate course"
---

课程描述，支持 markdown。
```

---

# Design 页内容

每个作品是 `content/_design/` 下的一个文件夹：`index.md` + 这个作品用到的图片 / GIF / 视频，都放在同一个文件夹里，用文件名直接引用。

- 文件夹名就是网址：`content/_design/autocue-interface/` → `/design/ux/autocue-interface`
- **文件夹名以 `_` 开头 = 草稿**：本地 `npm run dev` 能看到（带 Draft 标记），线上网站完全不包含（文字和图片视频都不会上传）。准备好了把 `_` 去掉即可
- 分类（MR / UX / 3D/Motion）在 `design-categories.yml` 里，可以增删改名
- **完整示例和所有排版写法**：`_design/_example-project/index.md`，新建作品时直接复制整个文件夹改

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

这两页是代码文件，在 `src/app/pages/` 里，规则和 Design 草稿一样：

- `_home.tsx` / `_about.tsx`（前面有 `_`）= **草稿**：本地 `npm run dev` 能看到，导航栏上有个小橙点，页面左下角有 Draft 标记；线上网站完全不包含，访问 `/` 和 `/about` 会跳到 Research
- 改好后把文件名的 `_` 去掉（`home.tsx` / `about.tsx`）就上线了
