# Git Flow Demo: Triển khai task "Homepage UI"

Dưới đây là hướng dẫn chi tiết từng bước triển khai Git Flow cho task **"Homepage UI"**, kết hợp **GitHub** và **ClickUp**.

---

# Slide

https://docs.google.com/presentation/d/12_-ryGUHVLfT6PVjKZN4yU-IFPaJArez/edit

## 1. Tạo Task Trên ClickUp

**Bước 1**: Trưởng nhóm tạo task trên ClickUp:

- **Tên task**: `Tạo UI Homepage`
- **Mô tả**: Yêu cầu code giao diện trang chủ.
- **Label**: `Feature`, `UI`
- **Assignee**: Member A
- **Deadline**: [Date]

---

## 2. Tạo Branch trên Github

```bash
# Clone repo (nếu chưa có)
git clone https://github.com/vanhoa690/demo-gitflow-clickup.git
cd demo-gitflow-clickup

# Tạo branch mới từ develop
git checkout develop
git pull origin develop
git checkout -b feature/homepage-ui
```

---

## 3. Develop Tính Năng Trên Branch

### Bước 1: Code giao diện

Ví dụ trong file `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Homepage</h1>
  </body>
</html>
```

### Bước 2: Commit code với message rõ ràng:

```bash
git add .
git commit -m "feat: add homepage ui"
git push origin feature/homepage-ui
```

---

## 4. Tạo Pull Request (PR) Trên GitHub

**Bước 1**: Vào GitHub repo → chọn branch `feature/homepage-ui` → "Compare & Pull Request".

**Bước 2**: Điền thông tin PR:

- **Title**: `feat: Homepage UI`
- **Description**:

```markdown
## Changes

- Thêm giao diện trang chủ

## Linked Task

- ClickUp Task: [Tạo UI Homepage](https://app.clickup.com/t/123456)
```

- **Reviewers**: Assign 2 thành viên review.
- **Milestone**: Sprint 1 (nếu có).

---

## 5. Review Code

**Bước 1**: Reviewers kiểm tra code:

- Comment góp ý (ví dụ: `"Thiếu footer ui"`).
- Yêu cầu sửa đổi nếu cần.

**Bước 2**: Member A sửa code:

```bash
git commit -m "fix: add footer ui"
git push origin feature/homepage-ui
```

---

## 6. Merge PR Vào Develop

Sau khi được approve:

- Merge PR: Chọn **"Merge"** để gộp commit.
- Delete branch: Xóa branch `feature/homepage-ui` sau khi merge.

---

## 7. Cập Nhật ClickUp

**Bước 1**: Đánh dấu task "Tạo UI Homepage" là **Done** trên ClickUp.

**Bước 2**: Thêm comment kèm link PR để track:

```markdown
✅ Đã hoàn thành!  
PR Merged: https://github.com/your-project/pull/1
```

---

## 8. Deploy Lên Môi Trường

Khi đủ tính năng, merge `develop` vào `main` và deploy:

```bash
git checkout main
git merge develop
git tag -a v1.0.0 -m "Release Homepage UI"
git push origin main --tags
```

---

## 9. Resolve Conflict Code (Kịch bản 3 người cùng sửa index.html)

Tình huống:

Member X: PR feature/login (sửa index.html)

Member Y: PR feature/register (sửa index.html)

Member Z: PR feature/contact (sửa index.html)

→ Conflict khi merge vào main do cùng file.

Giải pháp:

### Bước 1: Cập nhật nhánh develop

```bash
git checkout develop
git pull origin develop
```

### Bước 2: Merge develop vào nhánh feature của bạn

```bash
git checkout feature/login  # (hoặc feature/register, feature/contact)
git merge develop
```

→ Nếu có conflict, Git sẽ thông báo:

```bash
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

### Bước 3: Giải quyết Conflict

#### Mở file index.html, tìm các đoạn conflict:

```html
<<<<<<< HEAD
<!-- Code từ nhánh feature của bạn -->
=======
<!-- Code từ nhánh develop -->
>>>>>>> develop
```

#### Chỉnh sửa thủ công:

Giữ code cần thiết (hoặc kết hợp từ cả hai).

Xóa các marker <<<<<<<, =======, >>>>>>>.

#### Lưu file và commit:

```bash
git add index.html
git commit -m "fix: resolve merge conflict with develop"
```

### Bước 4: Push và tạo PR vào develop

```bash
git push origin feature/login
```
