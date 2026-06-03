---
title: "AI Agentic Thay Đổi Cách Mình Làm Việc. Mình Cũng Chưa Chắc Cảm Thấy Thế Nào."
description: "Trải nghiệm thực tế khi đưa AI coding agent vào quy trình hàng ngày: nhanh hơn thật, nhưng cái giá là gì?"
pubDate: "Jun 03 2025"
tags: ["AI", "coding agent", "workflow"]
---

Khi mình bắt đầu dùng AI coding agent, mình nghĩ lợi ích rất đơn giản: mình sẽ ship nhanh hơn. Và đúng là nhanh hơn thật. Nhưng thứ thú vị hơn không phải là tốc độ. Đó là cách bản thân công việc đã thay đổi, và điều đó có nghĩa gì với tư cách một kỹ sư.

## Từ Copilot Đến Cursor

Trước đó mình đã dùng [GitHub Copilot](https://github.com/features/copilot). Gợi ý inline khá hữu ích, giống như autocomplete thông minh hơn. Nó giúp gõ code dễ hơn nhưng không thay đổi cách mình tư duy về việc xây dựng phần mềm.

Rồi mình chuyển sang [Cursor](https://cursor.com). Khác biệt nằm ở context. Cursor thực sự đọc codebase của bạn, không chỉ file đang mở mà cả cấu trúc dự án, những pattern bạn đã thiết lập, những import bạn đang dùng. Khi mình bảo nó xây dựng thứ gì đó, nó biết đặt ở đâu và nên follow pattern nào.

Đó là khoảnh khắc nó chuyển từ một mẹo hay sang một sự thay đổi workflow thực sự.

## Cách Mình Làm Việc Bây Giờ

Quy trình của mình trông thế này: mình xác định thứ cần tồn tại, trỏ Cursor vào file liên quan, rồi nói "làm đi." Không phải một bản spec chi tiết. Không phải kế hoạch từng bước. Chỉ một câu lệnh ngắn và một đường dẫn file. Rồi mình review thứ nó tạo ra.

Nó hoạt động tốt hơn mình nghĩ khá nhiều. Gần đây mình nhờ nó build một custom widget trong Flutter, thứ bình thường mình sẽ mất cả tiếng, và nó làm đúng phần lớn ngay từ lần đầu:

- Widget render đúng
- Props được type
- Layout khớp với mô tả
- Mình chỉnh vài chỗ rồi chuyển sang việc khác

> Phần hay nhất: nó tự follow pattern có sẵn trong codebase. Mình không cần phải bảo nó về naming convention hay cấu trúc dự án. Nó tự đọc file và khớp theo.

## Vấn Đề Tự Tin

Nhưng đây là phần khiến mình bận tâm: Cursor rất tự tin. Luôn luôn. Và đôi khi sự tự tin đó sai.

Những lỗi tệ nhất là sai lầm về **state management**. Code nhìn có vẻ đúng. Nó compile. Widget render. Nhưng state không update khi cần, hoặc rebuild quá nhiều, hoặc bỏ sót edge case chỉ lộ ra sau mười lần tương tác.

Những bug này rất tinh vi. Mình chỉ bắt được vì mình hiểu domain đủ sâu để nhận ra. Nếu mình ít can thiệp hơn, mình đã không phát hiện chúng.

## Skill Drift

Đó là mâu thuẫn. Mình thiết kế và agent viết, nhưng mình vẫn cần hiểu domain đủ sâu để review thứ nó tạo ra. Và mình bắt đầu lo lắng: nếu mình tiếp tục giao phần implementation, liệu mình có mất đi sự hiểu biết sâu vốn khiến mình thành reviewer tốt ngay từ đầu?

Có một rủi ro drift kỹ năng thực sự ở đây.

1. Nếu mình không tự viết code, mình không trải qua những quyết định gian nan để xây dựng trực giác
2. Mình không học edge cases theo cách khó khăn nhất
3. Mình chỉ đọc diff có vẻ đúng rồi lướt qua

Theo thời gian, điều đó có cảm giác như đang làm rỗng đi kiến thức khiến mình có giá trị.

## Vẫn Đang Tìm Hiểu

Mình chưa chắc đã có câu trả lời. Mình vẫn đang ở giữa đường cong học hỏi.

Có ngày mình cảm giác như đã mở khóa siêu năng lực, mình có thể build thứ trong vài tiếng mà trước đây mất vài ngày. Có ngày mình cảm giác như đang giao phó sự phát triển của bản thân cho một công cụ rất giỏi trong việc nghe có vẻ đúng.

---

Tóm lại trung thực: **AI agentic thay đổi đáng kể cách mình làm việc, nhưng vẫn còn sớm, nó chưa hoàn hảo, và mình vẫn đang tìm cách dùng nó mà không đánh mất những phần khiến mình trở thành kỹ sư tốt.**

Mình sẽ tiếp tục viết về chủ đề này khi mình học thêm được điều mới.
