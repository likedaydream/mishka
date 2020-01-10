# Личный проект «Мишка»

[**Открыть сайта билда**](https://likedaydream.github.io/mishka/build/)

---

**Чтобы обновить билд на Github Pages:**

```
# переключиться на ветку Github Pages
git checkout gh-pages

# обновить исходники билда от master
git rebase master

# создать новую версию билда из исходников
npm run build

# сделать коммит билда
git add .

# если предыдущий коммит - Current build commit
git commit --amend --no-edit

# если предыдущий коммит - не Current build commit
git commit -m 'Current build commit'

# опубликовать на Github Pages
# форсировать изменен
git push origin gh-pages --force
```

Если нужно внести правки в исходники самой ветки `gh-pages`, нужно откатиться к состоянию до `Current build commit` - `gh-pages-config` tag, чтобы эта ветка не хранила историю изменения файлов билда и последним коммитом всегда был коммит билда.

```
git reset --hard gh-pages-config
# внести изменения
git status
git rm build -r
git add .
git commit --amend --no-edit
git tag -d gh-pages-config
git tag gh-pages-config
```
