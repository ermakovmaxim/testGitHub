package com.app.server.service.organization.contactmanagement;
import com.app.config.annotation.Complexity;
import com.app.config.annotation.SourceCodeAuthorClass;
import com.athena.server.pluggable.utils.bean.ResponseBean;
import org.springframework.http.HttpEntity;
import com.app.bean.PaginationBean;
import com.app.shared.organization.contactmanagement.Title;
import java.util.List;
import com.athena.server.pluggable.utils.bean.FindByBean;

@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "3", comments = "Service for Title Master table Entity", complexity = Complexity.LOW)
public abstract class TitleService {

    abstract HttpEntity<ResponseBean> findAll() throws Exception;

    abstract HttpEntity<ResponseBean> findPageWiseData(PaginationBean paginationBean) throws Exception;

    abstract HttpEntity<ResponseBean> save(Title entity) throws Exception;

    abstract HttpEntity<ResponseBean> save(List<Title> entity, boolean isArray) throws Exception;

    abstract HttpEntity<ResponseBean> delete(String id) throws Exception;

    abstract HttpEntity<ResponseBean> update(Title entity) throws Exception;

    abstract HttpEntity<ResponseBean> update(List<Title> entity, boolean isArray) throws Exception;

    abstract HttpEntity<ResponseBean> findById(FindByBean findByBean) throws Exception;
}
