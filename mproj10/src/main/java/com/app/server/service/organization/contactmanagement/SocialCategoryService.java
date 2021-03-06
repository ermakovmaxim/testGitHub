package com.app.server.service.organization.contactmanagement;
import com.app.config.annotation.Complexity;
import com.app.config.annotation.SourceCodeAuthorClass;
import com.athena.server.pluggable.utils.bean.ResponseBean;
import org.springframework.http.HttpEntity;
import com.app.bean.PaginationBean;
import com.app.shared.organization.contactmanagement.SocialCategory;
import java.util.List;
import com.athena.server.pluggable.utils.bean.FindByBean;

@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "3", comments = "Service for SocialCategory Master table Entity", complexity = Complexity.LOW)
public abstract class SocialCategoryService {

    abstract HttpEntity<ResponseBean> findAll() throws Exception;

    abstract HttpEntity<ResponseBean> findPageWiseData(PaginationBean paginationBean) throws Exception;

    abstract HttpEntity<ResponseBean> save(SocialCategory entity) throws Exception;

    abstract HttpEntity<ResponseBean> save(List<SocialCategory> entity, boolean isArray) throws Exception;

    abstract HttpEntity<ResponseBean> delete(String id) throws Exception;

    abstract HttpEntity<ResponseBean> update(SocialCategory entity) throws Exception;

    abstract HttpEntity<ResponseBean> update(List<SocialCategory> entity, boolean isArray) throws Exception;

    abstract HttpEntity<ResponseBean> findById(FindByBean findByBean) throws Exception;
}
