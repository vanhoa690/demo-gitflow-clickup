# Git Flow Demo: Triển khai task "Login API"

Dưới đây là hướng dẫn chi tiết từng bước triển khai Git Flow cho task **"Login API"**, kết hợp **GitHub** và **ClickUp**. Phù hợp cho việc hướng dẫn sinh viên hoặc trình bày trong buổi họp team.

---

# Slide

https://docs.google.com/presentation/d/12_-ryGUHVLfT6PVjKZN4yU-IFPaJArez/edit

## 1. Tạo Task Trên ClickUp

**Bước 1**: Trưởng nhóm tạo task trên ClickUp:

- **Tên task**: `Develop Login API`
- **Mô tả**: Yêu cầu API đăng nhập với email/password, trả về JWT token.
- **Label**: `Feature`, `API`
- **Assignee**: Member A
- **Deadline**: [Date]

---

## 2. Tạo Branch Từ ClickUp (Hoặc Thủ Công)

### Option 1: Dùng ClickUp GitHub Integration

- Tự động tạo branch từ task.

### Option 2: Tạo thủ công trên GitHub:

```bash
# Clone repo (nếu chưa có)
git clone https://github.com/vanhoa690/demo-gitflow-clickup.git
cd demo-gitflow-clickup

# Tạo branch mới từ develop
git checkout develop
git pull origin develop
git checkout -b feature/login-api
```

---

## 3. Develop Tính Năng Trên Branch

### Bước 1: Code tính năng

Ví dụ trong file `authController.js`:

```javascript
// authController.js
const login = (req, res) => {
  // Xử lý logic đăng nhập
  res.json({ token: "generated-jwt-token" });
};
module.exports = { login };
```

### Bước 2: Commit code với message rõ ràng:

```bash
git add .
git commit -m "feat: add login API endpoint"
git push origin feature/login-api
```

---

## 4. Tạo Pull Request (PR) Trên GitHub

**Bước 1**: Vào GitHub repo → chọn branch `feature/login-api` → "Compare & Pull Request".

**Bước 2**: Điền thông tin PR:

- **Title**: `feat: Login API`
- **Description**:

```markdown
## Changes

- Thêm endpoint POST /api/login
- Trả về JWT token khi thành công

## Linked Task

- ClickUp Task: [Develop Login API](https://app.clickup.com/t/123456)
```

- **Reviewers**: Assign 2 thành viên review.
- **Milestone**: Sprint 1 (nếu có).

---

## 5. Review Code

**Bước 1**: Reviewers kiểm tra code:

- Comment góp ý (ví dụ: `"Thiếu validate email format"`).
- Yêu cầu sửa đổi nếu cần.

**Bước 2**: Member A sửa code:

```bash
git commit -m "fix: add email validation"
git push origin feature/login-api
```

---

## 6. Merge PR Vào Develop

Sau khi được approve:

- Merge PR: Chọn **"Squash and Merge"** để gộp commit.
- Delete branch: Xóa branch `feature/login-api` sau khi merge.

---

## 7. Cập Nhật ClickUp

**Bước 1**: Đánh dấu task "Develop Login API" là **Done** trên ClickUp.

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
git tag -a v1.0.0 -m "Release Login API"
git push origin main --tags
```
